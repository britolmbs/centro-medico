import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
    {id: '1', image: '../assets/'},
    {id: '2', image: ''},
    {id: '3', image: ''},
    {id: '4', image: ''},

]



const Carrossel = () => {
    return (
       <Swiper
       slidesPerView={1}
       pagination={{ clickable: true}}
       navigation
       >
       {data.map((item) => (
        <SwiperSlide key={item.id}>
            <img src={item.image}
            className="slide-item" />
        </SwiperSlide>
       ))}
        </Swiper>

    )
}



export default Carrossel;