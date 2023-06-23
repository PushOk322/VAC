import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import ClientSay from '../components/ClientSay.jsx';
import Calculator from "../components/Calculator.jsx";
const About = () => {

    return (
        <>
            <Search></Search>
            <div className="calculator-hero">
                <img src="./img/he-pattern.png" alt="" className="calculator-hero__background" />
                <div className="calculator-hero__title video">
                    About VAC
                </div>
            </div>

            <div className="about-static-1">
                <div className="about-static-1__card">
                    <div className="about-static-1__title">Our mission</div>
                    <div className="about-static-1__text">Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!</div>
                    <button className="about-static-1__button">Request a Car</button>
                </div>
                <picture >
                    <source type='image/webp' srcSet='./img/about-static-1-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/about-static-1-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/about-static-1-img.webp' />
                    <img src="img/about-static-1-img.png" alt="slider-1" className="about-static-1__img" />
                </picture>
            </div>

            <div className="about-static-2">
                <div className="about-static-2__left">
                    <div className="about-static-2__title">Get your dream car</div>
                    <div className="about-static-2__text">We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
                    </div>
                    <div className="about-static-2__text">We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</div>
                </div>
                <div className="about-static-2__right">
                    <div className="about-static-2__row">
                        <div className="about-static-2__number">
                            <img src="img/main-static-2-polygon.svg" alt="slider-3" className="about-static-2__polygon" />
                            1
                        </div>
                        <div className="about-static-2__text-box">
                            <div className="about-static-2__heading">Quickly</div>
                            <div className="about-static-2__undertext">You do not spend a lot of your time going
                                to car dealerships</div>
                        </div>
                    </div>
                    <div className="about-static-2__row">
                        <div className="about-static-2__number">
                            <img src="img/main-static-2-polygon.svg" alt="slider-3" className="about-static-2__polygon" />
                            2
                        </div>
                        <div className="about-static-2__text-box">
                            <div className="about-static-2__heading">Simply</div>
                            <div className="about-static-2__undertext">You can order your dream car just by talking to our specialist by phone</div>
                        </div>
                    </div>
                    <div className="about-static-2__row">
                        <div className="about-static-2__number">
                            <img src="img/main-static-2-polygon.svg" alt="slider-3" className="about-static-2__polygon" />
                            3
                        </div>
                        <div className="about-static-2__text-box">
                            <div className="about-static-2__heading">Conveniently</div>
                            <div className="about-static-2__undertext">We will deliver the car directly to the doorstep of your home or office</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-static-3" >
                <picture className="about-static-3__picture">
                    <source type='image/webp' srcSet='./img/about-static-3-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/about-static-3-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/about-static-3-img.webp' />
                    <img src="img/about-static-3-img.png" alt="slider-1" className="about-static-3__img" />
                </picture>
                <div className="about-static-3__content">
                    <div className="about-static-3__title">VAC is convenience
                        and transparency</div>
                    <div className="about-static-3__text first">We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.
                    </div>
                    <div className="about-static-3__text">Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
                    </div>
                </div>
            </div>

            <div className="about-static-4">
                <div className="about-static-4__left">
                    <div className="about-static-4__title">Get a car at the best prices and conditions</div>
                    <div className="about-static-4__text">Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.
                    </div>
                    <div className="about-static-4__text">Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.

                    </div>
                </div>
                <div className="about-static-4__right">
                    <div className="about-static-4__heading">We think that VAC is the best way to buy <br />
                        a car in Canada. Try it for yourself and see how much time and money you can save.</div>
                    <div className="about-static-4__text third">There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</div>
                    <div className="about-static-4__button">Request a Car</div>
                </div>
            </div>

            <div className="about-static-5">
                <div className="about-static-5__card">
                    <div className="about-static-5__heading">Contact us today and speak with one of our qualified agents</div>
                    <button className="about-static-5__button">Contact Us Now</button>
                </div>
                <div className="about-static-5__right">
                    <div className="about-static-5__title">Our qualified agents</div>
                    <div className="about-static-5__text">The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</div>
                    <div className="about-static-5__text">Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</div>
                </div>
            </div>

            <div className="about-say">
                <div className="about-say__title">What our client say about us!</div>
                <ClientSay></ClientSay>
            </div>

            <div className="about-static-6">
                <div className="about-static-6__left">
                    <div className="about-static-6__title">We're dynamic team of creative people with innovative mind</div>
                    <div className="about-static-6__text-block">
                        <div className="about-static-6__heading">Our History</div>
                        <div className="about-static-6__text">We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</div>
                    </div>
                    <div className="about-static-6__text-block">
                        <div className="about-static-6__heading">Our Goal</div>
                        <div className="about-static-6__text">Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. </div>
                    </div>
                </div>
                <picture >
                    <source type='image/webp' srcSet='./img/about-static-6-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/about-static-6-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/about-static-6-img.webp' />
                    <img src="img/about-static-6-img.png" alt="slider-1" className="about-static-6__img" />
                </picture>
            </div>

            <div className="about-static-7">
                <picture className='about-static-7__picture'>
                    <source type='image/webp' srcSet='./img/about-static-7-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/about-static-7-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/about-static-7-img.webp' />
                    <img src="img/about-static-7-img.png" alt="slider-1" className="about-static-7__img" />
                </picture>
                <div className="about-static-7__content">
                    <div className="about-static-7__title">Main features</div>
                    <div className="about-static-7__text">We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</div>
                    <div className="about-static-7__cards">
                        <div className="about-static-7__card">
                            <div className="about-static-7__number">7,988+</div>
                            <div className="about-static-7__under-number">Sold Cars</div>
                        </div>
                        <div className="about-static-7__card">
                            <div className="about-static-7__number">123</div>
                            <div className="about-static-7__under-number">Working Experts</div>
                        </div>
                        <div className="about-static-7__card third">
                            <div className="about-static-7__number">1560+</div>
                            <div className="about-static-7__under-number">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-calculator">
                <Calculator></Calculator>
            </div>

            <div className="calculator-page-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default About;