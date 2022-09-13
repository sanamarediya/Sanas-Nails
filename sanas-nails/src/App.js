import './App.css';
//import Header from './components/header';
//import Footer from './components/footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navb from './components/nav';
import Home from './components/Home';
import Services from './components/Services';
import Appointments from './components/Appointments';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navb />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
