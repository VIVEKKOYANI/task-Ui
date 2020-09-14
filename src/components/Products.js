import React, { Component } from "react";
import d1 from "../images/d1.webp";
import download1 from "../images/download1.jpg";
import download2 from "../images/download2.jpg";
import './Product.css';

export default class Products extends Component {
  render() {
    return (
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={d1} className="rounded-circle" alt="dog" />
            </div>
            <div className="col">
              <img src={download1} className="rounded-circle" alt="dog" />
            </div> 
            <div className="col">
              <img src={download2} className="rounded-circle" alt="dog" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>EASES ANXIETY</h3>
              <h5>
                Raised rims that "protect" your dog which has a positive effect
                on your dog's nervous system claming their sensory behaviors and
                providing comfort when they need it.{" "}
              </h5>
            </div>
            <div className="col">
              <h3>EASE PAIN & CORRECTS POSTURE</h3>
              <h5>
                Raised rims that support your dog's neck and spine for the
                duration of their sleep bundled with premium soft foam to reduce
                muscle and joint pain.
              </h5>
            </div>
            <div className="col">
              <h3>PET-SAFE</h3>
              <h5>
                Anti-bacterial faux fur and durable nyion combine to create a
                comfortable and hegienic place for your dog to sleep.{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
