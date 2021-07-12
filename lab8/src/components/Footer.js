import logo from '../img/logo.png';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    const english_version = [
        "We're making investments easier for you.",
        "Website created by "
    ]
    const french_version = [
        "Nous simplifions les investissements pour vous.",
        "CanTrade est créé par "
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (  
        <div className="footer" style={{textAlign:"center", marginBottom:"3rem", marginTop:"2rem"}}>
            <hr></hr>
            <h4>{active_language[0]}</h4>
            <a href="/">
                <img src={logo} alt="logo" width="15%"/>
            </a>
            <br />
            <br />
            <p>
                {active_language[1]}
                <a href="https://www.seanstilwell.ca">Sean Stilwell</a>
            </p>
        </div>
    );
}
 
export default Footer;