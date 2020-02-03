import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Icon from '../../images/icon.png'


export default class NavBar extends Component {
  render() {
    return (
      <div className="main-header">
        <i>
          {/* <img src={Icon} alt="OSRS" /> */}
        </i>
        <span className="brand">Rune Helper</span>
        <ul className="main-nav">
          <li className="nav-link">
            <Link to="/">
              
                Home
              
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/items">
              
                Items
              
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/trade-rates">
              
                Trade Rates
              
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/hiscores">
              
                HiScores
              
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/error">
              Error
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
