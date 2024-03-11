import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDefault from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Map from "./components/Map";
import Tournaments from "./components/Tournaments";
import SignUpPage from "./components/Sign-up";
import SignInPage from "./components/Sign-in";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarDefault />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
