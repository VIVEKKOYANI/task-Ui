import React, { Component } from "react";
import image from "../images/download.webp";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./ProductDetails.css";

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col">
              <img src={image} alt="dog" />
              <div className="row">
                <div className="col">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </div>
                <div className="col">
                  <h5 className="productdetail-text">
                    6,424 rating by happy customers
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="productdetail-text">
                    Wow! All dogs deserve one of the beds! Don't wait! Amazing!!
                    My little dog loves it. i actually fitted it into his old
                    basket and it's a win win!
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <AccountCircleIcon />
                </div>
                <div className="col">
                  <h4>JOHN SMITH</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <h1>Improve Your Dogs Health & Well-Being with Brand Name</h1>
              <p>Fall asleep faster and sleep better throughout the night.</p>
              <div className="row">
                <div className="col">
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Eases Anxiety
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Drug-Free Remedy
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Reduces Vulnerability
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Eases Pain & Corrects Posture
                  </h5>
                </div>
                <div className="col">
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Stylish & Pet Safe
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Machine Washable
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> Satisfaction Guaranted
                  </h5>
                  <h5 className="productdetail-text">
                    <CheckCircleOutlineIcon /> 14 Days Money Back Guaranted
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="productdetail-text">Choose Bundle</h5>
                </div>
                <div className="col">
                  <h5 className="productdetail-text">Choose Size</h5>
                </div>
                <div className="col">
                  <h5 className="productdetail-text">Choose Color</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="productdetail-btn">
                    Order Now
                    <TouchAppIcon />
                  </button>
                </div>
                <div className="col">
                  <h5>Was $79.90</h5>
                  <h4>Get it now for $61.90</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
