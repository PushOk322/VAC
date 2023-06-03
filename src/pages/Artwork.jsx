import  { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from "../components/SearchBar.jsx";
import Cards from "../components/Cards.jsx";
import BidPopUp from "../components/BidPopUp.jsx";
const Artwork = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <SearchBar></SearchBar>

            <BidPopUp active={modalActive } setActive={setModalActive}></BidPopUp>

            <div className="artwork-hero">
                <img src="./img/artwork-hero-img.jpg" alt="" className="artwork-hero__img" />
                <div className="artwork-hero__bid">
                    <div className="artwork-hero__current">
                        <div className="artwork-hero__word">Current Bid:</div>
                        <div className="artwork-hero__price">
                            <img src="./img/sold-icon.svg" alt="" className="artwork-hero__icon" />
                            <div className="artwork-hero__numbers">1,5M</div>
                            <div className="artwork-hero__dollars">(1308.54$)</div>
                        </div>
                    </div>
                    <div className="artwork-hero__line"></div>
                    <div className="artwork-hero__auction">
                        <div className="artwork-hero__word">Auction ending in:</div>
                        <div className="artwork-hero__ending-time">
                            <div className="artwork-hero__numbers">1 <span>h</span></div>
                            <div className="artwork-hero__numbers">28 <span>m</span></div>
                            <div className="artwork-hero__numbers">32 <span>s</span></div>
                        </div>
                    </div>
                    <div className="artwork-hero__line"></div>
                    <button className="artwork-hero__button" onClick={() => setModalActive(true)}>Place a bid</button>
                </div>
            </div>

            <div className="activity">
                <div className="activity__user">
                    <Link to="/creator"></Link>
                    <div className="activity__user-box">
                        <img src="./img/user-avatar.svg" className="activity__hero-avatar"></img>
                        <div className="activity__user-container">
                            <div className="activity__username">User Name</div>
                            <div className="activity__usertag">@username</div>
                        </div>
                    </div>
                    <div className="activity__title">
                        WFH - art name
                    </div>
                    <div className="activity__text">
                        <span> Сopy: </span>
                        2 of 10
                    </div>
                    <div className="activity__text">
                        <span>Description: </span>
                        The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                    </div>
                    <div className="activity__buttons">
                        <button className="activity__button">
                            <img src="./img/external-link.svg" alt="" className="activity__button-icon" />
                        </button>
                        <button className="activity__button">
                            <img src="./img/share.svg" alt="" className="activity__button-icon" />
                        </button>
                        <button className="activity__button">
                            <img src="./img/options.svg" alt="" className="activity__button-icon" />
                        </button>
                    </div>
                </div>

                <div className="activity__main">
                    <div className="activity__heading">Activity</div>
                    <div className="activity__list">
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="activity__item">
                            <div className="activity__bid-info">
                                <img src="./img/activity-avatar.svg" alt="" className="activity__avatar" />
                                <div className="activity__bid-call">
                                    <div className="activity__bid-tag">Bid placed by 0x6FC0...14A4</div>
                                    <div className="activity__bid-date">May 19, 2021 at 2:27pm</div>
                                </div>
                            </div>
                            <div className="activity__bid-price">
                                <img src="./img/sold-icon.svg" alt="" className="activity__price-icon" />
                                <div className="activity__price">1,5M <span> (1308.54$)</span> </div>
                                <button className="activity__share-button">
                                    <img src="./img/activity-share-icon.svg" alt="" className="activity__share-icon" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="artwork-cards">
                <div className="artwork-cards__title">
                    Feature works
                </div>
                <Cards></Cards>
            </div>
        </>
    );
}

export default Artwork;