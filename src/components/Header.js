import React, { Component } from 'react'
import logo from './temple.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <img id="logo" src={logo} alt="logo"/>
                <h1 id="app-header">Temple</h1>
            </div>
        )
    }
}
