import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Brand1 from "../../../assets/banner/banner1.png";
import Brand2 from "../../../assets/banner/banner2.png";
import Brand3 from "../../../assets/banner/banner3.png";

const HeroCards = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='my-8'
    >
      <SwiperSlide>
        <img className='w-full' src={Brand1} alt="Brand 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-full' src={Brand2} alt="Brand 2" />
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-full' src={Brand3} alt="Brand 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCards;