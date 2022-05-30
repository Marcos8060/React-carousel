import "./App.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "./data";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useState } from "react";


function App() {
  const [items,setItems] = useState(data)
  return (
    <Swiper
      className="slide"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default App;
