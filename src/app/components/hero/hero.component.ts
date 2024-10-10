import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent{

  onLoad(element: HTMLImageElement){
    if(element.dataset['loaded']) return;
      const src = element.dataset['src'];
      if(src){
        element.src = src;
        element.dataset['loaded'] = 'true';
        console.log('hello')
        return;
      }
  }
}
