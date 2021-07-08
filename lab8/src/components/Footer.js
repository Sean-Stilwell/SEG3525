import logo from '../img/logo.png';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return (  
        <div className="footer" style={{textAlign:"center", marginBottom:"3rem", marginTop:"2rem"}}>
            <hr></hr>
            <h4>
                <FormattedMessage 
                    id = "Footer.header"
                    defaultMessage="We're making investments easier for you."
                />
            </h4>
            <a href="/">
                <img src={logo} alt="logo" width="15%"/>
            </a>
            <br />
            <br />
            <p>
                <FormattedMessage 
                    id = "Footer.link"
                    defaultMessage="Website created by "
                />
                <a href="https://www.seanstilwell.ca">Sean Stilwell</a>
            </p>
        </div>
    );
}
 
export default Footer;