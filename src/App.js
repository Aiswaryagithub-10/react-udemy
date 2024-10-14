import Navigation from "./components/Navigation"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Popular from "./components/Popular"
import Recommended from "./components/Recommended"
import Sale from "./components/Sale"

// App.js
import React from 'react';

function App() {
  return (
    <div>
      
      <Navigation></Navigation>
      <Sale></Sale>
      <Categories></Categories>
      <Popular></Popular>
      <Recommended></Recommended>
      <Footer></Footer>
    
      </div>
  );
}

export default App
