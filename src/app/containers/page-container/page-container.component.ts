import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { ContentTypeService } from '../../services/content-type.service';
import { Entry } from 'contentful';
import { PageComponent } from '../../model/page-model';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContentPageComponent } from '../content-page/content-page.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss'
})
export class PageContainerComponent {
  pageHost = inject(ViewContainerRef);
  page: void | Entry<any> | null = null;
  contentType: string = '';
  slug: string | null = null;

  constructor(private contentTypeService: ContentTypeService, private contentfulService: ContentfulService, private activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(val => {
      this.contentType = this.contentTypeService.getContentType();
      this.slug = this.contentTypeService.getSlug();
      this.productChanged();
    });
  }

  productChanged(){
    if(this.contentType === 'homepage'){
      this.loadHomePageComponent();
    }else if(this.contentType === 'contentPage'){
      this.loadContentPageComponent();
    }
  }

  loadHomePageComponent(){
    this.contentfulService.getHomePageBySlug('home')
    .then(pageData => {
      this.page = pageData;
      this.pageHost.clear();
      this.pageHost.createComponent<PageComponent>(HomePageComponent);
    });
  }

  loadContentPageComponent(){
    this.contentfulService.getContentPageBySlug('wsd-content-page')
    .then(pageData => {
      this.page = pageData;
      this.pageHost.clear();
      this.pageHost.createComponent<PageComponent>(ContentPageComponent);
    });
  }
}
