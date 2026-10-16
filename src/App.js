
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Home from "./Home";
import EmiCalculator from "./EmiCalculator";
import Login from "./Login";

import About from "./About";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <div className="main-layout">
          <Sidebar />

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/emi-calculator"
                element={<EmiCalculator />}
              />
              <Route path="/login" element={<Login />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
