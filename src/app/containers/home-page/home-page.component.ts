import { Component, inject, Input, OnInit } from '@angular/core';
import { PageComponent } from '../../model/page-model';
import { TypeHomePageV1, TypeMetadataV1 } from '../../entity/contentful-types';
import { Meta, Title } from '@angular/platform-browser';
import { MetaType } from '../../model/meta-model';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements PageComponent, OnInit {
  // INJECTIONS
  titleService = inject(Title);
  metaService = inject(Meta);

  @Input() page: TypeHomePageV1 | null = null;
  @Input() preview: boolean = false;

  metaObjects: MetaType[] = [];
  sectionList: Entry<any>[] = [];

  ngOnInit(): void {
    this.titleService.setTitle('Homepage');
    this.resetAndGenerateMeta(this.page?.fields.pageMetadata as TypeMetadataV1);
    this.metaObjects.forEach((obj) => {
      this.metaService.updateTag(obj);
    });
  }

  private resetAndGenerateMeta(metadata: TypeMetadataV1) : void{
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("name='twitter:card'");
    this.metaService.removeTag("name='twitter:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("name='twitter:description'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("property='name:image'");

    if (metadata.fields.pageDescription) this.metaObjects.push({name: 'description', content: 'this is a WSD homepage'});
    if (metadata.fields.pageKeywords) this.metaObjects.push({name: 'keywords', content: 'golf, golf products'});
    if (metadata.fields.openGraphTitle) this.metaObjects.push(
      {property: 'og:title', content: 'Open Graph Title'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Open Graph Title'}
    );
    if(metadata.fields.openGraphDescription) this.metaObjects.push(
      {property: 'og:description', content: 'Open Graph Description'},
      {name: 'twitter:description', content: 'Open Graph Description'}
    )
    if (metadata.fields.openGraphImage) this.metaObjects.push(
      {property: 'og:image', content: '#'},
      {property: 'name:image', content: '#'}
    )
  }
}
