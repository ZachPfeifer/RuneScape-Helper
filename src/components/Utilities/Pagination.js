import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []
  //For loop for pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav aria-label="..." className="d-flex justify-content-center">
      <ul className="pagination pagination-sm">
        <button className="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </button>
        {/*NOTE Actual Page numbers */}
        {pageNumbers.map(number =>
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">{number}</button>
          </li>
        )}
        <button className="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </ul>

    </nav >
  )
}
// {/* FIXME Need to figure out page number(href). Can use # with warning. using javascript:void(0) with red warning */}
export default Pagination