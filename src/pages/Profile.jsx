import React, { useState } from 'react';

import SearchBar from "../components/SearchBar.jsx";
import Cards from "../components/Cards.jsx";
import BidPopUp from "../components/BidPopUp.jsx";

const Profile = () => {
    const [dropActive, setDropActive] = useState(true);
    const [modalActive, setModalActive] = useState(true);

    const ProfileDrop = ({ active, setActive }) => {
        return (
            <div className="profile-search__user-box" onClick={() => {
                if (active === true) {
                    setActive(false);
                    console.log(1)
                } else {
                    setActive(true);
                    console.log(2)
                }
            }}>
                <div className={active ? "profile-drop active" : "profile-drop"}>
                    <div className="profile-drop__adress">Address: 0c0xcx1cx606g4516x51g1...</div>
                    <button className="profile-drop__link">My profile</button>
                    <button className="profile-drop__link">Balance settings</button>
                    <button className="profile-drop__logout">Log out</button>
                </div>
                <img src="./img/user-avatar.svg" className="profile-search__avatar"></img>
                <div className="profile-search__user-container" >
                    <div className="profile-search__username">User Name</div>
                    <div className="profile-search__tag-balance">
                        <div className="profile-search__usertag">@username</div>
                        <div className="profile-search__balance">
                            Balance:
                            <img src="./img/sold-icon.svg" alt="" className="profile-search__balance-icon" />
                            <span>1,5M</span>
                        </div>
                    </div>
                </div>
                <img src="./img/filter-arrow.svg" alt="" className="profile-search__arrow" />
            </div>

        );
    }


    return (
        <>
            <div className="profile-search">
                <img src="./img/search-logo.svg" alt="" className="profile-search__logo" />
                <form action="#" className="profile-search__bar">
                    <img src="./img/search-icon.svg" alt="" className="profile-search__icon" />
                    <input type="text" className="profile-search__input" placeholder="Search for ..." />
                </form>

                <button className="profile-search__button">+ Add artwork</button>
                <ProfileDrop active={dropActive} setActive={setDropActive}></ProfileDrop>
            </div>


            {/* <BidPopUp active={modalActive} setActive={setModalActive}></BidPopUp> */}

            <div className="profile-hero">
                <div className="profile-hero__user">
                    <div className="profile-hero__user-box">
                        <img src="./img/user-avatar.svg" className="profile-hero__hero-avatar"></img>
                        <div className="profile-hero__user-container">
                            <div className="profile-hero__username">User Name</div>
                            <div className="profile-hero__usertag">@username</div>
                        </div>
                    </div>
                    <div className="profile-hero__follow-box">
                        <div className="profile-hero__text-container">
                            <div className="profile-hero__light-text">234</div>
                            <div className="profile-hero__grey-text">Followers</div>
                        </div>
                        <div className="profile-hero__text-container">
                            <div className="profile-hero__light-text">15</div>
                            <div className="profile-hero__grey-text">Following</div>
                        </div>
                        <div className="profile-hero__buttons">
                            <button className="profile-hero__button">
                                <img src="./img/external-link.svg" alt="" className="profile-hero__button-icon" />
                            </button>
                            <button className="profile-hero__button">
                                <img src="./img/share.svg" alt="" className="profile-hero__button-icon" />
                            </button>
                            <button className="profile-hero__button">
                                <img src="./img/options.svg" alt="" className="profile-hero__button-icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="profile-hero__socials">
                    <div className="profile-hero__social">
                        <img src="./img/twitch-icon.svg" alt="" className="profile-hero__social-icon" />
                        Twitch
                    </div>
                    <div className="profile-hero__social">
                        <img src="./img/insta-icon.svg" alt="" className="profile-hero__social-icon" />
                        Instagram
                    </div>
                    <div className="profile-hero__social">
                        <img src="./img/twitter-icon.svg" alt="" className="profile-hero__social-icon" />
                        Twitter
                    </div>
                    <div className="profile-hero__social">
                        <img src="./img/only-icon.svg" alt="" className="profile-hero__social-icon" />
                        Onlyfans
                    </div>
                </div>
                <div className="profile-hero__text">
                    <span>Description: </span>
                    The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                </div>
            </div>

            <div className="profile-cards">
                <div className="profile-cards__title">
                    <div className="profile-cards__pick active">Created</div>
                    <div className="profile-cards__pick">Collected</div>
                </div>
                <Cards></Cards>
            </div>
        </>
    );
}

export default Profile;