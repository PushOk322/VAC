import { Link } from 'react-router-dom';
import { useState } from 'react';


import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";


const Blog = () => {
    const [activeItems, setActiveItems] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const handleItemClick = (index) => {
        const newActiveItems = activeItems.map((item, i) => (i === index ? !item : false));
        setActiveItems(newActiveItems);
    };

    return (
        <>
            <Search></Search>
            <div className="calculator-hero">
                <img src="./img/he-pattern.png" alt="" className="calculator-hero__background" />
                <div className="calculator-hero__title video">
                    Our blog
                </div>
            </div>

            <div className="blog-cards">
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-1-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-1-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-1.webp' />
                            <img src="img/blog-img-1.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car? Why is it better to buy from us</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >

                            <source type='image/webp' srcSet='./img/blog-img-2-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-2-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-2.webp' />
                            <img src="img/blog-img-2.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How fast can you order a car in Canada?</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >

                            <source type='image/webp' srcSet='./img/blog-img-3-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-3-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-3.webp' />
                            <img src="img/blog-img-3.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car?Why is it better to buy from us</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >

                            <source type='image/webp' srcSet='./img/blog-img-4-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-4-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-4.webp' />
                            <img src="img/blog-img-4.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car?Why is it better to buy from us</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-5-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-5-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-5.webp' />

                            <img src="img/blog-img-5.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How fast can you order a car in Canada?</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-6-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-6-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-6.webp' />
                            <img src="img/blog-img-6.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car?Why is it better to buy from us</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card seventh">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-7-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-7-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-7.webp' />
                            <img src="img/blog-img-7.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car?Why is it better to buy from us</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card eightth">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-8-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-8-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-8.webp' />
                            <img src="img/blog-img-8.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How fast can you order a car in Canada?</div>
                    </div>
                </Link>
                <Link to="/article">
                    <div className="blog-cards__card ninth">
                        <picture >
                            <source type='image/webp' srcSet='./img/blog-img-9-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/blog-img-9-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/blog-img-9.webp' />
                            <img src="img/blog-img-9.png" alt="slider-3" className="blog-cards__img" />
                        </picture>
                        <div className="blog-cards__date">10 May, 2020</div>
                        <div className="blog-cards__heading">How to save on buying a car?Why is it better to buy from us</div>
                    </div>
                </Link>
            </div>
            <div className="blog-pag">
                <div className="blog-pag__pag-el active"></div>
                <div className="blog-pag__pag-el"></div>
                <div className="blog-pag__pag-el"></div>
            </div>
            <div className="calculator-page-footer">
                <Footer></Footer>
            </div>

        </>
    );
}

export default Blog;