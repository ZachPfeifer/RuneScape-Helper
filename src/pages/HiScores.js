import React, { Component } from 'react'
import Axios from 'axios'
// import { Link } from 'react-router-dom'

class HiScores extends Component {

  // constructor(props) {
  //   super(props)
  //    this.handleChange = this.handleChange.bind(this);
  //    this.lookup = this.lookup.bind(this);

  // }

  state = {
    name: '',
    stats: [],
  }

  lookup = (e) => {
    Axios.put('//osrshelper.herokuapp.com/api/runelite/hiscore/', { name: this.state.name })
      .then(res => this.setState({
        stats: res.data.split("\n"),
      }))
    console.log(this.state.stats)
    e.preventDefault();
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  //SECTION API 
  componentDidMount() {
  }


  render() {
    const stats = this.state.stats.map(stat => <p>{stat}  |</p>)

    return (
      <div className="wrapper container-fluid">
        <div className="row">
          <div>
            <form onSubmit={this.lookup}>
              <label>
                Name:
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          {stats}

        </div>
      </div >
    )
  }
}
export default HiScores;
