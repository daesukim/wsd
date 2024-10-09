import { Directive, ElementRef, inject, Input, signal } from '@angular/core';

@Directive({
  selector: '[SlideAnimation]',
  standalone: true
})
export class SlideAnimation {
  @Input({alias: 'SlideAnimation', required: true}) slideFrom! : string;
  intersecting = signal(false);
  element = inject(ElementRef);
  nativeElement = this.element.nativeElement;

  ngOnInit () {
    this.nativeElement.style.transition = 'all 1.3s ease-out';
    this.nativeElement.style.opacity = 0;

    if (this.slideFrom === 'bottom')
      this.nativeElement.style.transform = 'translateY(20%)';
    else if (this.slideFrom === 'left'){
      this.nativeElement.style.transform = 'translateX(-50%)';
    }
    else if (this.slideFrom === 'right'){
      this.nativeElement.style.transform = 'translateX(50%)';
    }

    this.observeAndUpadteStatus();
  }

  observeAndUpadteStatus () {
    if (typeof window !== 'undefined'){

      // options to be provided to Intersection Observer
      const options = {
        rootMargin: '0px',
        threshold: 0,
      }

      // function for IntersectionObserver
      const revealSection = (entries: IntersectionObserverEntry[], obeserver: IntersectionObserver) => {
        const { isIntersecting } = entries[0];
        if (!isIntersecting) return;
        this.nativeElement.style.transform = 'translateY(0)';
        this.nativeElement.style.transform = 'translateX(0)';
        this.nativeElement.style.opacity = 1;
        obeserver.disconnect();
      }

      // initialize observer
      const intersectionObserver = new IntersectionObserver(revealSection, options);

      // observe referred element
      intersectionObserver.observe(this.element.nativeElement);
    } else {
      return
    }
  }
}