import React from 'react';
import Loading from '../Utilities/Loading';
import { Link } from 'react-router-dom';

const ItemsMapped = ({ items, loading }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <ul className="list-group mb-4 list-group-horizontal row">
        {items.map(item => (
          <li key={item.id} className="list-group-item list-group-item-warning col-md-2 col-sm-1">
            <Link
              to={`/items/${item.id}`}>
              <i>{item.id}</i>
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemsMapped;