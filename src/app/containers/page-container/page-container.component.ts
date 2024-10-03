import { Component, inject, ViewContainerRef } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { ContentTypeService } from '../../services/content-type.service';
import { Entry } from 'contentful';
import { PageComponent } from '../../model/page-model';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContentPageComponent } from '../content-page/content-page.component';
import { TypeContentPageV1, TypeHomePageV1 } from '../../entity/contentful-types';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss',
})
export class PageContainerComponent {
  // Injections
  private pageContainer = inject(ViewContainerRef);
  private contentTypeService = inject(ContentTypeService);
  private contentfulService = inject(ContentfulService);
  private activatedRoute = inject(ActivatedRoute);

  page: void | Entry<any> | null = null;
  contentType: string = '';
  slug: string | null = null;

  constructor() {
    this.activatedRoute.params.subscribe((val) => {
      this.contentType = this.contentTypeService.getContentType();
      this.slug = this.contentTypeService.getSlug();
      this.productChanged();
    });
  }

  productChanged() {
    if (this.contentType === 'homepage') {
      this.loadHomePageComponent();
    } else if (this.contentType === 'contentPage') {
      this.loadContentPageComponent();
    }
  }

  loadHomePageComponent() {
    this.contentfulService.getHomePageBySlug('home').then((pageData) => {
      this.page = pageData;
      this.pageContainer.clear();
      const componentRef = this.pageContainer.createComponent<PageComponent>(HomePageComponent);
      componentRef.instance.page = this.page as TypeHomePageV1;
    });
  }

  loadContentPageComponent() {
    this.contentfulService
      .getContentPageBySlug('content-page')
      .then((pageData) => {
        this.page = pageData;
        this.pageContainer.clear();
        const componentRef = this.pageContainer.createComponent<PageComponent>(ContentPageComponent);
        // componentRef.instance.page = this.page as TypeContentPageV1;
      });
  }
}
