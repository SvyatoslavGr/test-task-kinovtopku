'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

type ImageSliderProps = {
  images: string[];
}

function ImageSlider({images}: ImageSliderProps) {
  return (
    <Swiper
      style={{
      }}
      zoom={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Zoom, Navigation, Pagination]}
      className="mySwiper"
    >
      {images.map((el: string) => (
        
          <SwiperSlide key={el}>
            <div className="swiper-zoom-container">
              <Image src={el} alt='Movie scenes' width={1280} height={720} />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ImageSlider