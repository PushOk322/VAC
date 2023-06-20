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
                <div className="calculator-hero__title">
                    Use our free calculator!
                </div>
            </div>
            <div className="calculator-page-calculator">
                <Calculator ></Calculator>
            </div>
            <div className="calculator-page-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default CalculatorPage;