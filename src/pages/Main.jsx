
import MainSwiper from "../components/Swiper.jsx";
import Featured from "../components/Featured.jsx";

import { Link } from 'react-router-dom';

const Main = () => {
    return (

        <>
            <div className="main">
                <div className="main-hero">
                    <div className="main-hero__user">
                        <img src="./img/user-avatar.svg" className="main-hero__avatar" alt="user avatar"></img>
                        <div className="main-hero__user-container">
                            <div className="main-hero__username">User Name</div>
                            <div className="main-hero__usertag">@username</div>
                        </div>
                    </div>
                    <div className="main-hero__title">
                        WFH - art name
                    </div>
                    <div className="main-hero__text">
                        <span>Description: </span>
                        The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                    </div>
                    <div className="main-hero__options">
                        <div className="main-hero__sold">
                            <div className="main-hero__sold-word">Sold htmlFor:</div>
                            <img src="./img/sold-icon.svg" alt="" className="main-hero__sold-icon" />
                            <div className="main-hero__price">1,5M</div>
                        </div>
                        <div className="main-hero__buttons">
                            <Link to="/artwork">
                                <button className="main-hero__view">View</button>
                            </Link>
                            <button className="main-hero__button" aria-label="external link button">
                                <img src="./img/external-link.svg" alt="" className="main-hero__button-icon" />
                            </button>
                            <button className="main-hero__button" aria-label="share button">
                                <img src="./img/share.svg" alt="" className="main-hero__button-icon" />
                            </button>
                            <button className="main-hero__button" aria-label="options button">
                                <img src="./img/options.svg" alt="" className="main-hero__button-icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main-slider__wrapper">
                    <MainSwiper></MainSwiper>
                </div>
            </div>
            <div className="main-filters">
                <div className="main-filters__filter">Recently added<img src="./img/filter-arrow.svg" alt="" className="main-filters__arrow" /></div>
                <div className="main-filters__filter">Auctions<img src="./img/filter-arrow.svg" alt="" className="main-filters__arrow" /></div>
            </div>


            <div className="featured__title">Featured creators</div>
            <Featured></Featured>
        </>
    );
}

export default Main;