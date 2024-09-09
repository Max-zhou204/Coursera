import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeContext.js';
import './App.css';
import Navbar from "./components/Navbar.js";
import Manufacturer from "./components/Manufacturer.js";
import Homepage from "./components/Homepage.js";
import {Airbus, Boeing} from "./components/ManufacturersData.js";
import Footer from "./components/Footer.js";

function ThemeToggleButton() {
  const { darkMode, setDarkMode } = useTheme();
  return (
      <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
  );
}

function App() {
    return (
        <ThemeProvider>
            <div>
                <Navbar />
                <ThemeToggleButton/>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Airbus" element={<Manufacturer company={Airbus} />} />
                    <Route path="/Boeing" element={<Manufacturer company={Boeing} />} />
                </Routes>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
