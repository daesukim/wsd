import { Component } from '@angular/core';
import { PageComponent } from '../../model/page-model';
import { TypeHomePageV1 } from '../../entity/contentful-types';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent implements PageComponent{
  page: TypeHomePageV1 | null = null;
  preview: boolean = false;

}
