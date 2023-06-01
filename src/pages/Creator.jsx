import React, { useState } from 'react';

import SearchBar from "../components/SearchBar.jsx";
import Cards from "../components/Cards.jsx";
import BidPopUp from "../components/BidPopUp.jsx";

const Creator = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <SearchBar></SearchBar>

            {/* <BidPopUp active={modalActive} setActive={setModalActive}></BidPopUp> */}

            <div className="creator-hero">
                <div className="creator-hero__user">
                    <div className="creator-hero__user-box">
                        <img src="./img/user-avatar.svg" className="creator-hero__hero-avatar"></img>
                        <div className="creator-hero__user-container">
                            <div className="creator-hero__username">User Name</div>
                            <div className="creator-hero__usertag">@username</div>
                        </div>
                    </div>
                    <div className="creator-hero__follow-box">
                        <div className="creator-hero__text-container">
                            <div className="creator-hero__light-text">234</div>
                            <div className="creator-hero__grey-text">Followers</div>
                        </div>
                        <div className="creator-hero__text-container">
                            <div className="creator-hero__light-text">15</div>
                            <div className="creator-hero__grey-text">Following</div>
                        </div>
                        <div className="creator-hero__follow-button">Follow</div>
                        <div className="creator-hero__buttons">
                            <button className="creator-hero__button">
                                <img src="./img/external-link.svg" alt="" className="creator-hero__button-icon" />
                            </button>
                            <button className="creator-hero__button">
                                <img src="./img/share.svg" alt="" className="creator-hero__button-icon" />
                            </button>
                            <button className="creator-hero__button">
                                <img src="./img/options.svg" alt="" className="creator-hero__button-icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="creator-hero__socials">
                    <div className="creator-hero__social">
                        <img src="../img/twitch-icon.svg" alt="" className="creator-hero__social-icon" />
                        Twitch
                    </div>
                    <div className="creator-hero__social">
                        <img src="../img/insta-icon.svg" alt="" className="creator-hero__social-icon" />
                        Instagram
                    </div>
                    <div className="creator-hero__social">
                        <img src="../img/twitter-icon.svg" alt="" className="creator-hero__social-icon" />
                        Twitter
                    </div>
                    <div className="creator-hero__social">
                        <img src="../img/only-icon.svg" alt="" className="creator-hero__social-icon" />
                        Onlyfans
                    </div>
                </div>
                <div className="creator-hero__text">
                    <span>Description: </span>
                    The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                </div>
            </div>

            <div className="creator-cards">
                <div className="creator-cards__title">
                    <div className="creator-cards__pick active">Created</div>
                    <div className="creator-cards__pick">Collected</div>
                </div>
                <Cards></Cards>
            </div>
        </>
    );
}

export default Creator;