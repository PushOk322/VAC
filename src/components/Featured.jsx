import {Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper className='featured'
            modules={[Scrollbar]}
            spaceBetween={16.5}
            slidesPerView={5.2}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='featured__slide'>
                <div className="featured__wrapper">
                    <img src="./img/featured-img-1.png" alt="" className="featured__img" />
                    <div className="featured__username">User Name</div>
                    <div className="featured__usertag">@username</div>
                    <div className="featured__sales">24 sales on 32ETH</div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};