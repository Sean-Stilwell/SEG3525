import { useState } from 'react';
import './Navbar.css';
import NavbarBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormattedMessage } from 'react-intl';

const Navbar = () => {

    // Source: https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // Function to handle submission of sign-up modal
    function handleSubmit(){
        var name = document.getElementById("givennames").value + " " + document.getElementById("surname").value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('cash', 500);
        localStorage.setItem('password', document.getElementById("password").value);
        localStorage.setItem('stocks', JSON.stringify([]));
        handleClose();
    }

    // Function to handle submission of log-in modal
    function handleSubmit2(){
        if (localStorage.getItem('email') == document.getElementById("email_submission").value && localStorage.getItem('password') == document.getElementById("password_submission").value){
            localStorage.setItem('signedin', true);
            handleClose2();
        }
        else {
            alert("Invalid username or password.");
        }
    }

    // Function to handle signing out
    function signOutButton(){
        localStorage.clear();
        window.location.reload();
        return false;
    }

    // Displays a welcome message if user is logged in, otherwise shows the log in / sign up button
    function displayLogIn(){
        if (localStorage.getItem('name') && localStorage.getItem('signedin')){
            return <span style={{color:'white'}}>
                Welcome {localStorage.getItem('name')}
                <Button variant="light" onClick={signOutButton} style={{marginLeft:"15px", marginRight:"5px"}}>Sign Out</Button>
            </span>;
        } else {
            return <span>
                <Button variant="light" onClick={handleShow} style={{marginLeft:"5px", marginRight:"5px"}}>Sign Up</Button>
                <Button variant="light" onClick={handleShow2} style={{marginLeft:"5px", marginRight:"5px"}}>Log In</Button>
            </span>
        }
    }

    return ( 
        <div className="header">
            <br />
            <a href="/">
                <img src={logo} alt="logo"  width="25%"/>
            </a>
            <br /><br />
            <NavbarBS bg="danger" variant="dark" style={{paddingLeft:"25%", paddingRight:"25%"}}>
                <NavbarBS.Collapse>
                    <Nav className="mr-auto">
                        <NavbarBS.Brand href="/">
                            <FormattedMessage 
                                    id = "Navbar.brand"
                                    defaultMessage="CanTrade"
                            />
                        </NavbarBS.Brand>
                        <Nav.Link href="/portfolio">
                            <FormattedMessage 
                                    id = "Navbar.link1"
                                    defaultMessage="Portfolio"
                            />
                        </Nav.Link>
                        <Nav.Link href="/activity">
                            <FormattedMessage 
                                    id = "Navbar.link2"
                                    defaultMessage="Browse Stocks"
                            />
                        </Nav.Link>
                        <Nav.Link href="/news">
                            <FormattedMessage 
                                    id = "Navbar.link3"
                                    defaultMessage="News"
                            />
                        </Nav.Link>
                        <Nav.Link href="/learn">
                            <FormattedMessage 
                                    id = "Navbar.link4"
                                    defaultMessage="Learn"
                            />
                        </Nav.Link>
                    </Nav>
                    {displayLogIn()}
                </NavbarBS.Collapse>
            </NavbarBS>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <FormattedMessage 
                                id = "Navbar.signup"
                                defaultMessage="Sign Up for CanTrade"
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            <FormattedMessage 
                                    id = "Navbar.givennames"
                                    defaultMessage="First Name: "
                            />
                            <input type="text" name="givennames" id="givennames" style={{marginLeft:"10px"}}/>
                        </label>
                        <label>
                            <FormattedMessage 
                                    id = "Navbar.surname"
                                    defaultMessage="Surname: "
                            />
                            <input type="text" name="surname" id="surname" style={{marginLeft:"10px"}}/>
                        </label>
                        <label>
                            <FormattedMessage 
                                    id = "Navbar.email"
                                    defaultMessage="Email: "
                            />
                            <input type="text" name="email" id="email" style={{marginLeft:"10px"}}/>
                        </label>
                        <label>
                            <FormattedMessage 
                                    id = "Navbar.password"
                                    defaultMessage="Password: "
                            />
                            <input type="password" name="password" id="password" style={{marginLeft:"10px"}}/>
                        </label>
                        <label>
                            <input type="checkbox" name="terms"  style={{marginRight:"10px"}}/>
                            <FormattedMessage 
                                    id = "Navbar.linetoignore"
                                    defaultMessage="I certify that I have read the Terms and Conditions."
                            />
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <FormattedMessage 
                            id = "Navbar.buttonClose"
                            defaultMessage="Close"
                        />
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        <FormattedMessage 
                            id = "Navbar.buttonSignUp"
                            defaultMessage="Sign Up"
                        />
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <FormattedMessage 
                            id = "Navbar.login"
                            defaultMessage="Log In to CanTrade"
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            <FormattedMessage 
                                id = "Navbar.email_submission"
                                defaultMessage="Email: "
                            />
                            <input type="text" name="email" id="email_submission" style={{marginLeft:"10px"}}/>
                        </label>
                        <label>
                            <FormattedMessage 
                                id = "Navbar.password_submission"
                                defaultMessage="Password: "
                            />
                            <input type="password" name="password" id="password_submission" style={{marginLeft:"10px"}}/>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        <FormattedMessage 
                            id = "Navbar.buttonClose2"
                            defaultMessage="Close"
                        />
                    </Button>
                    <Button variant="danger" onClick={handleSubmit2}>
                        <FormattedMessage 
                            id = "Navbar.buttonLogIn"
                            defaultMessage="Log In"
                        />
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
        </div>
        
     );
}
 
export default Navbar;