import { Link } from 'react-router-dom';
import { useState } from 'react';


import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx";


const Terms = () => {
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
                <div className="calculator-hero__title term">
                    Terms & Conditions
                </div>
            </div>

            <div className="terms">
                <div className="terms__item" onClick={() => handleItemClick(1)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Please read these terms and conditions of use carefully before using this web site</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[1] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[1] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(2)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Modifications of the terms and conditions</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[2] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[2] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(3)}>
                    <div className="terms__preview" >
                        <div className="terms__head">How we work</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[3] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[3] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(4)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Authorization</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[4] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[4] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(5)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Links</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[5] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[5] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(6)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Minors</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[6] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[6] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(7)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Restricted access</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[7] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[7] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(8)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Governing law</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[8] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[8] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(9)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Privacy policy</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[9] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[9] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(10)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Personal information</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[10] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[10] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(11)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Collecting personal information</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[11] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[11] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(12)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Using and sharing personal information</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[12] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[12] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(13)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Sharing your personal information</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[13] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[13] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(14)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Retaining your personal information</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[14] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[14] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(15)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Contacting you</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[15] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[15] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(16)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Accessing your personal information stored by us</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[16] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[16] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
                <div className="terms__item" onClick={() => handleItemClick(17)}>
                    <div className="terms__preview" >
                        <div className="terms__head">Responding to privacy concerns or complaints</div>
                        <img src="./img/terms-arrow.svg" alt="" className={`terms__arrow ${activeItems[17] ? 'active' : ''}`} />
                    </div>
                    <div className={`terms__drop ${activeItems[17] ? 'active' : ''}`}>
                        <div className="terms__text">Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. </div>
                    </div>
                </div>
            </div>

            <div className="calculator-page-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default Terms;