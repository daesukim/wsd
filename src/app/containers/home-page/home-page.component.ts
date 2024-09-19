import { Component, Input, OnInit } from '@angular/core';
import { PageComponent } from '../../model/page-model';
import { TypeHomePageV1 } from '../../entity/contentful-types';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements PageComponent, OnInit{
  @Input() page: TypeHomePageV1 | null = null;
  @Input() preview: boolean = false;
  
  ngOnInit(): void {
    console.log('hello')
  }
}
