import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Search from "../components/Search.jsx";
var data = require("../data/MOCK_DATA.json");
const Catalog = () => {
    const [value, setValue] = useState("");


    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const [modelValue, setModelValue] = useState("");
    const modelOnChange = (event) => {
        setModelValue(event.target.value);
    };
    const modelOnSearch = (searchTerm) => {
        setModelValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const [makeValue, setMakeValue] = useState("");
    const makeOnChange = (event) => {
        setMakeValue(event.target.value);
    };
    const makeOnSearch = (searchTerm) => {
        setMakeValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };


    const [sortDropActive, setSortDropActive] = useState(false);
    const [sortText, setSortText] = useState('Recommendations');

    const handleSortClick = (text) => {
        setSortText(text);
        setSortDropActive(false);
    };

    const [modelDropActive, setModelDropActive] = useState(false);
    const [bodyDropActive, setBodyDropActive] = useState(false);



    const [activeCheckBoxes, setActiveCheckBoxes] = useState([false, false, false, false, false, false, false]);

    const handleCheckBoxClick = (index) => {
        const newActiveItems = activeCheckBoxes.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setActiveCheckBoxes(newActiveItems);
    };


    return (
        <>
            <Search />
            <div className="quiz-line"></div>

            <div className="catalog">
                <div className="catalog__filters">

                    <div className="catalog__filters-head">
                        <div className="catalog__filters-title">Detailed search</div>
                        <button className="catalog__clear-button">Clear filters</button>
                    </div>

                    <div className={modelDropActive ? "catalog__filter model-active" : "catalog__filter "}>
                        <div className="catalog__filter-preview" onClick={() => { if (modelDropActive) { setModelDropActive(false) } else { setModelDropActive(true) } }} >
                            Make, Model
                            <img src="../img/terms-arrow.svg" alt="" className={modelDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                        </div>

                        <div className={modelDropActive ? "catalog__filter-dropdown model-active" : "catalog__filter-dropdown "}>
                            <div className="catalog__search-container filter">
                                <div className="catalog__input-heading">Make</div>
                                <div className="catalog__search-inner filter">
                                    <input className="catalog__search-input filter" type="text" value={makeValue} onChange={makeOnChange} placeholder='Search Make...' />
                                    <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                </div>
                                <div className="catalog__search-dropdown filter">
                                    {data
                                        .filter((item) => {
                                            const searchTerm = makeValue.toLowerCase();
                                            const fullName = item.full_name.toLowerCase();

                                            return (
                                                searchTerm &&
                                                fullName.startsWith(searchTerm) &&
                                                fullName !== searchTerm
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => makeOnSearch(item.full_name)}
                                                className="catalog__search-dropdown-row filter"
                                                key={item.full_name}
                                            >
                                                {item.full_name}
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="catalog__search-container filter">
                                <div className="catalog__input-heading">Model</div>
                                <div className="catalog__search-inner filter">
                                    <input className="catalog__search-input filter" type="text" value={modelValue} onChange={modelOnChange} placeholder='Search Model...' />
                                    <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                </div>
                                <div className="catalog__search-dropdown filter">
                                    {data
                                        .filter((item) => {
                                            const searchTerm = modelValue.toLowerCase();
                                            const fullName = item.full_name.toLowerCase();

                                            return (
                                                searchTerm &&
                                                fullName.startsWith(searchTerm) &&
                                                fullName !== searchTerm
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => modelOnSearch(item.full_name)}
                                                className="catalog__search-dropdown-row filter"
                                                key={item.full_name}
                                            >
                                                {item.full_name}
                                            </div>
                                        ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={bodyDropActive ? "catalog__filter body-active" : "catalog__filter "}>
                        <div className="catalog__filter-preview" onClick={() => { if (bodyDropActive) { setBodyDropActive(false) } else { setBodyDropActive(true) } }} >
                            Body type
                            <img src="../img/terms-arrow.svg" alt="" className={bodyDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                        </div>

                        <div className={bodyDropActive ? "catalog__filter-dropdown body-active" : "catalog__filter-dropdown "}>

                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(0) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[0] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-1.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">Trucks</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(1) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[1] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-2.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">SUV</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(2) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[2] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-3.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">Sedan</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(3) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[3] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-4.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">Hatchback</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(4) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[4] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-5.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">Coupe</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(5) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[5] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-6.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">Convertiable</div>
                            </div>
                            <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(6) }}>
                                <div className="catalog__check-box">
                                    <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[6] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                </div>
                                <img src="./img/catalog-car-icon-7.svg" alt="" className="catalog__check-car-icon" />
                                <div className="catalog__check-text">VAN</div>
                            </div>



                        </div>
                    </div>

                </div>
                <div className="catalog__main">
                    <div className="catalog__head">
                        <div className="catalog__search">
                            <img src="./img/catalog-filters-button.svg" alt="" className="catalog__filters-button" />
                            <div className="catalog__search-container">
                                <div className="catalog__search-inner">
                                    <input className="catalog__search-input" type="text" value={value} onChange={onChange} placeholder='Find a dream car...' />
                                    <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                </div>
                                <div className="catalog__search-dropdown">
                                    {data
                                        .filter((item) => {
                                            const searchTerm = value.toLowerCase();
                                            const fullName = item.full_name.toLowerCase();

                                            return (
                                                searchTerm &&
                                                fullName.startsWith(searchTerm) &&
                                                fullName !== searchTerm
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => onSearch(item.full_name)}
                                                className="catalog__search-dropdown-row"
                                                key={item.full_name}
                                            >
                                                {item.full_name}
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <img src="./img/catalog-share-icon.svg" alt="" className="catalog__search-share-icon" />
                        </div>
                        <div className="catalog__sort">
                            <div className="catalog__sort-word">Sorted by </div>
                            <div className="catalog__sort-container" >
                                <div className="catalog__sort-preview" onClick={() => { setSortDropActive(true) }} >
                                    {sortText}
                                    <img src="../img/terms-arrow.svg" alt="" className={sortDropActive ? "catalog__sort-arrow active" : "catalog__sort-arrow "} />
                                </div>
                                <div className={sortDropActive ? "catalog__sort-dropdown active" : "catalog__sort-dropdown "}>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Newest inventory')}>
                                        Newest inventory
                                    </div>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Lowest price')}>
                                        Lowest price
                                    </div>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Highest prices')}>
                                        Highest prices
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog__cards">

                    </div>
                </div>
            </div>

            <div className="height"></div>
        </>
    );
}

export default Catalog;
