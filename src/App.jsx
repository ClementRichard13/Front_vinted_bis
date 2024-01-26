import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/HomePage/Home";

import Offer from "./pages/OfferPage/Offer";

import Header from "./Components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;