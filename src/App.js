{/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './Header'; 
import Home from './Home';    
import Footer from './Footer'; 

function App() {
  return (
    <Router>
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        
        <Header />

       
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
