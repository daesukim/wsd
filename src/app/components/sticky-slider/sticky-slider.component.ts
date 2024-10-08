import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { def } from '../../data/sticky_slider_data';

@Component({
  selector: 'app-sticky-slider',
  standalone: true,
  imports: [],
  templateUrl: './sticky-slider.component.html',
  styleUrl: './sticky-slider.component.scss'
})
export class StickySliderComponent implements AfterViewChecked, OnInit{
  animation_definition = def;
  elements: {[key: string]: ElementRef<HTMLElement> | null | undefined} | null = null;
  enabled = new Map();
  disabled = new Map();

  // VIEW CHILD
  @ViewChild('sticky_container') sticky_container:ElementRef<HTMLElement> | null = null;

  ngOnInit(): void {
    // this.elements = {
    //   "sticky-container": this.sticky_container,
    //   // "scroll-down": document.getElementById("scroll-down"),
    //   // slide1: document.getElementById("slide1"),
    //   // slide2: document.getElementById("slide2"),
    //   // slide3: document.getElementById("slide3"),
    //   // "moving-background": document.getElementById("moving-background"),
    //   // slide4: document.getElementById("slide4"),
    //   // slide5: document.getElementById("slide5"),
    // }
  }

  ngAfterViewChecked(): void {
    this.elements = {
      "sticky-container": this.sticky_container,
    }

    this.initAnimation();
  }

  initAnimation() {
    // Sticky Container Height
    const stickyNativeElement = this.elements?.['sticky-container'];
    if(stickyNativeElement){
      stickyNativeElement.nativeElement.style.height = `7100px`;
    }
  
    this.animation_definition.forEach((obj, id) => {
      this.disabled.set(id, obj);
    });
  
    this.disabled.forEach((obj, id) => {
      Object.keys(obj.topStyle).forEach((styleName) => {
        const pushValue:number = obj.topStyle[styleName];
        const htmlElement: ElementRef<HTMLElement> = this.elements?.[id] as ElementRef<HTMLElement>;
        // this.applyStyle(htmlElement, styleName, pushValue);
      });
    });
  }

  applyStyle(element:ElementRef<HTMLElement>, styleName: 'transform' | 'opacity' | 'translateY' | 'translateX', value:number) {
    if (styleName === "translateY") {
      element.nativeElement.style.transform = `translateY(${value}px)`;
      return;
    }
  
    if (styleName === "translateX") {
      element.nativeElement.style.transform = `translateX(${value}px)`;
      return;
    }
  
    element.nativeElement.style[styleName] = `${value}`;
  }

  
}
