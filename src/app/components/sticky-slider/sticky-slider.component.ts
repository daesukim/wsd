import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { def } from '../../data/sticky_slider_data';

@Component({
  selector: 'app-sticky-slider',
  standalone: true,
  imports: [],
  templateUrl: './sticky-slider.component.html',
  styleUrl: './sticky-slider.component.scss',
  host: {
    '(window:scroll)' : 'onScroll()'
  },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StickySliderComponent implements OnInit, AfterViewInit{
  readonly animation_definition = def;
  elements!: {[key: string]: HTMLElement};
  enabled = new Map();
  disabled = new Map();

  // VIEW CHILD
  @ViewChild('sticky_container') sticky_container!:ElementRef<HTMLElement>;
  @ViewChild('scroll_down') scroll_down!:ElementRef<HTMLElement>;
  @ViewChild('moving_background') moving_background!:ElementRef<HTMLElement>;
  @ViewChild('slide1') slide1!:ElementRef<HTMLElement>;
  @ViewChild('slide2') slide2!:ElementRef<HTMLElement>;
  @ViewChild('slide3') slide3!:ElementRef<HTMLElement>;
  @ViewChild('slide4') slide4!:ElementRef<HTMLElement>;
  @ViewChild('slide5') slide5!:ElementRef<HTMLElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.elements = {
      "sticky-container": this.sticky_container.nativeElement,
      "scroll-down": this.scroll_down.nativeElement,
      "moving-background": this.moving_background?.nativeElement,
      slide1: this.slide1.nativeElement,
      slide2: this.slide2.nativeElement,
      slide3: this.slide3.nativeElement,
      slide4: this.slide4.nativeElement,
      slide5: this.slide5.nativeElement,
    }
    this.initAnimation();
  }

  initAnimation():void {
    let container_height = 0;

    // Set height dynamically. Height depends on the bottom field in the last item of animation_definition
    if(this.elements){
      const lastElementKey:string = Object.keys(this.elements)[Object.keys(this.elements).length - 1];
      container_height = this.animation_definition.get(lastElementKey)?.bottom;
    }

    const stickyNativeElement = this.elements['sticky-container'];
    stickyNativeElement.style.height = `${container_height}px`;
    
    // add every HTML elements to disabled Map
    this.animation_definition.forEach((obj, id) => {
      this.disabled.set(id, obj);
    });
    
    // apply initial style
    this.disabled.forEach((obj, id) => {
      Object.keys(obj.topStyle).forEach((styleName) => {
        const pushValue:number = obj.topStyle[styleName];
        const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
        this.applyStyle(htmlElement, styleName, pushValue);
      });
    });
  }

  applyStyle(element:HTMLElement, styleName: string, value:number):void {
    if (styleName === "translateY") {
      element.style.transform = `translateY(${value}px)`;
      return;
    }
  
    if (styleName === "translateX") {
      element.style.transform = `translateX(${value}px)`;
      return;
    }

    if (styleName === "opacity"){
      element.style.opacity = value.toString();
      console.log(element.style.opacity)
      return;
    }

    else{
      console.log('Some styles have not been applied');
    }
  }

  onScroll():void{
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
  
        this.disabled.set(id, obj);
        this.elements?.[id]?.classList.remove("enabled");
        this.elements?.[id]?.classList.add("disabled");
        this.enabled.delete(id);
      }

      else {
        this.applyAnimations(currentPos, id);
      }
    });
  }

  isAmong(num: number, top: number, bottom: number):boolean {
    return num >= top && num <= bottom;
  }

  applyAnimations(currentPos:number, id:string):void {
    const animations = this.animation_definition.get(id)?.animations;
    if (!animations) {
      return;
    }

    animations.forEach((animation:any) => {
      const { top: a_top, bottom: a_bottom, easing, styles } = animation;
      const isIn = this.isAmong(currentPos, a_top, a_bottom);

      if (isIn && !animation.enabled) {
        animation.enabled = true;
      }
  
      else if (!isIn && animation.enabled) {
        if (currentPos <= a_top) {
          this.applyStyles(id, styles, 0);
        } else if (currentPos >= a_bottom) {
          this.applyStyles(id, styles, 1);
        }
        animation.enabled = false;
      }
  
      if (animation.enabled) {
        const rate = easing((currentPos - a_top) / (a_bottom - a_top));
        this.applyStyles(id, styles, rate);
      }
    });
  }

  applyStyles(id: string, styles:any, rate: number):void {
    styles.forEach((style:any) => {
      const { name, topValue, bottomValue } = style;
      const value = this.getPoint(topValue, bottomValue, rate);
      const htmlElement:HTMLElement = this.elements?.[id] as HTMLElement;
      this.applyStyle(htmlElement, name, value);
    });
  }

  getPoint(top: number, bottom: number, rate: number):number {
    return top + (bottom - top) * rate;
  }
}
