import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TodoApp from './pages/TodoApp'

class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
