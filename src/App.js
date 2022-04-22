import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
