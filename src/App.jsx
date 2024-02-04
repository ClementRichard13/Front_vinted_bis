import "./App.css";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cookies from "js-cookie";

import Home from "./pages/HomePage/Home";

import Offer from "./pages/OfferPage/Offer";

import Header from "./Components/header";

import Signup from "./pages/SignupPage/Signup";

import Login from "./pages/LoginPage/Login";

import Publish from "./pages/PublishPage/publish";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish userToken={userToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
