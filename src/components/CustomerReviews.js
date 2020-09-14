import React, { Component } from "react";
import image from "../images/download.webp";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import './CustomerReviews.css';
import TouchAppIcon from '@material-ui/icons/TouchApp';

export default class CustomerReviews extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h1>Customer Reviews</h1>
            <p>Don't just take the our word for it...</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={image} alt="dog" />
          </div>
          <div className="col">
            <img src={image} alt="dog" />
          </div>
          <div className="col">
            <img src={image} alt="dog" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <h5>
              Night one and I think it's fair to say Beans liks his new bed!
              This is a large bed, Beans is about 35 pounds but has a longer
              body, I problem could have gotten an XL but's perfect when he's
              curled up.
            </h5>
            <h4>JESSICA</h4>
          </div>
          <div className="col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <h5>
              Night one and I think it's fair to say Beans liks his new bed!
              This is a large bed, Beans is about 35 pounds but has a longer
              body, I problem could have gotten an XL but's perfect when he's
              curled up.
            </h5>
            <h4>JESSICA</h4>
          </div>
          <div className="col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <h5>
              Night one and I think it's fair to say Beans liks his new bed!
              This is a large bed, Beans is about 35 pounds but has a longer
              body, I problem could have gotten an XL but's perfect when he's
              curled up.
            </h5>
            <h4>JESSICA</h4>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <button className="custReviews-btn">ORDER NOW<TouchAppIcon /></button>
          </div>
        </div>
      </div>
    );
  }
}
