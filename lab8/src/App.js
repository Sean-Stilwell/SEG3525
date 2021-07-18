import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Activity from "./components/Activity";
import Learn from "./components/Learn";
import News from "./components/News";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/activity" component={Activity}/> 
          <Route exact path="/news" component={News}/>
          <Route exact path="/learn" component={Learn}/>
        </Switch>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
