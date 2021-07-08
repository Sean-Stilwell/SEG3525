import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Portfolio = () => {
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

    // When a user clicks a sell button, open a modal with the appropriate stock
    function handleClick(index){
        setStock(usersStocks[index]);
        handleShow();
    }

    // When user changes the stock amount, we change the price shown
    function handleChange(){
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
        // TBA
    }

    // Simulated sleep time to pretend we load
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return ( 
        <div className="portfoliopage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>Your Portfolio</h2>
                <h5>Available to Trade: <strong>${money}</strong></h5>
                <Row>
                    {usersStocks.map((stock, index) => (
                        <Col xs="3" key={stock.id}>
                            <Card style={{flex:1, marginBottom:"15px"}}>
                                <Card.Body>
                                    <Card.Title>{stock.name}</Card.Title>
                                    <Card.Text>
                                        Amount: {stock.quantity} <br/>
                                        Purchase Price: ${stock.purchaseprice} <br/>
                                        Current Price: ${findCost(stock)} <br/>
                                        Value: ${(findCost(stock) * stock.quantity).toFixed(2)} <br/>
                                        Profit: ${((findCost(stock) * stock.quantity) - (stock.purchaseprice * stock.quantity)).toFixed(2)} <br/>
                                        <Button variant="danger" onClick={handleClick.bind(this, index)} style={{marginRight:"5px"}}>Sell</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sell a Share</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            How many shares of {currentStock.name} would you like to sell?<br />
                            <input type="number" onChange={handleChange} name="stock_quantity" id="stock_quantity"/>
                        </label><br/>
                        <strong>Sell Price: ${cost.toFixed(2)}</strong>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" >Sell</Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default Portfolio;