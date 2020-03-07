import React from 'react';
import Hero from "./components/hero";
import Category  from "./components/category";
import Products  from "./components/Products";
import Hero2  from "./components/hero2";
import About from "./components/About";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
     
     <Hero/>
     <Category/>
     <Products/>
     <Hero2/>
     <About/>
     <Footer/>


    </div>
  );
}

export default App;
