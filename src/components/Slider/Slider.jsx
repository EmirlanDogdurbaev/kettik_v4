import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './stylle.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import classes from "./Slider.module.scss";
import axios from "axios";
import {BASE_API} from "../../store/api/base_api.js";


const Slider = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_API}/tour/all`)
            .then((response) => {
                setTours(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при получении данных туров:", error);
            });
    }, []);


    const tour = tours.map((item) => (
        <SwiperSlide key={item.id}>
            <article
                className={classes.TourCard}
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                }}
            >
                <div>
                    <h1>{item.title}</h1>
                    <Link to={`/tours/${item.id}`}> See more</Link>
                </div>
            </article>
        </SwiperSlide>
    ));

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"

        >
            {tour}
        </Swiper>
    );
};

export default Slider;
