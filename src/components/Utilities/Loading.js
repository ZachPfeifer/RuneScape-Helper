import React from 'react'
import loadingGif from '../../images/gif/loading-gear.gif'

const Loading = () => {
  return (
    <div className="loading">
      <h4>Item Data Loading....</h4>
      <img src={loadingGif} alt="Loading" />
    </div>
  )
}
export default Loading