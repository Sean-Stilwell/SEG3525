import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Portfolio = () => {
    const english_version = [
        "Your Portfolio",
        "Available to Trade: ",
        "Amount: ",
        "Purchase Price: ",
        "Current Price: ",
        "Value: ",
        "Profit: ",
        "Sell",
        "How many shares of ",
        "would you like to sell?",
        "Sell Price: ",
        "Close",
        "Add Funds",
        "How much money would you like to add?",
        "Sell a Share",
        "Payment Information",
        "Credit Card Number",
        "CVV",
        "Expiry Month",
        "Expiry Year",
        "You have added ",
        " to your account. You now have $"
    ]
    const french_version = [
        "Votre portfolio",
        "Disponible à l'échange : ",
        "Quantité : ",
        "Prix d'achat : ",
        "Prix actuel : ",
        "Valeur : ",
        "Profit : ",
        "Vendre",
        "Combien d'actions dans ",
        " voulez-vous vendre ?",
        "Prix de vente : ",
        "Fermer",
        "Ajouter de l'argent",
        "Combien d'argent voudriez-vous ajouter ?",
        "Vendre une action",
        "Information du paiement",
        "Numéro de carte de crédit",
        "CVV",
        "Mois d'expiration",
        "Année d'expiration",
        "Vous avez ajouté ",
        " à votre compte. Vous avez maintenant $"
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }


    // We save the user's current portfolio to a variable
    var usersStocks = JSON.parse(localStorage.getItem('stocks')) || [];

    // Complete list of available stocks
    var stocks = [
        {
            id: '1s',
            name: 'Blackberry',
            value: 15.13
        },
        {
            id: '2s',
            name: 'Cineplex',
            value: 18.11
        },
        {
            id: '3s',
            name: 'Air Canada',
            value: 27.59
        },
        {
            id: '4s',
            name: 'MDA Ltd',
            value: 16.76
        },
        {
            id: '5s',
            name: 'Shopify Inc',
            value: 1865.95
        },
        {
            id: '6s',
            name: 'Bombardier, Inc.',
            value: 1.43
        },
        {
            id: '7s',
            name: 'Air Transat Inc',
            value: 7.36
        }
    ];

    // For toggling the modal.
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    function handleClose(){
        setShow(false);
        setCost(0);
    }

    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    // UseStates for the active stock being selected, the cost of the given amount, and the user's money
    const [money, setMoney] = useState(localStorage.getItem('cash'));
    const [currentStock, setStock] = useState(stocks[0]);
    const [cost, setCost] = useState(0);

    // Given a stock in the user's portfolio, finds the current value of that stock
    function findCost(stock){
        for (var i = 0; i < stocks.length; i++){
            if (stocks[i].id == stock.id){
                return stocks[i].value;
            }
        }
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

    // When a user clicks a sell button, open a modal with the appropriate stock
    function handleClick(index){
        setStock(usersStocks[index]);
        handleShow();
    }

    // When user changes the stock amount, we change the price shown
    function handleChange(){
        console.log(currentStock)
        var amount = document.getElementById("stock_quantity").value;
        if (amount <= 0){ // Users cannot sell negative stocks
            amount = 0;
            document.getElementById("stock_quantity").value = 0;
        }
        if (amount >= currentStock.quantity){ // Users cannot sell more than they own
            amount = currentStock.quantity;
            document.getElementById("stock_quantity").value = amount;
        }

        // We can then compute and update the price
        var price = amount * (findCost(currentStock));
        setCost(price);
    }

    // Sells the stocks
    async function submit(){
        var amount_sell = document.getElementById("stock_quantity").value;
        var price = (amount_sell * currentStock.purchaseprice).toFixed(2);

        // TODO: Add confirmation here
        await sleep(1000);
        handleClose();

        var stock = findStock(currentStock.id);
        var current_amount = usersStocks[stock].quantity;
        var future_amount = parseInt(current_amount) - parseInt(amount_sell);
        
        if (future_amount == 0){ // Remove stock from list if they are selling all shares
            usersStocks.splice(stock, 1);
        } else { // Decrement quantity by the amount sold
            usersStocks[stock] = {
                id: currentStock.id,
                name: currentStock.name,
                purchaseprice: currentStock.purchaseprice,
                quantity: future_amount
            };
        }      
        
        var newCash = parseInt(money) + parseInt(price)
        localStorage.setItem('cash', newCash.toFixed(2));
        setMoney(newCash.toFixed(2));
        localStorage.setItem('stocks', JSON.stringify(usersStocks)); 
        document.location.reload(true); 
    }

    async function submit2(){
        var funds = parseInt(document.getElementById("payment_amount").value);
        var insertion = (parseInt(money) + funds).toFixed(2);
        setMoney(insertion);
        localStorage.setItem('cash', insertion);
        await sleep(1000);
        alert(active_language[20] + insertion + active_language[21] + money);
    }

    // Simulated sleep time to pretend we load
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return ( 
        <div className="portfoliopage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>{active_language[0]}</h2>
                <h5>
                    {active_language[1]} <strong>${money}</strong>
                    <Button variant="danger" onClick={handleShow2} style={{marginLeft:"15px"}}>{active_language[12]}</Button>
                </h5>
                <br/>
                <Row>
                    {usersStocks.map((stock, index) => (
                        <Col xs="3" key={stock.id}>
                            <Card style={{flex:1, marginBottom:"15px"}}>
                                <Card.Body>
                                    <Card.Title>{stock.name}</Card.Title>
                                    <Card.Text>
                                        {active_language[2]} {stock.quantity} <br/>
                                        {active_language[3]} ${stock.purchaseprice} <br/>
                                        {active_language[4]} ${findCost(stock)} <br/>
                                        {active_language[5]} ${(findCost(stock) * stock.quantity).toFixed(2)} <br/>
                                        {active_language[6]} ${((findCost(stock) * stock.quantity) - (stock.purchaseprice * stock.quantity)).toFixed(2)} <br/>
                                        <Button variant="danger" onClick={handleClick.bind(this, index)} style={{marginRight:"5px"}}>{active_language[7]}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{active_language[14]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            {active_language[8]} {currentStock.name} {active_language[9]}<br />
                            <input type="number" onChange={handleChange} name="stock_quantity" id="stock_quantity"/>
                        </label><br/>
                        <strong>{active_language[10]} ${cost.toFixed(2)}</strong>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{active_language[11]}</Button>
                    <Button variant="danger" onClick={submit}>{active_language[7]}</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>{active_language[12]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            {active_language[13]}<br />
                            <input type="number" name="payment_amount" id="payment_amount"/>
                        </label><br/><br/>
                        <strong>{active_language[15]}</strong><br/>
                        <Row>
                            <Col>
                                <label>
                                    {active_language[16]} <br/>
                                    <input type="text" name="cc_number" id="cc_number" style={{width:"193px"}}/> <br/>
                                </label>
                                <label>
                                    {active_language[18]} 
                                    <select name="cc_month" id="cc_month" style={{width: "60px", marginLeft: "10px"}}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </label>
                            </Col>
                            <Col>
                                <label>
                                    {active_language[17]} <br/>
                                    <input type="text" name="cvv" id="cvv"/>
                                </label>
                                <label>
                                    {active_language[19]} 
                                    <select name="cc_year" id="cc_year" style={{width: "60px", marginLeft: "10px"}}>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                    </select>
                                </label>
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>{active_language[11]}</Button>
                    <Button variant="danger" onClick={submit2}>{active_language[12]}</Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default Portfolio;