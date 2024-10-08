import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { def } from '../../data/sticky_slider_data';

@Component({
  selector: 'app-sticky-slider',
  standalone: true,
  imports: [],
  templateUrl: './sticky-slider.component.html',
  styleUrl: './sticky-slider.component.scss',
  host: {
    '(window:scroll)' : 'onScroll()'
  }
})
export class StickySliderComponent implements AfterViewChecked, OnInit{
  readonly animation_definition = def;
  elements: {[key: string]: HTMLElement | undefined} | null = null;
  enabled = new Map();
  disabled = new Map();

  // VIEW CHILD
  @ViewChild('sticky_container') sticky_container?:ElementRef<HTMLElement>;
  @ViewChild('scroll_down') scroll_down?:ElementRef<HTMLElement>;
  @ViewChild('moving_background') moving_background?:ElementRef<HTMLElement>;
  @ViewChild('slide1') slide1?:ElementRef<HTMLElement>;
  @ViewChild('slide2') slide2?:ElementRef<HTMLElement>;
  @ViewChild('slide3') slide3?:ElementRef<HTMLElement>;
  @ViewChild('slide4') slide4?:ElementRef<HTMLElement>;
  @ViewChild('slide5') slide5?:ElementRef<HTMLElement>;

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.elements = {
      "sticky-container": this.sticky_container?.nativeElement,
      "scroll-down": this.scroll_down?.nativeElement,
      "moving-background": this.moving_background?.nativeElement,
      slide1: this.slide1?.nativeElement,
      slide2: this.slide2?.nativeElement,
      slide3: this.slide3?.nativeElement,
      slide4: this.slide4?.nativeElement,
      slide5: this.slide5?.nativeElement,
    }
    this.initAnimation();
  }

  initAnimation() {
    // Sticky Container Height
    const stickyNativeElement = this.elements?.['sticky-container'];
    if(stickyNativeElement){
      stickyNativeElement.style.height = `7100px`;
    }
  
    this.animation_definition.forEach((obj, id) => {
      this.disabled.set(id, obj);
    });
  
    this.disabled.forEach((obj, id) => {
      Object.keys(obj.topStyle).forEach((styleName) => {
        const pushValue:number = obj.topStyle[styleName];
        const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
        this.applyStyle(htmlElement, styleName, pushValue);
      });
    });
  }

  applyStyle(element:HTMLElement, styleName: string, value:number) {
    if (styleName === "translateY") {
      element.style.transform = `translateY(${value}px)`;
      return;
    }
  
    if (styleName === "translateX") {
      element.style.transform = `translateX(${value}px)`;
      return;
    }

    else{
      element.style[styleName as any] = `'${value}'`;
    }
  }

  onScroll(){
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;

    this.disabled.forEach((obj, id) => {
      if (this.isAmong(currentPos, obj.top, obj.bottom)) {
          this.enabled.set(id, obj);
          this.elements?.[id]?.classList.remove("disabled");
          this.elements?.[id]?.classList.add("enabled");
          this.disabled.delete(id);
      }
    });

    this.enabled.forEach((obj, id) => {
      const { top, bottom, topStyle, bottomStyle } = obj;

      if (!this.isAmong(currentPos, top, bottom)) {
        if (currentPos <= top) {
          Object.entries(topStyle).forEach(([styleName, value]) => {
            const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
            this.applyStyle(htmlElement, styleName, value as number);
          });
        }

        else if (currentPos >= bottom) {
          Object.entries(bottomStyle).forEach(([styleName, value]) => {
            const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
            this.applyStyle(htmlElement, styleName, value as number);
          });
        }
  
        // 리스트에서 삭제하고 disabled로 옮김.
        this.disabled.set(id, obj);
        this.elements?.[id]?.classList.remove("enabled");
        this.elements?.[id]?.classList.add("disabled");
        this.enabled.delete(id);
      }
  
      // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
      else {
        this.applyAnimations(currentPos, id);
      }
    });
  }

  isAmong(num: number, top: number, bottom: number):Boolean {
    return num >= top && num <= bottom;
  }

  applyAnimations(currentPos:number, id:string) {
    const animations = this.animation_definition.get(id)?.animations;
    if (!animations) {
      return;
    }

    animations.forEach((animation:any) => {
      const { top: a_top, bottom: a_bottom, easing, styles } = animation;
      const isIn = this.isAmong(currentPos, a_top, a_bottom);
      // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
      if (isIn && !animation.enabled) {
        animation.enabled = true;
      }
  
      // 만약 애니메이션 범위 밖에 있다면 enabled 해제하면서 스타일 초기화
      else if (!isIn && animation.enabled) {
        if (currentPos <= a_top) {
          this.applyStyles(id, styles, 0);
        } else if (currentPos >= a_bottom) {
          this.applyStyles(id, styles, 1);
        }
        animation.enabled = false;
      }
  
      // 애니메이션이 enabled 라면, 애니메이션 적용.
      if (animation.enabled) {
        const rate = easing((currentPos - a_top) / (a_bottom - a_top));
        this.applyStyles(id, styles, rate);
      }
    });
  }

  applyStyles(id: string, styles:any, rate: number) {
    styles.forEach((style:any) => {
      const { name, topValue, bottomValue } = style;
      const value = this.getPoint(topValue, bottomValue, rate);
      const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
      this.applyStyle(htmlElement, name, value);
    });
  }

  getPoint(top: number, bottom: number, rate: number) {
    return top + (bottom - top) * rate;
  }
}
