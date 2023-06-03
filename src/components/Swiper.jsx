
import { Pagination } from 'swiper';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper className='main-slider'
            modules={[EffectCards, Pagination]}
            effect={"cards"}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            cardsEffect={{
                slideShadows: false,
                rotate: false,
                perSlideRotate: 0,
                perSlideOffset: 28
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='main-slider__slide'>
                <picture >
                    <img src="./img/main-slider-img-1.jpg" alt="slider-1" className="main-slider__img" />
                </picture>
            </SwiperSlide>
            <SwiperSlide className='main-slider__slide'><img src="./img/main-slider-img-2.jpg" alt="" className="main-slider__img" /></SwiperSlide>
            <SwiperSlide className='main-slider__slide'><img src="./img/main-slider-img-3.jpg" alt="" className="main-slider__img" /></SwiperSlide>
            <SwiperSlide className='main-slider__slide'><img src="./img/main-slider-img-4.jpg" alt="" className="main-slider__img" /></SwiperSlide>
        </Swiper>
    );
};