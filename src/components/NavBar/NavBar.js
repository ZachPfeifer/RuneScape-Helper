import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../images/icon.png'


export default class NavBar extends Component {
  render() {
    return (
      <div className="main-header">
        {/* <i><img src={Icon} alt="OSRS" /></i> */}
        <span className="brand">Rune Helper</span>
        <ul className="main-nav">
          <li className="nav-link">
            <Link to="/">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/items">
              <a>
                Items
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/trade-rates">
              <a>
                Trade Rates
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/error">
              <a>Error</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
