import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../components/Utilities/Loading'



class Items extends Component {


  state = {
    items: [],
    loading: true
  }


  //SECTION API 
  componentDidMount() {
    // const { id } = this.props.match.params
    // GET ALL ITEMS
    Axios.get('//bcw-sandbox.herokuapp.com/api/runelite')
      .then(res => this.setState({
        items: res.data,
        loading: false
      }))

  }


  render() {
    const items = this.state.items
    console.log();


    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <div className="wrapper container-fluid">
          <div className="row">
            {items.map(item => {
              if (item.tradeable === "true") {
                return (
                  <div>
                    <Link
                      to={`/items/${item.id}`}>
                      <div className="card">
                        <h3 className="card-body">{item.name}</h3>
                      </div>
                    </Link>
                  </div>
                )
              }
            })
            }
          </div>
        </div >
      );
    }
  }
}
export default Items;
