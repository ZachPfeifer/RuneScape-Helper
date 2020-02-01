import React, { Component } from 'react'
import Axios from 'axios'


export default class SingleItem extends Component {
  state = {
    activeItem: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // GET BACKGROUND IMAGE
    Axios.get(`//bcw-sandbox.herokuapp.com/api/runelite/${id}`)
      .then(res => this.setState({
        activeItem: res.data.item
      }))

  }



  render() {
    console.log(this.state.activeItem);

    return (

      <div className="wrapper">
        <img src={this.state.activeItem.icon} alt="ItemPhoto" />
        < p > {this.state.activeItem.name}</p>
      </div>
    )
  }
}
