import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [dropActive, setDropActive] = useState(false);
    const [popTimeActive, setPopTimeActive] = useState(false);
    const [popEditActive, setPopEditActive] = useState(false);

    const [createActive, setCreateActive] = useState(true);


    const PopCreate = ({ active, setActive }) => {
        const [steps, setSteps] = useState(1);
        const [radioActive, setRadioActive] = useState(true);
        const handleNextStep = () => {
            if (steps > 2) {
                setSteps(1);
            } else {
                setSteps(steps + 1);
                console.log(steps);
            }
        };

        const [quantity, setQuantity] = useState(1);
        const plus = () => {
            setQuantity(quantity + 1);
            console.log("+");
        };
        const minus = () => {
            if (quantity > 0) {
                setQuantity(quantity - 1);
            }
            console.log("-");
        };

        return (
            <>
                <div className={active ? "create__container active" : "create__container"}>
                    <div className={active ? "create active" : "create-edit"}>
                        <div className="create__cross" onClick={() => setActive(false)}></div>
                        <div className="create__title">Creating artwork</div>

                        <div className="create__progress">
                            <div className={steps === 1 ? "create__progress-segment active" : "create__progress-segment"}></div>
                            <div className={steps === 2 ? "create__progress-segment active" : "create__progress-segment"}></div>
                            <div className={steps === 3 ? "create__progress-segment active" : "create__progress-segment"}></div>
                        </div>

                        <div className="create__progress-numbers">Step {steps} from 3</div>




                        <div className={steps === 1 ? "create__content active" : "create__content"}>
                            <div className="create__heading">Upload the artwork you will be selling</div>
                            <div className="create__file-field">
                                <div className="create__requirements">
                                    1500x500px. <br />
                                    JPG, PNG or GIF. <br />
                                    100MB max size. <br />
                                </div>
                                <div className="create__file-text">
                                    Drag and drop an image here, or click to browse
                                </div>
                            </div>
                        </div>



                        <div className={steps === 2 ? "create__content active" : "create__content"}>
                            <div className="create__heading">Censor the public version of artwork, if it contains 18+ content</div>
                            <img src="./img/step-2-img.jpg" alt="" className="create__step-img" />
                            <div className="create__icons">
                                <img src="./img/step-2-img-icon.svg" alt="" className="create__icon" />
                                <img src="./img/step-2-sticker-icon.svg" alt="" className="create__icon" />
                                <img src="./img/step-2-raindrop-icon.svg" alt="" className="create__icon" />
                            </div>
                        </div>



                        <div className={steps === 3 ? "create__content active third" : "create__content"}>
                            <div className="create__heading">Artwork name</div>
                            <input type="text" className="create__input-name" />
                            <div className="create__heading">Description</div>
                            <input type="text" className="create__input-desc" />

                            <div className="create__heading">Type</div>
                            <div className="create__types">
                                <div className={radioActive ? "create__type active" : "create__type"} onClick={() => { setRadioActive(true) }}>
                                    <div className="create__radio">
                                        <div className="create__radio-inside"></div>
                                    </div>
                                    <div className="create__type-name">Auction</div>
                                </div>
                                <div className={radioActive ? "create__type" : "create__type active"} onClick={() => { setRadioActive(false) }}>
                                    <div className="create__radio">
                                        <div className="create__radio-inside"></div>
                                    </div>
                                    <div className="create__type-name">Sale</div>
                                </div>
                            </div>
                            <div className="create__options">
                                <div className="create__copies">
                                    <div className="create__heading">Copies</div>
                                    <div className="create__quantity">
                                        <div alt="" className="create__minus" onClick={minus}>-</div>
                                        <div className="create__quantity-number">{quantity}</div>
                                        <div alt="" className="create__minus plus" onClick={plus}>+</div>
                                    </div>
                                </div>
                                <div className="create__sum">
                                    <div className="create__heading">Min.sum</div>
                                    <div className="create__sum-wrapper">
                                        <div className="create__sum-input-container">
                                            <input type="number" className="create__sum-input" placeholder="10000000" />
                                            <div className="create__input-placeholder">TASTE</div>
                                        </div>
                                        <div className="create__dollars">(1308.54$)</div>
                                    </div>
                                </div>
                            </div>

                            <div className={radioActive ? "create__time active" : "create__time"}>
                                <div className="pop-time__min">Selling will end</div>
                                <form action="#" className="pop-time__form">
                                    <div className="pop-time__input-container">
                                        <input type="number" className="pop-time__input" placeholder="22.02.2020" />
                                    </div>
                                    <div className="pop-time__input-container time">
                                        <input type="number" className="pop-time__input" placeholder="23:45" />
                                    </div>
                                    <div className="pop-time__dollars">05h 02m 41s</div>
                                    <button className="pop-time__delete">
                                        <img src="./img/pop-time-delete-icon.svg" alt="" className="pop-time__delete-icon" />
                                        delete file
                                    </button>
                                </form>
                            </div>

                        </div>





                        <button className="create__button" onClick={handleNextStep}>
                            {steps === 3 ? "Finish creating" : "Next step"}
                        </button>

                    </div>
                </div>
            </>
        );
    };




    const PopEdit = ({ active, setActive }) => {
        return (
            <div className={active ? "pop-edit__container active" : "pop-edit__container"}>
                <div className={active ? "pop-edit active" : "pop-edit"}>
                    <div className="pop-edit__cross" onClick={() => setActive(false)}></div>
                    <div className="pop-edit__title">Edit your Profile</div>
                    <div className="pop-edit__row">
                        <div className="pop-edit__input-container">
                            <label htmlFor="name" className="pop-edit__label">Name</label>
                            <input id='name' type="text" className="pop-edit__input" />
                        </div>
                        <div className="pop-edit__input-container">
                            <label htmlFor="username" className="pop-edit__label">Username</label>
                            <input id='username' type="text" className="pop-edit__input" />
                        </div>
                    </div>
                    <div className="pop-edit__row">
                        <div className="pop-edit__input-container">
                            <label htmlFor="email" className="pop-edit__label">Email</label>
                            <input id='email' type="email" className="pop-edit__input" />
                        </div>
                        <div className="pop-edit__explainer">
                            Add your email address to receive notifications about your activity on Foundation. This will not be shown on your profile.
                        </div>
                    </div>
                    <div className="pop-edit__input-container">
                        <label htmlFor="bio" className="pop-edit__label">BIO</label>
                        <input id='bio' type="text" className="pop-edit__big-input" />
                    </div>

                    <div className="pop-edit__input-container">
                        <label htmlFor="bio" className="pop-edit__label">Profile image</label>
                        <input id='bio' type="file" className="pop-edit__file-input" />
                    </div>

                    <div className="pop-edit__socials">
                        <div className="pop-edit__header">Contacts</div>
                        <div className="pop-edit__socials-container">
                            <div className="pop-edit__social">
                                <label htmlFor="social" className="pop-edit__social-label">
                                    <img src="./img/twitch-icon.svg" alt="" className="pop-edit__social-icon" />
                                    Twitch
                                </label>
                                <input id='social' type="text" className="pop-edit__social-input" />
                            </div>
                            <div className="pop-edit__social">
                                <label htmlFor="social" className="pop-edit__social-label">
                                    <img src="./img/insta-icon.svg" alt="" className="pop-edit__social-icon" />
                                    Instagram
                                </label>
                                <input id='social' type="text" className="pop-edit__social-input" />
                            </div>
                            <div className="pop-edit__social">
                                <label htmlFor="social" className="pop-edit__social-label">
                                    <img src="./img/twitter-icon.svg" alt="" className="pop-edit__social-icon" />
                                    Twitter
                                </label>
                                <input id='social' type="text" className="pop-edit__social-input" />
                            </div>
                            <div className="pop-edit__social">
                                <label htmlFor="social" className="pop-edit__social-label">
                                    <img src="./img/only-icon.svg" alt="" className="pop-edit__social-icon" />
                                    Onlyfans
                                </label>
                                <input id='social' type="text" className="pop-edit__social-input" />
                            </div>
                        </div>
                    </div>
                    <div className="pop-edit__save-button">
                        Save changes
                    </div>
                </div>
            </div>
        );
    };

    const PopTime = ({ active, setActive }) => {
        return (
            <>
                <div className={active ? "pop-time__background active" : "pop-time__background"}>
                    <div className={active ? "pop-time active" : "pop-time"}>
                        <div className="pop-time__cross" onClick={() => setActive(false)}></div>
                        <div className="pop-time__title">Changing ending time</div>
                        <div className="pop-time__min">Selling will end</div>
                        <form action="#" className="pop-time__form">
                            <div className="pop-time__input-container">
                                <input type="number" className="pop-time__input" placeholder="22.02.2020" />
                            </div>
                            <div className="pop-time__input-container time">
                                <input type="number" className="pop-time__input" placeholder="23:45" />
                            </div>
                            <div className="pop-time__dollars">05h 02m 41s</div>
                            <button className="pop-time__delete">
                                <img src="./img/pop-time-delete-icon.svg" alt="" className="pop-time__delete-icon" />
                                delete file
                            </button>
                        </form>
                        <button className="pop-time__button" onClick={() => setActive(false)}>Change</button>
                    </div>
                </div>
            </>
        );
    };

    const ProfileButtonDrop = () => {
        const numberOfCards = 1;
        const [activeStates, setActiveStates] = useState(Array(numberOfCards).fill(false));

        const toggleActiveState = (index) => {
            setActiveStates((prevStates) => {
                const newStates = [...prevStates];
                newStates[index] = !newStates[index];
                return newStates;
            });
        };

        const handleEditClick = () => {
            setPopTimeActive(true);
        };

        return (
            <>
                {activeStates.map((active, index) => (
                    <div key={index}>
                        <button className="profile-cards__options-button" onClick={() => toggleActiveState(index)}>
                            <img src="./img/opions-three-dots.svg" alt="three-dots" className="profile-cards__options-icon" />
                        </button>
                        <button className={active ? "profile-cards__options-button-drop timer active" : "profile-cards__options-button-drop timer"}>
                            <img src="./img/options-timer.svg" alt="timer" className="profile-cards__options-icon" />
                        </button>
                        <button className={active ? "profile-cards__options-button-drop edit active" : "profile-cards__options-button-drop edit"} onClick={handleEditClick}>
                            <img src="./img/options-edit.svg" alt="edit" className="profile-cards__options-icon" />
                        </button>
                        <button className={active ? "profile-cards__options-button-drop delete active" : "profile-cards__options-button-drop delete"}>
                            <img src="./img/options-delete.svg" alt="delete" className="profile-cards__options-icon" />
                        </button>
                    </div>
                ))}
            </>
        );
    };

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
                    <button className="profile-drop__link" onClick={() => { setPopEditActive(true); }}>My profile</button>
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
    };


    return (
        <>
            <div className="profile-search">
                <Link to="/" aria-label="To main">
                    <img src="./img/search-logo.svg" alt="" className="profile-search__logo" />
                </Link>
                <form action="#" className="profile-search__bar">
                    <img src="./img/search-icon.svg" alt="" className="profile-search__icon" />
                    <input type="text" className="profile-search__input" placeholder="Search htmlFor ..." />
                </form>

                <button onClick={() => setCreateActive(true)} className="profile-search__button" >+ Add artwork</button>
                <ProfileDrop active={dropActive} setActive={setDropActive}></ProfileDrop>
            </div>

            <PopCreate active={createActive} setActive={setCreateActive}></PopCreate>

            <PopEdit active={popEditActive} setActive={setPopEditActive}></PopEdit>
            {/* <BidPopUp active={modalActive} setActive={setModalActive}></BidPopUp> */}

            <div className="profile-hero">
                <div className="profile-hero__user">
                    <div className="profile-hero__user-box">
                        <img src="./img/user-avatar.svg" className="profile-hero__hero-avatar" alt='user-avatar'></img>
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
                            <button className="profile-hero__button" aria-label="external link button">
                                <img src="./img/external-link.svg" alt="" className="profile-hero__button-icon" />
                            </button>
                            <button className="profile-hero__button" aria-label="share button">
                                <img src="./img/share.svg" alt="" className="profile-hero__button-icon" />
                            </button>
                            <button className="profile-hero__button" aria-label="options button">
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

            <PopTime active={popTimeActive} setActive={setPopTimeActive}></PopTime>

            <div className="profile-cards-container">
                <div className="profile-cards-container__title">
                    <div className="profile-cards-container__pick active">Created</div>
                    <div className="profile-cards-container__pick">Collected</div>
                    <div className="profile-cards-container__pick">Bids</div>
                </div>
                <div className="profile-cards">
                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-1.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement on-moderation">On moderation</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-2.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement declined">Declined</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-3.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-4.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-5.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-6.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-7.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cards__card">
                        <div className="profile-cards__user-container">
                            <div className="profile-cards__approvement approved">Approved</div>


                            <ProfileButtonDrop ></ProfileButtonDrop>
                        </div>
                        <img src="./img/card-img-8.jpg" alt="" className="profile-cards__card-img" />
                        <div className="profile-cards__title">WFH - art name</div>
                        <div className="profile-cards__sold">
                            <div className="profile-cards__words">
                                Sold htmlFor:
                            </div>
                            <div className="profile-cards__sold-container">
                                <img src="./img/card-sold-icon.svg" alt="" className="profile-cards__sold-icon" />
                                <div className="profile-cards__price">1,5M</div>
                            </div>
                        </div>
                        <div className="profile-cards__end">
                            <div className="profile-cards__words">
                                Ending in:
                            </div>
                            <div className="profile-cards__end-container">
                                <div className="profile-cards__price">05h 02m 41s</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;