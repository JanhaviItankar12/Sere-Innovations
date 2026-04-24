import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from './HomePage/Homepage';
import Layout from './Component/Layout';
import PrivacyPolicy from './HomePage/PrivacyPolicy';
import ContactUs from './HomePage/ContactUs';
import AboutUs from './HomePage/AboutUs';
import HelpCenter from './HomePage/HelpCenter';
import FarmersGuide from './HomePage/FarmersGuide';
import WarrantyInfo from './HomePage/WarrantyInfo';
import ScrollToTop from './Component/ScrollToTop';

function App() {
 

  return (

    //Routes
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="contact" element ={<ContactUs/>}/>
            <Route path="about" element ={<AboutUs/>}/>
            <Route path="help" element={<HelpCenter/>}/>
            <Route path="farmers-guide" element={<FarmersGuide/>}/>
            <Route path="warranty-info" element={<WarrantyInfo/>}/>
          </Route>
        </Routes>

      </Router>
    
    
   
  )
}

export default App
