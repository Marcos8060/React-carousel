import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import data from "./data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";

function App() {
  const [items,setItems] = useState(data)
  return ( 
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className='slide'
      spaceBetween={70}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) =>(
        <SwiperSlide key={item.id}>
          <img src={item.img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
