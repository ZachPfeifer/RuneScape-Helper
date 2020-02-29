import React, { useContext, useState } from 'react'
import { ItemContext } from "../context/ItemContext";
import Loading from '../components/Utilities/Loading'
import ItemList from "../components/Item/ItemList";
import Pagination from "../components/Utilities/Pagination";
import SearchBox from "../components/Utilities/SearchBox";

const Items = () => {
  //SECTION Uses Context to grab items and loading from State
  const { items, loading, searchItem, handleInput } = useContext(ItemContext)

  //SECTION useState to Set Pages
  const [currentPage, setcurrentPage] = useState(1)
  //SECTION useState to Set Item number per Page
  const [itemsPerPage] = useState(1000)

  //SECTION Get Current Item
  const indexOFLastItem = currentPage * itemsPerPage
  const indexOfFistPost = indexOFLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFistPost, indexOFLastItem)

  //SECTION Change Page
  const paginate = (pageNumber) => setcurrentPage(pageNumber)


  //SECTION Search Items By Name. //Should be items not currentItems
  let filterItems = currentItems.filter((item) => {
    return item.name.toLowerCase().includes(searchItem) || item.id.includes(searchItem)
  })


  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="row mx-auto text-center">
            <div className="col-12">
              <h1 className="">All Tradeable Items: </h1>
              <br />
              <SearchBox
                handleInput={handleInput} />
            </div>
          </div>
          <br />
          <div className="scrolling-wrapper">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={items.length} paginate={paginate}
            />
          </div>
          <div className="mb-5">
            {/* FIXME Pagination works when passing current page but filterItems wont work
            items={currentItems} */}
            <ItemList
              filterItems={filterItems} />
            <div className="scrolling-wrapper">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div >
    );
  }
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
