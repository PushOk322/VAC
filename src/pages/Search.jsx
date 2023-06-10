import SearchBar from "../components/SearchBar.jsx";
import Featured from "../components/Featured.jsx";
import Cards from "../components/Cards.jsx";

import { Link } from 'react-router-dom';

const Main = () => {
    return (

        <>
            <SearchBar></SearchBar>
            <div className="search-page__cards">
                <div className="main-filters">
                    <div className="main-filters__filter">Recently added<img src="./img/filter-arrow.svg" alt="" className="main-filters__arrow" /></div>
                    <div className="main-filters__filter">Auctions<img src="./img/filter-arrow.svg" alt="" className="main-filters__arrow" /></div>
                </div>
                <Cards></Cards>
            </div>

            

            <button className="show-all-button"></button>
            <div className="show-all-text">Show all</div>

            <div className="search-page__featured">
                <Featured></Featured>
            </div>
        </>
    );
}

export default Main;