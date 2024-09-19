import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { ContentTypeService } from '../../services/content-type.service';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss'
})
export class PageContainerComponent {
  @ViewChild('pageHost') pageHost!: ViewContainerRef;
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
    }else{
      console.log('this is not a homepage');
    }
  }

  loadHomePageComponent(){
  
  }
}
