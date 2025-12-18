import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, OnInit, TrackByFunction, ViewChild } from "@angular/core";
import { SlickCarouselComponent, SlickCarouselModule } from "ngx-slick-carousel";
interface DataItem {
  img: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements AfterViewInit {
  @Input() slides: DataItem[] = []
showSlider: boolean = false;
 @ViewChild('slickCarousel') slickModal!: SlickCarouselComponent;
  slides1 = [
    { img: 'assets/img/carousel/talerki/tal-1.jpg' },
    { img: 'assets/img/carousel/talerki/tal-2.jpg' },
    { img: 'assets/img/carousel/talerki/tal-3.jpg' },
    { img: 'assets/img/carousel/talerki/tal-4.jpg' },
    { img: 'assets/img/carousel/talerki/tal-5.jpg' },
    { img: 'assets/img/carousel/talerki/tal-6.jpg' },
  ]

 slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 1400,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: 'ease',
    dots: false,
    fade: false,
    easing: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

   ngAfterViewInit() {
    // Wait briefly for the view to initialize
    setTimeout(() => {
      this.showSlider = true;
    }, 100);
  }
   slickInit(e:any) {

    console.log('slick initialized');

  }



  breakpoint(e:any) {

    console.log('breakpoint');

  }



  afterChange(e:any) {

    console.log('afterChange');

  }



  beforeChange(e:any) {

    console.log('beforeChange');

  }
}


