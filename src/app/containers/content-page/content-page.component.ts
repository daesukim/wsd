import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../model/page-model';
import { TypeHomePageV1 } from '../../entity/contentful-types';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import bezierEasing from "bezier-easing"
import { StickySliderComponent } from "../../components/sticky-slider/sticky-slider.component";

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [NavComponent, FooterComponent, StickySliderComponent],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent implements PageComponent, OnInit{
  page: TypeHomePageV1 | null = null;
  preview: boolean = false;

  ngOnInit(): void {
    
  }
}
