import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  // private publishedClient = contentful.createClient({
  //   space: environment.contentful.space,
  //   accessToken: environment.contentful.accessToken,
  // });

  // // private previewClient = contentful.createClient({
  // //   space: environment.contentful.space,
  // //   environment: environment.contentful.environment,
  // //   accessToken: environment.contentful.previewToken,
  // //   host: 'preview.contentful.com',
  // // });

  // getHomePageBySlug(slug: string, preview: boolean = false): Promise<void | contentful.Entry<any> | null> {
  //   let page: void | contentful.Entry<any> | null = null;
  //   let client = preview ? this.previewClient : this.publishedClient;

  //   return client.getEntries<TypeImoHomePageSkeleton>(Object.assign({
  //     content_type: 'aHomePage',
  //     include: 10,
  //   })
  // )
  // .then((res) => {
  //   res.items.forEach((item: contentful.Entry<any>) => {
  //     if (item.fields['slug'] === slug) {
  //       page = item;
  //     }
  //   });
  //   return page;
  // });
  // }

  // getProductPageBySlug(slug: string, preview: boolean = false): Promise<void | contentful.Entry<any> | null> {
  //   let page: void | contentful.Entry<any> | null = null;
  //   let client = preview ? this.previewClient : this.publishedClient;

  //   return client
  //     .getEntries<any>(Object.assign({
  //         content_type: 'imoProductPage',
  //         include: 10,
  //       })
  //     )
  //     .then((res) => {
  //       res.items.forEach((item: contentful.Entry<any>) => {
  //         if (item.fields['slug'] === slug) {
  //           page = item;
  //         }
  //       });
  //       return page;
  //     });
  // }


  // getContentPageBySlug(
  //   slug: string,
  //   preview: boolean = false
  // ): Promise<void | contentful.Entry<any> | null> {
  //   let page: void | contentful.Entry<any> | null = null;
  //   let client = preview ? this.previewClient : this.publishedClient;

  //   return client
  //     .getEntries<TypeContentPageSkeleton>(
  //       Object.assign({
  //         content_type: 'contentPage',
  //         include: 10,
  //       })
  //     )
  //     .then((res) => {
  //       res.items.forEach((item: contentful.Entry<any>) => {
  //         // console.log(item);
  //         if (item.fields['slug'] === slug) {
  //           page = item;
  //         }
  //       });
  //       return page;
  //     });
  // }
}
