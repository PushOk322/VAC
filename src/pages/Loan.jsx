import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";
import ClientSay from '../components/ClientSay.jsx';
import Calculator from "../components/Calculator.jsx";
const Loan = () => {

    return (
        <>
            <Search></Search>
            <div class="calculator-hero">
                <img src="./img/he-pattern.png" alt="" class="calculator-hero__background" />
                <div class="calculator-hero__title video">
                    Loan rates
                </div>
            </div>

            <div class="loan-static-1">
                <div class="loan-static-1__card">
                    <div class="loan-static-1__title">Our credit policy</div>
                    <div class="loan-static-1__text">You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.</div>
                    <button class="loan-static-1__button">Request a Car</button>
                </div>
                <picture >
                    <source type='image/webp' srcSet='./img/loan-static-1-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/loan-static-1-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/loan-static-1-img.webp' />
                    <img src="img/loan-static-1-img.png" alt="slider-1" class="loan-static-1__img" />
                </picture>
            </div>

            <div class="loan-static-2">
                <div class="loan-static-2__title">Interest rates and loan terms</div>
                <div class="loan-static-2__cards">
                    <div class="loan-static-2__card">
                        <div class="loan-static-2__heading">
                            <img src="./img/percent-icon.svg" alt="" class="loan-static-2__icon" />
                            <span>What are my interest rate options?</span>
                        </div>
                        <div class="loan-static-2__text">We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.</div>
                    </div>
                    <div class="loan-static-2__card">
                        <div class="loan-static-2__heading">
                            <img src="./img/clock-icon.svg" alt="" class="loan-static-2__icon" />
                            How long will my loan term be?
                        </div>
                        <div class="loan-static-2__text">Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.</div>
                    </div>
                </div>
            </div>

            <div class="loan-static-3">
                <div class="loan-static-3__left">
                    <div class="loan-static-3__title">Benefits of getting an auto loan with VAC</div>
                    <div class="loan-static-3__text">For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.
                    </div>
                    <div class="loan-static-3__undertext">When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.</div>
                    <button class="loan-static-3__button">Request a car</button>
                </div>
                <picture >
                    <source type='image/webp' srcSet='./img/loan-static-3-img-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/loan-static-3-img-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/loan-static-3-img.webp' />
                    <img src="img/loan-static-3-img.png" alt="slider-1" class="loan-static-3__img" />
                </picture>
            </div>

            <div class="loan-calculator">
                <Calculator></Calculator>
            </div>

            <div class="calculator-page-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default Loan;