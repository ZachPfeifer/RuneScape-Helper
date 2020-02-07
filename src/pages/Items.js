import React, { useContext, useState } from 'react'
import { ItemContext } from "../context/ItemContext";
import Loading from '../components/Utilities/Loading'
import ItemsMapped from "../components/Item/ItemsMapped";
import Pagination from "../components/Utilities/Pagination";

const Items = () => {
  //Uses Context to grab items and loading from State
  const { items, loading } = useContext(ItemContext)
  //useState to Set Pages
  const [currentPage, setcurrentPage] = useState(1)
  //useState to Set Item number per Page
  const [itemsPerPage] = useState(5)

  //Get Current Item
  const indexOFLastItem = currentPage * itemsPerPage
  const indexOfFistPost = indexOFLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFistPost, indexOFLastItem)

  //Change Page
  const paginate = (pageNumber) => setcurrentPage(pageNumber)


  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="wrapper container-fluid">
        <ItemsMapped items={currentItems} loading={loading} />
        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
      </div >
    );
  }





  //OLD CODE
  // if (loading) {
  //   return <Loading />
  // } else {
  //   return (
  //     <div className="wrapper container-fluid">
  //       <ul className="list-group mb-4">
  //         {items.map(item => {
  //           if (item.tradeable === "true") {
  //             return (
  //               <li key={item.id} className="list-group-item">
  //                 <Link
  //                   to={`/items/${item.id}`}>
  //                   <i>{item.id}</i>
  //                   <h3>{item.name}</h3>
  //                 </Link>
  //               </li>
  //             )
  //           }
  //         })
  //         }
  //       </ul>
  //     </div >
  //   );
  // }
}

export default Items;

// import React, { Component } from 'react'
// import Axios from 'axios'
// import { Link } from 'react-router-dom'
// import Loading from '../components/Utilities/Loading'



// class Items extends Component {


//   state = {
//     items: [],
//     loading: true

//   }


//   //SECTION API 
//   componentDidMount() {
//     // const { id } = this.props.match.params
//     // GET ALL ITEMS
//     Axios.get('//osrshelper.herokuapp.com/api/runelite')
//       .then(res => this.setState({
//         items: res.data,
//         loading: false
//       }))

//   }


//   render() {
//     const items = this.state.items
//     console.log();


//     if (this.state.loading) {
//       return <Loading />
//     } else {
//       return (
//         <div className="wrapper container-fluid">
//           <div className="row">
//             {items.map(item => {
//               if (item.tradeable === "true") {
//                 return (
//                   <div>
//                     <Link
//                       to={`/items/${item.id}`}>
//                       <div className="card">
//                         <h3 className="card-body">{item.name}</h3>
//                       </div>
//                     </Link>
//                   </div>
//                 )
//               }
//             })
//             }
//           </div>
//         </div >
//       );
//     }
//   }
// }
// export default Items;
