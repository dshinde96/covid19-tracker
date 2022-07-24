import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";


import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      
     <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
      </Router>
    </div>
  );
}


export default App;
