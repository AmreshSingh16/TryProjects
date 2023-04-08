import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import About from "./screens/About";
import Project from "./components/Project";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container"style={{position : "relative"}}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />    
        <Route exact path="/inproject" element={<Project />} />   
      </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
