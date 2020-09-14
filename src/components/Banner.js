import React, { Component } from "react";
import image from "../images/download.webp";
import './Banner.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TouchAppIcon from '@material-ui/icons/TouchApp';

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={image} alt="dog" />
          </div>
          <div className="col">
            <h3>The Pawfect Bed To Ease Your Dogs' Anxiety.</h3>
            <h5 className="banner-text">
              At Soothing Bed, we aim to provide the absolute best in
              anti-anxiety dog beds. Our Soothing bed is designed to ease your
              dogs mind and your stress from first use.
            </h5>
            <div className="row">
                <div className="col">
                    <button className="banner-btn">ORDER NOW<TouchAppIcon /></button>
                </div>
                <div className="col">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon />
                    <h4 className="banner-rating">6,424 rating by happy customers</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
