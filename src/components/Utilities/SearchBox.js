import React from 'react'

export default function SearchBox(props) {
  return (
    <form onSubmit={props.handleInput}>
      <label htmlFor="search-input">
        <span className="mr-1">
          Search Bar:
      </span>
        <div className="input-group">
          <input onClick={props.handleInput} type="search" name="search-input" placeholder="Search Item by Name" className="form-control" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary">Search</button>
          </div>
        </ div>
      </label>
    </form>
  )
}
