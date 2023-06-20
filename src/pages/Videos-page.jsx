import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx"
import Calculator from "../components/Calculator.jsx";
const CalculatorPage = () => {

    return (
        <>
            <Search></Search>
            <div className="calculator-hero">
                <img src="./img/he-pattern.png" alt="" className="calculator-hero__background" />
                <div className="calculator-hero__title video">
                    Vehicle videos
                </div>
            </div>

            <div className="videos">
                <div className="videos__card">
                    <div className="videos__video">
                        <iframe loading="lazy"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RMFeCyUkkW0"
                            title="YouTube video player">

                        </iframe>
                    </div>
                    <div className="videos__heading">
                        VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback
                    </div>
                </div>
                <div className="videos__card">
                    <div className="videos__video">
                        <iframe loading="lazy"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RMFeCyUkkW0"
                            title="YouTube video player">

                        </iframe>
                    </div>
                    <div className="videos__heading">
                        VAC's Vehicle Shoot #10: 2018 Chevy Cruze
                    </div>
                </div>
                <div className="videos__card">
                    <div className="videos__video">
                        <iframe loading="lazy"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RMFeCyUkkW0"
                            title="YouTube video player">

                        </iframe>
                    </div>
                    <div className="videos__heading">
                        VAC's Vehicle Shoot #10: 2018 Chevy Cruze
                    </div>
                </div>
                <div className="videos__card">
                    <div className="videos__video">
                        <iframe loading="lazy"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RMFeCyUkkW0"
                            title="YouTube video player">

                        </iframe>
                    </div>
                    <div className="videos__heading">
                        VAC's Vehicle Shoot #10: 2018 Chevy Cruze
                    </div>
                </div>
            </div>

            <div className="videos__pag">
                <div className="videos__pag-el active"></div>
                <div className="videos__pag-el"></div>
                <div className="videos__pag-el"></div>
            </div>

            <div className="videos-page-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default CalculatorPage;