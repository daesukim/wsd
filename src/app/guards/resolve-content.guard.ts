import { CanActivateFn } from '@angular/router';
import { ContentTypeService } from '../services/content-type.service';
import { inject } from '@angular/core';

export const resolveContentGuard: CanActivateFn = (route, state) => {
  const contentTypeService = inject(ContentTypeService);

  const contentType = route.data['contentType'];
  const slug = route.paramMap.get('slug');

  contentTypeService.setContentType(contentType);
  contentTypeService.setSlug(slug);

  return true;
};
