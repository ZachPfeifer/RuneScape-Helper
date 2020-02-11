import React, { Component, createContext } from 'react'
import Axios from 'axios'

// @ts-ignore
export const ItemContext = createContext()


class ItemContextProvider extends Component {

  state = {
    items: [],
    // activeItem: {},
    loading: true,
    searchItem: [],

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

  //FIXME Potentially broken (dont have access to params in here)
  // getDataById = async (id) => {
  //   try {
  //     console.log(this.state.items);
  //     // const { id } = this.state.items.id //FIXME
  //     // GET BY ID
  //     Axios.get(`//osrshelper.herokuapp.com/api/runelite/${id}`)
  //       .then(res => this.setState({
  //         activeItem: res.data,
  //         loading: false
  //       }))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }




  componentDidMount() {
    this.getAllData()
    // this.getDataById()
  }

  //FIXME Not sure if We'll need this (may use in order to pass specific info as a value)
  // getAllItems = () => {

  // }
  // getItemById = (id) => {
  //   let tempItem = [this.state.items]
  //   const item = tempItem.find(item => item.id === id) //FIXME need access to ID also need to pass as prop
  //   return item
  // }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchItem: e.target.value })
  }

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          handleInput: this.handleInput
        }}>
        {this.props.children}
      </ItemContext.Provider>

    )
  }
}

export default ItemContextProvider