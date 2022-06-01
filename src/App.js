import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// components
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TodoApp from './pages/TodoApp'
import Post from './pages/Post';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/todos' component={TodoApp} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
