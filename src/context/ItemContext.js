import React, { Component, createContext, } from 'react'
import Axios from 'axios'

export const ItemContext = createContext()


class ItemContextProvider extends Component {

  state = {
    items: [],
    activeItem: {},
    loading: true
  }


  getAllData = async () => {
    try {
      Axios.get('//osrshelper.herokuapp.com/api/runelite')
        .then(res => this.setState({
          items: res.data,
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }


  getDataById = async () => {
    try {
      const { id } = this.props.match.params
      // GET BY ID
      Axios.get(`//osrshelper.herokuapp.com/api/runelite/${id}`)
        .then(res => this.setState({
          activeItem: res.data.item,
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }



  componentDidMount() {
    this.getAllData()
    this.getDataById()
  }

  //FIXME Not sure if We'll need this
  getAllItems = () => {

  }
  getItemById = () => {

  }

  render() {
    return (
      <ItemContext.Provider
        value={{ ...this.state, getItemById: this.getDataById }}>
        {this.props.children}
      </ItemContext.Provider>

    )
  }
}

export default ItemContextProvider