import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../img/piggy2.png';
import support from '../img/support.png';
import securedevice from '../img/securedevice.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    const english_version = [
        "Bringing Investments to Canadians",
        "CanTrade is Canada's most popular application for buying and selling stocks on the Canadian market. That's why over 300,000 Canadian manage their portfolios with us.",
        "No fees. No commission. Just investing.",
        "Whether you're an experienced investor or want to try it out for the first time, choose CanTrade for the most trusted stock service in Canada.",
        "And if you sign up today, we'll give you a free stock to help kickstart your portfolio.",
        "New to Investing? Let us help",
        "We provide over a dozen online courses to help you understand investing and the CanTrade platform.",
        "We provide controls to help minimize potential losses. If a stock is expected to go down, you can let us automatically sell for you to ensure you don't lose.",
        "Every feature has extensive help available to prevent mistakes.",
        "And we have 24/7 support available over the phone and in live chat to help you.",
        "We Keep Your Money Secure",
        "Our systems use advanced encryption to ensure your account information is kept safe.",
        "Two-factor authentication ensures anyone that accesses your account has to be approved by you.",
        "Deposit and withdrawal protections ensure your money stays yours.",
    ]
    const french_version = [
        "Nous aidons les Canadiens à investir",
        "CanTrade est l'application la plus populaire au Canada pour échanger des actions canadiennes. C'est la raison qu'on aide plus que 300 000 Canadiens à investir leur argent.",
        "Aucun frais. Aucune commission. Simplement les investissements.",
        "Peu importe si vous avez de l'expérience ou pas du tout, choisissez CanTrade pour le service d'actions le plus fiable au Canada.",
        "Si vous vous inscrivez aujourd'hui, nous vous offrirons une action gratuite pour vous aider à démarrer votre portfolio.",
        "Aucune expérience? Laissez-nous aider.",
        "Nous fournissons plus d'une douzaine de cours en ligne pour vous aider à investir et à utiliser CanTrade.",
        "Nous fournission des contrôles pour aider à minimiser les pertes potentielles. Si une action est susceptible de baisser, nous pouvons vendre automatiquement pour vous afin de vous assurer de ne pas perdre votre argent.",
        "Chaque fonctionnalité offre une aide complète pour éviter les erreurs.",
        "Et nous avons de l'assistance disponible 24h/24 et 7j/7 par téléphone et chat en direct pour vous aider.",
        "Nous gardons votre argent en sécurité",
        "Nos systèmes utilisent un cryptage avancé pour garantir la sécurité des informations de votre compte.",
        "L'authentification à deux facteurs garantit que toute personne qui accède à votre compte doit être approuvée par vous.",
        "Les protections de dépôt et de retrait garantissent que votre argent reste le vôtre.",
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (  
        <div className="homepage">
            <Container>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <h1> {active_language[0]} </h1>
                            <p> {active_language[1]} </p>
                            <p>{active_language[2]} </p>
                            <p>{active_language[3]}</p>
                            <p>{active_language[4]}</p>
                        </Col>
                        <Col xs="6">
                            <img src={picture} alt="" width="100%"></img>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <img src={support} alt="" width="100%"></img>
                        </Col>
                        <Col xs="6">
                            <h1>{active_language[5]}</h1>
                            <p>{active_language[6]}</p>
                            <p>{active_language[7]}</p>
                            <p>{active_language[8]}</p>
                            <p>{active_language[9]}</p>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <h1>{active_language[10]}</h1>
                            <p>{active_language[11]}</p>
                            <p>{active_language[12]}</p>
                            <p>{active_language[13]}</p>
                        </Col>
                        <Col xs="6">
                            <img src={securedevice} alt="" width="100%" />
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>

        </div>
    );
}
 
export default Home;