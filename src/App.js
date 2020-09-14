import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Banner from "./components/Banner";
import CustomerReviews from "./components/CustomerReviews";
import Questions from './components/Questions';
import ProductDetails1 from './components/ProductDetails1';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* Header */}
        <Header />
        {/* Product detail */}
        <ProductDetails />
        {/* Products */}
        <Products />
        {/* Banner */}
        <Banner />
        {/* Size information */}
        {/* Customer Reviews */}
        <CustomerReviews />
        {/* Question */}
        <Questions />
        {/* Product detail */}
        <ProductDetails1  />
        {/* Footer */}
        <Footer />
      </>
    );
  }
}
export default App;
