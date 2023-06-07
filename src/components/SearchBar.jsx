import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div className="search">
            <Link to="/" aria-label="To main page">
            <picture>
                <img src="./img/search-logo.svg" alt="" className="search__logo" />
                </picture>
            </Link>
            <form action="#" className="search__bar">
                <img src="./img/search-icon.svg" alt="" className="search__icon" />
                <input type="text" className="search__input" placeholder="Search for ..." />
            </form>
            <Link to="/profile">
                <button className="search__button">Connect wallet</button>
            </Link>
        </div>
    );
    
}
export default SearchBar;