import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
    const [connectivity, setConnectivity] = useState(0);

    const PopConnect = ({ active, setActive }) => {
        return (
            <>
                <div className={active ? "connect__container active" : "connect__container"}>
                    <div className={active ? "connect active" : "connect"}>

                        <div className="connect__cross" onClick={() => setActive(false)}></div>

                            <div className="connect__title">Connecting wallet</div>
                            <div className="connect__videos">
                                <div className="connect__video-box">
                                    <div className="connect__number">1.</div>
                                    {/* YouTube Embedded Player */}
                                    <iframe
                                        width="160"
                                        height="90"
                                    src="https://www.youtube.com/embed/NnE8bjOHChs"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className='connect__video'
                                    ></iframe>
                                    <div className="connect__description">Описание что нужно сделать</div>
                                </div>
                                <div className="connect__video-box">
                                    <div className="connect__number">1.</div>
                                <div className="connect__video">
                                    <iframe
                                        width="160"
                                        height="90"
                                        src="https://www.youtube.com/embed/NnE8bjOHChs"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className='connect__video'
                                    ></iframe>
                                    </div>
                                    <div className="connect__description">Описание что нужно сделать</div>
                                </div>
                                <div className="connect__video-box">
                                    <div className="connect__number">1.</div>
                                <div className="connect__video">
                                    <iframe
                                        width="160"
                                        height="90"
                                        src="https://www.youtube.com/embed/NnE8bjOHChs"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className='connect__video'
                                    ></iframe>
                                    </div>
                                    <div className="connect__description">Описание что нужно сделать</div>
                                </div>
                            </div>
                            <Link to="/profile" className="connect__button-box">
                                <div className="connect__button">Connect wallet</div>
                            </Link>
                        </div>

                    </div>
            </>
        );
    }
    return (
        <>
            <div className="search">
                <Link to="/" aria-label="To main page">
                <picture>
                    <img src="./img/search-logo.svg" alt="" className="search__logo" />
                    </picture>
                </Link>
                <form action="#" className="search__bar">
                    <Link to="/search" aria-label="To search page">
                        <img src="./img/search-icon.svg" alt="" className="search__icon" />
                    </Link>
                    <input type="text" className="search__input" placeholder="Search for ..." />
                </form>
                <button className="search__button" onClick={() => setConnectivity(1)}>Connect wallet</button>
            </div>
            <PopConnect active={connectivity} setActive={setConnectivity}></PopConnect>
        </>
    );
    
}
export default SearchBar;