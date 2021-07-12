import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import help from '../img/help.png';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// BROWSE PAGE
const Activity = () => {
    const english_version = [
        "Are you sure you want to buy ",
        " shares for ",
        "Congratulations, you now own ",
        " shares in ",
        "Browse Stocks",
        "Available to Trade: ",
        "Current Price: ",
        "Buy",
        "How many shares would you like to purchase of ",
        "", // BLANK ON PURPOSE
        "Purchase a Share",
        "Purchase Price: ",
        "Close",
        "Purchase",
        "You do not have enough money for this purchase. You can add funds on the Portfolio page.",
        "You must be signed in to do that."
    ]
    const french_version = [
        "Confirmer que vous voulez acheter ",
        " actions pour ",
        "Félicitations, vous avez acheté ",
        " actions de ",
        "Parcourir les actions",
        "Disponible à l'échange : ",
        "Prix actuel : ",
        "Acheter",
        "Combien d'actions dans ",
        " voulez-vous acheter",
        "Acheter une action",
        "Prix total : ",
        "Fermer",
        "Acheter",
        "Vous n'avez pas assez d'argent pour effectuer cet achat. Vous pouvez ajouter de l'argent sur la page Portfolio.",
        "Il faut se connecter pour acheter des actions"
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    // Complete list of stocks with their current values
    var stocks = [
        {
            id: '1s',
            name: 'Blackberry',
            value: 14.83
        },
        {
            id: '2s',
            name: 'Cineplex',
            value: 15.21
        },
        {
            id: '3s',
            name: 'Air Canada',
            value: 25.89
        },
        {
            id: '4s',
            name: 'MDA Ltd',
            value: 16.00
        },
        {
            id: '5s',
            name: 'Shopify Inc',
            value: 1808.25
        },
        {
            id: '6s',
            name: 'Bombardier, Inc.',
            value: 1.33
        },
        {
            id: '7s',
            name: 'Air Transat Inc',
            value: 6.25
        }
    ];

    // UseStates for the active stock being selected, the cost of the given amount, and the user's money
    const [currentStock, setStock] = useState(stocks[0]);
    const [cost, setCost] = useState(0);
    const [money, setMoney] = useState(localStorage.getItem('cash'));

    // Retrieve & parse the user's currently owned stock
    var usersStocks = JSON.parse(localStorage.getItem('stocks')) || [];

    // For toggling the modal.
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    function handleClose(){
        setShow(false);
        setCost(0); // When modal is closed, we reset this value
    }

    // Given a stock's index, open the modal with the appropriate stock displayed
    function handleClick(index){
        if (localStorage.getItem('signedin')){
            setStock(stocks[index]);
            handleShow();
        }
        else {
            alert(active_language[15]);
        }
    }

    // As the user changes the stock amount, we change the value
    function handleChange(){
        var amount = document.getElementById("stock_quantity").value;
        if (amount <= 0){ // User cannot buy negative stocks
            amount = 0;
            document.getElementById("stock_quantity").value = 0;
        }
        // We compute and display the price.
        var price = amount * currentStock.value;
        setCost(price);
    }

    // Given an ID, locates if the stock is in the user's portfolio already
    function findStock(id){
        for (var i = 0; i < usersStocks.length; i++){
            if (usersStocks[i].id == id){
                return i;
            }
        }
        return null;
    }

    // Function for purchasing a stock. Async to allow a sleep "loading" time
    async function submit(){
        var amount = document.getElementById("stock_quantity").value;
        var price = (amount * currentStock.value).toFixed(2);

        if (money < price){
            alert(active_language[14]);
            return;
        }

        // TODO: Ask for permission before purchasing a stock
        if (amount > 0){
            alert(active_language[0] + amount + active_language[1] + price);
        }

        // Mock-loading time
        await sleep(1000);
        handleClose(); // Close the modal

        // Locate the stock in the user's portfolio (if it's there)
        var stock = findStock(currentStock.id);

        // If stock is not already there, we add it to their portfolio.
        if (!stock){
            usersStocks.push({
                id: currentStock.id,
                name: currentStock.name,
                purchaseprice: currentStock.value,
                quantity: amount
            });
        } 
        // If the stock is already there, we increment the amount owned.
        else {
            usersStocks[stock] = {
                id: currentStock.id,
                name: currentStock.name,
                purchaseprice: currentStock.value,
                quantity: parseInt(amount) + parseInt(usersStocks[stock].quantity)
            };
        }

        // We update the user's cash to reflect the purchase
        localStorage.setItem('cash', (money - price).toFixed(2));
        setMoney((money - price).toFixed(2));

        // We also update their currently owned stocks to reflect it
        localStorage.setItem('stocks', JSON.stringify(usersStocks));
        alert(active_language[2] + amount + active_language[3] + currentStock.name);
    }

    // Sleep fumctopn tp return a simulated sleep time.
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function displayCash(){
        if (localStorage.getItem('signedin')){
            return <h5>{active_language[5]} <strong>${money}</strong></h5>
        }
    }

    return (  
        <div className="activitypage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>{active_language[4]}</h2>
                {displayCash()}
                <Row>
                    {stocks.map((stock, index) => (
                        <Col xs="3" key={stock.id}>
                            <Card style={{flex:1, marginBottom:"15px"}}>
                                <Card.Body>
                                    <Card.Title>{stock.name}</Card.Title>
                                    <Card.Text>
                                        {active_language[6]} ${stock.value} <br/><br/>
                                        <Button key={"button" + stock.id} variant="danger" onClick={handleClick.bind(this, index)} style={{marginLeft:"5px"}}>{active_language[7]}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{active_language[10]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            {active_language[8]} {currentStock.name}{active_language[9]}?<br />
                            <input type="number" onChange={handleChange} name="stock_quantity" id="stock_quantity"/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label><br/>
                        <strong>{active_language[11]} ${cost.toFixed(2)}</strong>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{active_language[12]}</Button>
                    <Button variant="danger" onClick={submit}>{active_language[13]}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
 
export default Activity;