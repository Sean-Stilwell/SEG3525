import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Learn = () => {
    const english_version = [
        "Learn with CanTrade",
    ]
    const french_version = [
        "Apprendre avec CanTrade",
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    // Complete list of lessons to be displayed
    const [lessons, _] = useState(
        [
            {
                id: 1,
                name: "Investing 101",
                teacher: "Anthony Smith",
                level: "Beginner",
                description: "Want to invest like a pro? Learn the basics of investing from us and we'll have you on the road to investing in no time."
            },
            {
                id: 2,
                name: "Understanding Stock Market Crashes",
                teacher: "Dr. Hilary McMillian",
                level: "Beginner",
                description: "A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don't need to spell..."
            },
            {
                id: 3,
                name: "Emergency Funds: What, Why & How Much",
                teacher: "Louis St. Pierre",
                level: "Beginner",
                description: "Even if you’re subsisting on $.30 packages of ramen, you still gotta have a kitchen in which you can prepare it. This is where the..."
            },
            {
                id: 4,
                name: "How Taxes Work",
                teacher: "Anthony Smith",
                level: "Intermediate",
                description: "Learn how to take advantage of the ease of paperless fee-free online filing, providers of which have multiplied over the last few...."
            },
            {
                id: 5,
                name: "Making Money Fast: Investing Strategies",
                teacher: "Roger Allan",
                level: "Advanced",
                description: "There's no one-size-fits-all best investing strategy—everyone's needs and goals are different. But there are some basics that most..."
            },
            {
                id: 6,
                name: "Active and Passive Investing",
                teacher: "Michael Nelson",
                level: "Beginner",
                description: "Active investing sounds like what might happen if you called a stock broker between tennis sets. Passive investing seems like it might..."
            },
            {
                id: 7,
                name: "Financial Advisors and Whether You Need One",
                teacher: "Jessica Hunt",
                level: "Intermediate",
                description: "In the broadest sense, a financial advisor is anyone you pay to help you manage your money, especially as it relates to retirement goals..."
            }
        ]
    )

    function getNotice(){
        if (localStorage.getItem('language') == 'fr'){
            return (
                <p>Malheureusement, on offre les cours strictement en anglais à ce moment. Les cours en français seront disponibles sous-peu!</p>
            );
        }
    }

    return (  
        <div className="learnpage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>{active_language[0]}</h2>
                {getNotice()}
                <Row>
                    {lessons.map((lesson) => (
                        <Col xs="4" key={lesson.id}>
                            <Card style={{flex:1, marginBottom:"15px"}}>
                                <Card.Body>
                                    <Card.Title><a href="https://youtu.be/dQw4w9WgXcQ">{lesson.name}</a></Card.Title>
                                    <Card.Text>
                                        <em>by {lesson.teacher}</em> <br/><br/>
                                        {lesson.description} <br/><br/>
                                        Difficulty: {lesson.level}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
 
export default Learn;