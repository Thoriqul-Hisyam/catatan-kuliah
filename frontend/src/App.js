import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavbarComponent';

function App() {

  return (
    <div className="App">
      <Navbar />
      <HomeComponent />
    </div>
  );
}

export default App;
