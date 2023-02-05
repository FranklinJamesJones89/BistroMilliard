import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App =() => {
  return (
    <div className="App">
			<Navbar />
			<Header />
			<i class="fa-solid fa-spoon fa-2x"></i>
    </div>
  );
}

export default App;
