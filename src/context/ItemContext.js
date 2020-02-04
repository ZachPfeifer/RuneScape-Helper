import React, { Component, createContext, } from 'react'
import Axios from 'axios'

// @ts-ignore
export const ItemContext = createContext()


class ItemContextProvider extends Component {

  state = {
    items: [],
    activeItem: {},
    id: {},
    loading: true
  }


  getAllData = async () => {
    try {
      Axios.get('//osrshelper.herokuapp.com/api/runelite')
        .then(res => this.setState({
          items: res.data,
          id: res.data.id,
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }

  //FIXME Potentially broken (dont have access to params in here)
  getDataById = async () => {
    try {
      const { id } = this.state.items.id //FIXME
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

  //FIXME Not sure if We'll need this (may use in order to pass specific info as a value)
  getAllItems = () => {

  }
  getItemById = (id) => {
    let tempItem = [this.state.items]
    const item = tempItem.find(item => item.id === id) //FIXME need access to ID
    return item
  }

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          getItem: this.getItemById,
        }}>
        {this.props.children}
      </ItemContext.Provider>

    )
  }
}

export default ItemContextProvider