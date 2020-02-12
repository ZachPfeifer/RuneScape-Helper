
import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'


export default function ItemList(props) {

  // { loading ? <Loading /> : <ItemList filterItems={filterItems} /> }

  let items = props.filterItems.map((item) => {
    if (item.tradeable === "true" && item.name != "null") {
      return <Link
        to={`/items/${item.id}`}
        key={item.id}>
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          stackable={item.stackable}
          noted={item.noted}
        />
      </Link>
    }
  })


  return (
    <div className="mx-auto p-5">
      <ul className="list-group list-group-horizontal row m-2 d-flex justify-content-between">
        {items}
      </ul>
    </div>
  )

  // "id": "0",
  //   "name": "Dwarf remains",
  //     "stackable": "false",
  //       "members": "true",
  //         "noted": "false",
  //           "tradeable": "false",
  //             "noteId": "-1",
  //               "value": "0"
}
















// import React from 'react';
// import Loading from '../Utilities/Loading';
// import { Link } from 'react-router-dom';

// const ItemList = ({ items, loading, filterItems }) => {



//   if (loading) {
//     return <Loading />
//   } else {
//     return (
//       <ul className="list-group mb-4 list-group-horizontal row">
//         {items.map(item => (
//           <li key={item.id} className="list-group-item list-group-item-warning col-md-2 col-sm-1">
//             <Link
//               to={`/items/${item.id}`}>
//               <i>{item.id}</i>
//               <h3>{item.name}</h3>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default ItemList;