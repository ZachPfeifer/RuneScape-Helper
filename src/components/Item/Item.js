import React from 'react'


//Props are all the Items
export default function Item(props) {
  console.log(props.items);

  return (
    <li className="list-group-item list-group-item-warning text-center col-lg-12 col-md-6 col-sm-1">
      <p className="float-left"><small> Id: {props.id}</small></p>
      <br />
      <p className="pl-3 pt-3"><b>{props.name}</b></p>
      {/* <p><b>Stackable:</b> {props.stackable}</p> */}
      {/* <p><b>Noted: </b>{props.noted}</p> */}
    </li>
  )
}

  // "id": "0",
  //   "name": "Dwarf remains",
  //     "stackable": "false",
  //       "members": "true",
  //         "noted": "false",
  //           "tradeable": "false",
  //             "noteId": "-1",
  //               "value": "0"