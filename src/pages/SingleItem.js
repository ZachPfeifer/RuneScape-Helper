import React, { Component } from 'react'
import Axios from 'axios'
import Banner from '../components/Utilities/Banner'
import Loading from '../components/Utilities/Loading'


export default class SingleItem extends Component {
  state = {
    loading: true,
    activeItem: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // GET BACKGROUND IMAGE
    Axios.get(`//osrshelper.herokuapp.com/api/runelite/${id}`)
      .then(res => this.setState({
        activeItem: res.data.item,
        loading: false
      }))

  }



  render() {
    console.log(this.state.activeItem);
    const test = this.state.activeItem.current
    console.log(test)
    // const item = this.state.activeItem
    const data = this.state.activeItem.current
    const { name, icon_large, description, price } = this.state.activeItem


    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <div className="wrapper">
          <Banner
            name={name}
            price={data.price}
            img={icon_large}
            description={description} />
        </div>
      )
    }
  }
}