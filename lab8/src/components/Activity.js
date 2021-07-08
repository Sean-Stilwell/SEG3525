import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// BROWSE PAGE
const Activity = () => {
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
        setStock(stocks[index]);
        handleShow();
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

        // TODO: Ask for permission before purchasing a stock
        if (amount > 0){
            alert("Are you sure you want to buy " + amount + " shares for $" + price);
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
        alert("Congratulations, you now own " + amount + " shares in " + currentStock.name);
    }

    // Sleep fumctopn tp return a simulated sleep time.
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (  
        <div className="activitypage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>Browse Stocks</h2>
                <h5>Available to Trade: <strong>${money}</strong></h5>
                <Row>
                    {stocks.map((stock, index) => (
                        <Col xs="3" key={stock.id}>
                            <Card style={{flex:1, marginBottom:"15px"}}>
                                <Card.Body>
                                    <Card.Title>{stock.name}</Card.Title>
                                    <Card.Text>
                                        Current Price: ${stock.value} <br/><br/>
                                        <Button key={"button" + stock.id} variant="danger" onClick={handleClick.bind(this, index)} style={{marginLeft:"5px"}}>Buy</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Purchase a Share</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            How many shares would you like to purchase of {currentStock.name}?<br />
                            <input type="number" onChange={handleChange} name="stock_quantity" id="stock_quantity"/>
                        </label><br/>
                        <strong>Purchase Price: ${cost.toFixed(2)}</strong>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={submit}>Purchase</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
 
export default Activity;