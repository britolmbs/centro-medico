import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imagens from '../assets/centromedico1.jpg';
import imagens2 from '../assets/centromedico2.jpg';
import imagens3 from '../assets/centromedico3.jpg';
import stile from '../components/css/Carrossel.css';


const data = [
    {id: '1', image: imagens},
    {id: '2', image: imagens2},
    {id: '3', image: imagens3},
   // {id: '4', image: ''},

]



const Carrossel = () => {
    return (
       <Swiper
       slidesPerView={1}
       pagination={{ clickable: true}}
       navigation
       loop = {true}
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