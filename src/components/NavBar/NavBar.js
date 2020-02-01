import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-header">
        <span className="brand">Rune Helper</span>
        <ul className="main-nav">
          <li className="nav-link">
            <a href="#">Home</a>
          </li>
          <li className="nav-link">
            <a href="#">Item</a>
          </li>
          <li className="nav-link">
            <a href="#">Trade Rates</a>
          </li>
        </ul>
      </div>
    )
  }
}
