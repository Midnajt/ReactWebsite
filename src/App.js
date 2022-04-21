import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
            {/* <Button variant="contained" color="primary">
                Hello World
            </Button> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
