import React, { Component } from "react";
import "./Question.css";

export default class Question extends Component {
  render() {
    return (
      <div className="outside">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <h1 style={{color:'white', justifyContent:'center', textAlign:'center'}}>Frequntly Asked Questions</h1>
              <h5 style={{color:'white', justifyContent:'center', textAlign:'center'}}>Don't just take the Our word for it...</h5>
            </div>
          </div>
          <div className="inside">
            <div className="row">
              <div className="col">
                <p className="question-icon">-</p>
              </div>
              <div className="col-10">
                <h3 className="Question">WHEN WILL MY ORDER SHIP?</h3>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="answer">
                    shipping takes about 7 days. (This do Not include weekends
                    or holidays). when we are lunching promotion, orders may
                    take a bit longer to process. Once your order has shipped,
                    you will receive a shipping confirmation via email with
                    tracking number.
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">HOW MUCH DOES SHIPPING COST?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">What IS MY TRACKING NUMBER?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">
                  {" "}
                  I ORDERED 2 ITEM BUT ONLY RECEIVED 1 ITEM. WHERE IS THE REST
                  OF MY ORDERED?
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">My PACKAGE SAYS DELIVERED, BUT I DIDN'T RECEIVE IT.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">HOW CAN I CANCEL MY ORDER?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">I DIDN'T RECEIVE AN ORDERED CONFIRMATION EMAIL.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">MY ITEM ARRIVED DAMAGED.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="question-icon">+</p>
              </div>
              <div className="col-10">
                <h3 className="Question">MORE QUESTIONS?</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
