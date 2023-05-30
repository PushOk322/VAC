const SearchBar = () => {
    return (
        <div className="search">
            <picture>
                <img src="../img/search-logo.svg" alt="" className="search__logo" />
            </picture>
            <form action="#" className="search__bar">
                <img src="../img/search-icon.svg" alt="" className="search__icon" />
                <input type="text" className="search__input" placeholder="Search for ..." />
            </form>
            <button className="search__button">Connect wallet</button>
        </div>
    );
    
}
export default SearchBar;