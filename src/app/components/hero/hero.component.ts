import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewChecked{
  images = [89, 70, 18].map((n) => `https://picsum.photos/id/${n}/1800/855/`);
  @ViewChild('tracker') trackerRef?: ElementRef;

  ngAfterViewChecked(): void {
  }

  mouseEnter(event: MouseEvent){
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (this.trackerRef?.nativeElement.style) {
      this.trackerRef.nativeElement.style.top = `${clientY / 20}px`;
  }
  }
}
