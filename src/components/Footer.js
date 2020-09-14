import React, { Component } from 'react'
import '../App.css';
export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col"><p>Copyright 2020.All rights reserved.</p></div>
                    <div className="col"><p className="right">Terms & Conditions Privacy Policy</p></div>
                </div>
            </div>
        )
    }
}
