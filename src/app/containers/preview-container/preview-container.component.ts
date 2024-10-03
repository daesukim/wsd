import { Component, inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { TypeHomePageV1 } from '../../entity/contentful-types';
import { PageComponent } from '../../model/page-model';
import { ContentTypeService } from '../../services/content-type.service';
import { ContentfulService } from '../../services/contentful.service';
import { ContentPageComponent } from '../content-page/content-page.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-preview-container',
  standalone: true,
  imports: [],
  templateUrl: './preview-container.component.html',
  styleUrl: './preview-container.component.scss'
})
export class PreviewContainerComponent {
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
    this.contentfulService.getHomePageBySlug('home', true).then((pageData) => {
      this.page = pageData;
      this.pageContainer.clear();
      const componentRef = this.pageContainer.createComponent<PageComponent>(HomePageComponent);
      componentRef.instance.page = this.page as TypeHomePageV1;
    });
  }

  loadContentPageComponent() {
    this.contentfulService
      .getContentPageBySlug('content-page', true)
      .then((pageData) => {
        this.page = pageData;
        this.pageContainer.clear();
        const componentRef = this.pageContainer.createComponent<PageComponent>(ContentPageComponent);
        // componentRef.instance.page = this.page as TypeContentPageV1;
      });
  }
}
