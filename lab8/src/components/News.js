import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const News = () => {
    const english_version = [
        "Market News",
        "Here is some of the news that's rocked the markets recently: ",
        "in"
    ]
    const french_version = [
        "Actualités du marché",
        "Voici des nouvelles qui ont affecté les marchés récemment :",
        "dans"
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    var news = [
        {
            title: 'Dow Jones Futures: Apple, Google, Tech Titans Drive Stock Market Rally; Three Are In Buy Range',
            time: '1 hour ago',
            journal: 'Investor\'s Business Daily',
            content: 'Apple and Google are among tech titans leading the stock market to record highs. Here\'s what to do now.',
        },
        {
            title: 'Saudi Arabia Aims To Dominate The Global Hydrogen Market',
            time: '4 hours ago',
            journal: 'The Financial Post',
            content: 'Saudi Arabia has long been synonymous with oil, now the Middle Eastern nation is focused on becoming a world leader in hydrogen production',
        },
        {
            title: 'A Whopper of a Stock Buy at Burger King’s Parent',
            time: '6 hours ago',
            journal: 'Barrons Press',
            content: 'Shares of Restaurant Brands, the parent of Burger King and Popeyes, have underperformed this year, but new director Marc Lemann bought up stock.',
        },
        {
            title: 'Bearish Bets: 2 Nasdaq Stocks You Should Consider Shorting This Week',
            time: '8 hours ago',
            journal: 'Bloomberg',
            content: 'Using technical analysis of the charts of those stocks, and, when appropriate, recent actions and grades from TheStreet\'s Quant Ratings, we zero in on five names.  While we will not be weighing in with fundamental analysis, we hope this piece will give investors interested in stocks on the way down a good starting point to do further homework on the names.  Cohu Inc.  recently was downgraded to Hold with a C+ rating by TheStreet\'s Quant Ratings..',
        },
        {
            title: 'Delta Variant Creates Emerging Markets Gap as Outperformers Hit',
            time: '8 hours ago',
            journal: 'Bloomberg',
            content: '(Bloomberg) -- A handful of emerging-market currencies have held onto gains versus the dollar this year. That list may shrink in the coming weeks as the highly contagious delta variant forms a new fault line for developing nations.Countries that are lagging in vaccination rates -- such as South Africa and Russia -- may feel the pressure as they tighten restrictions that will hurt economic activity, according to Credit Agricole CIB. Once the best performers of 2021, the rand and ruble were among',
        },
        {
            title: 'Needham Bets Big on These 2 Tech Stocks',
            time: '9 hours ago',
            journal: 'The Financial Post',
            content: 'Through the first half of this year, we’ve seen heavy volatility in the NASDAQ; at one point, the tech-heavy index even swung into correction territory. But since mid-May, there has been a sustained gain, on a steeper trend than the NASDAQ has seen recently. And some of the NASDAQ’s giants, dominant tech firms like Apple, Microsoft, and Facebook, have been sharing in those gains. It’s a turnaround from conditions earlier this year, when the tech giants led a retreat. Investors are moving back in.',
        },
        {
            title: 'Micron\'s Post-Earnings Selloff Leaves the Stock Attractively Priced',
            time: '12 hours ago',
            journal: 'The Street',
            content: 'The current memory up-cycle still has a ways to go. And with Micron\'s stock having tread water for several months, its risk/reward looks compelling.',
        },
    ];

    return (  
        <div className="newspage" style={{marginLeft:"10%", marginRight:"10%"}}>
            <Container>
                <h2>{active_language[0]}</h2>
                <p>{active_language[1]}</p>
                {news.map((article) => (
                    <Card style={{flex:1, marginBottom:"20px"}}>
                        <Card.Body>
                            <Card.Title><a href="https://youtu.be/dQw4w9WgXcQ">{article.title}</a></Card.Title>
                            <Card.Text>
                                <em>{active_language[2]} {article.journal}, {article.time}</em> <br/><br/>
                                {article.content} <br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
}
 
export default News;