import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../model/page-model';
import { TypeHomePageV1 } from '../../entity/contentful-types';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import bezierEasing from "bezier-easing"

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent implements PageComponent, OnInit{
  page: TypeHomePageV1 | null = null;
  preview: boolean = false;

  ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
  easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
  midSlow = bezierEasing(0, 0.7, 1, 0.3);

  def: Map<String, Object> = new Map([
    [
      "slide1",
      {
        id: "slide1",
        top: 500,
        bottom: 1900,
        topStyle: {
          opacity: 0,
          translateY: -60,
        },
        bottomStyle: {
          opacity: 0,
          translateY: 60,
        },
        animations: [
          {
            enabled: false,
            top: 500,
            bottom: 1900,
            easing: this.midSlow,
            styles: [
              {
                name: "translateY",
                topValue: 60,
                bottomValue: -60,
              },
            ],
          },
          {
            enabled: false,
            top: 500,
            bottom: 800,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
          {
            enabled: false,
            top: 1400,
            bottom: 1900,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "scroll-down",
      {
        id: "scroll-down",
        top: 0,
        bottom: 1000,
        topStyle: {
          opacity: 1,
        },
        bottomStyle: {
          opacity: 0,
        },
        animations: [
          {
            enabled: false,
            top: 600,
            bottom: 1000,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "slide2",
      {
        id: "slide2",
        top: 1900,
        bottom: 3200,
        topStyle: {
          opacity: 0,
          translateY: -60,
        },
        bottomStyle: {
          opacity: 0,
          translateY: 60,
        },
        animations: [
          {
            enabled: false,
            top: 1900,
            bottom: 3200,
            easing: this.midSlow,
            styles: [
              {
                name: "translateY",
                topValue: 60,
                bottomValue: -60,
              },
            ],
          },
          {
            enabled: false,
            top: 1900,
            bottom: 2500,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
          {
            enabled: false,
            top: 2600,
            bottom: 3200,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "slide3",
      {
        id: "slide3",
        top: 3300,
        bottom: 4600,
        topStyle: {
          opacity: 0,
        },
        bottomStyle: {
          opacity: 0,
        },
        animations: [
          {
            enabled: false,
            top: 3300,
            bottom: 4600,
            easing: this.midSlow,
            styles: [
              {
                name: "translateY",
                topValue: 60,
                bottomValue: -60,
              },
            ],
          },
          {
            enabled: false,
            top: 3300,
            bottom: 3900,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
          {
            enabled: false,
            top: 4000,
            bottom: 4600,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "moving-background",
      {
        id: "moving-background",
        top: 4500,
        bottom: 5900,
        topStyle: {
          opacity: 0,
          translateY: 300,
        },
        bottomStyle: {
          opacity: 0,
          translateY: 0,
        },
        animations: [
          {
            enabled: false,
            top: 4500,
            bottom: 5300,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
              {
                name: "translateY",
                topValue: 200,
                bottomValue: 0,
              },
            ],
          },
          {
            enabled: false,
            top: 5300,
            bottom: 5900,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "slide4",
      {
        id: "slide4",
        top: 4700,
        bottom: 6000,
        topStyle: {
          opacity: 0,
        },
        bottomStyle: {
          opacity: 0,
        },
        animations: [
          {
            enabled: false,
            top: 4700,
            bottom: 6000,
            easing: this.midSlow,
            styles: [
              {
                name: "translateY",
                topValue: 60,
                bottomValue: -60,
              },
            ],
          },
          {
            enabled: false,
            top: 4700,
            bottom: 5300,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
          {
            enabled: false,
            top: 5400,
            bottom: 6000,
            easing: this.easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    [
      "slide5",
      {
        id: "slide5",
        top: 6100,
        bottom: 9000,
        topStyle: {
          opacity: 0,
        },
        bottomStyle: {
          opacity: 0,
        },
        animations: [
          {
            enabled: false,
            top: 6100,
            bottom: 7100,
            easing: this.midSlow,
            styles: [
              {
                name: "translateY",
                topValue: 60,
                bottomValue: -60,
              },
            ],
          },
          {
            enabled: false,
            top: 6100,
            bottom: 6700,
            easing: this.ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
        ],
      },
    ],
  ]);

  ngOnInit(): void {
    
  }
}
