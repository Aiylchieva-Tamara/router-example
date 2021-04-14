import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';

function App() {

  const activeLinkStyle = {
    fontWeith: "bold"
  }

  return (
    <div className="App">
      <ul className="ulNav">
        <li><NavLink exact activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/">Home</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/About">About</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/posts">Posts</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <div className="components">
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/" component={NotFound} /> */}
        </div>
      </Switch>
    </div>
  );
}

export default App;