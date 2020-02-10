// import React, { useContext, useEffect } from 'react'
// import { ItemContext } from "../context/ItemContext";
// import Banner from '../components/Utilities/Banner'
// import Loading from '../components/Utilities/Loading'
// import axios from "axios";

// const SingleItem = () => {

//   const { activeItem, loading } = useContext(ItemContext)
//   console.log(activeItem)
//   const { name, icon_large, description } = activeItem
//   // const data = activeItem.current

//   if (loading) {
//     return <Loading />
//   }
//   else {
//     return (
//       <div className="wrapper">
//         <Banner
//           name={name}
//           // price={data.price}
//           img={icon_large}
//           description={description} />
//       </div>
//     )
//   }

// }

// export default SingleItem;




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
    // GET BY ID
    Axios.get(`//osrshelper.herokuapp.com/api/runelite/${id}`)
      .then(res => this.setState({
        activeItem: res.data.item,
        loading: false
      }))

  }



  render() {
    // const item = this.state.activeItem
    const data = this.state.activeItem.current
    const { name, icon_large, description } = this.state.activeItem


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


