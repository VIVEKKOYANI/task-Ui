import React, { Component } from 'react'
import TouchAppIcon from '@material-ui/icons/TouchApp';

export default class Header extends Component {
    render() {
        return (
            <div>
                <button className="header">Rush my order<TouchAppIcon /></button>
                <hr />
            </div>
        )
    }   
}
