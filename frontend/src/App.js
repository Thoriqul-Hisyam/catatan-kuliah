import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavbarComponent';

function App() {

  return (
    <div style={{ maxWidth: 520, width: '100%', margin: '0 auto', height: "100%" }} className=' fixed right-0 top-0 left-0 bottom-0 overflow-y-scroll overscroll-contain '>
      <Navbar />
      <HomeComponent />
    </div>
  );
}

export default App;
