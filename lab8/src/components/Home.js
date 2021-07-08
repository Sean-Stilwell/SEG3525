import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../img/piggy.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FormattedMessage } from 'react-intl';

const Home = () => {
return (  
        <div className="homepage">
            <Container>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <h1> 
                                <FormattedMessage 
                                    id = "Home.headerOne"
                                    defaultMessage="Bringing Investments to Canadians"
                                />
                            </h1>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphOneOne"
                                    defaultMessage="CanTrade is Canada's most popular application for buying and selling stocks on the Canadian market. That's why over 300,000 Canadian manage their portfolios with us."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphOneTwo"
                                    defaultMessage="No fees. No commission. Just investing."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphOneThree"
                                    defaultMessage="Whether you're an experienced investor or want to try it out for the first time, choose CanTrade for the most trusted stock service in Canada."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphOneFour"
                                    defaultMessage="And if you sign up today, we'll give you a free stock to help kickstart your portfolio."
                                />
                            </p>
                        </Col>
                        <Col xs="6">
                            <img src={picture} alt="" width="100%"></img>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <h1>img</h1>
                        </Col>
                        <Col xs="6">
                            <h1>
                                <FormattedMessage 
                                    id = "Home.headerTwo"
                                    defaultMessage="New to Investing? Let us help."
                                />
                            </h1>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoOne"
                                    defaultMessage="We provide over a dozen online courses to help you understand investing and the CanTrade platform."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoTwo"
                                    defaultMessage="We provide controls to help minimize potential losses. If a stock is expected to go down, you can let us automatically sell for you to ensure you don't lose."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoThree"
                                    defaultMessage="Every feature has extensive help available to prevent mistakes."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoFour"
                                    defaultMessage="And we have 24/7 support available over the phone and in live chat to help you."
                                />
                            </p>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <h1>
                                <FormattedMessage 
                                    id = "Home.headerThree"
                                    defaultMessage="We Keep Your Money Secure"
                                />
                            </h1>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoOne"
                                    defaultMessage="Our systems use advanced encryption to ensure your account information is kept safe."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoTwo"
                                    defaultMessage="Two-factor authentication ensures anyone that accesses your account has to be approved by you."
                                />
                            </p>
                            <p>
                                <FormattedMessage 
                                    id = "Home.paragraphTwoThree"
                                    defaultMessage="Deposit and withdrawal protections ensure your money stays yours."
                                />
                            </p>
                        </Col>
                        <Col xs="6">
                            <h1>img</h1>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>

        </div>
    );
}
 
export default Home;