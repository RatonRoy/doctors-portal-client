import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import Appointment from './components/Pages/Appointment/Appointment';
import Reviews from './components/Pages/Reviews/Reviews';
import Contact from './components/Pages/Contact/Contact';
import FooterEnd from './components/Shared/FooterEnd/FooterEnd';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='login' element = {<Login></Login>}></Route>
        <Route path='/appointment' element = {<Appointment></Appointment>}></Route>
        <Route path='/reviews' element = {<Reviews></Reviews>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
      </Routes>
      <FooterEnd></FooterEnd>
    </div>
  );
}

export default App;
