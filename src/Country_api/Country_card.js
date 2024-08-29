import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryComponent from "./index";
import Details from "./details";
import SignIn from "./login";
import CurrencyConverter from "../currency_converter";
import Logout from "./logout";
// import CardComponent from "./card";

// import CardComponent from "./card";

const CountryCard = (props) => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn />} />
            <Route path="/Country" element={<CountryComponent />} />
            <Route path="/currencyconverter" element={<CurrencyConverter />} />
            <Route path="/:id" element={<Details/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
        
        </BrowserRouter>
  )
};

export default CountryCard;
