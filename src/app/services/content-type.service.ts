import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentTypeService {
  contentType: string;
  slug: string | null;

  constructor() {
    this.contentType = "";
    this.slug = "";
  }

  setContentType(contentType: string) {
    this.contentType = contentType;
  }

  getContentType(): string {
    return this.contentType;
  }

  setSlug(slug: string | null) {
    this.slug = slug;
  }

  getSlug(): string | null {
    return this.slug;
  }
}
