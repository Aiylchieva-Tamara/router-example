import { Redirect, Route, Switch } from "react-router";
import {  NavLink } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import "./App.css"

function App() {
  const activeLinkStyle = {
    fontWeight: "bold",
  };   
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink  
          activeStyle={activeLinkStyle}
          activeClassName="activeLink"
          to="/"
          exact>Home</NavLink>
          </li>
        
        <li>
          <NavLink  
          activeStyle={activeLinkStyle}
          activeClassName="activeLink"
          to="/contact"
          exact>Home</NavLink>
          </li>
        
        <li>
          <NavLink  
          activeStyle={activeLinkStyle}
          activeClassName="activeLink"
          to="/about"
          exact>Home</NavLink>
          </li>
          <li>
          <NavLink  
          activeStyle={activeLinkStyle}
          activeClassName="activeLink"
          to="/posts"
          exact>Posts</NavLink>
          </li>
      </ul>
      <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/contact" component={Contact}  />
      <Route path="/about" component={About}  />
      <Route path="/" component={NotFound}  />
      <Route path="/posts" component={Posts}  />
      <Redirect to="/" />  
      {/* Главная страница ошибка */}
      
      </Switch>
      {/* <About /> */}
    </div>
  );
}

export default App;
