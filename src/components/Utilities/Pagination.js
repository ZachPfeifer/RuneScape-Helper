import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []
  //For loop for pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        <a className="page-link" href="javascript:void(0)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
        {/*NOTE Actual Page numbers */}
        {pageNumbers.map(number =>
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">{number}</a>
          </li>
        )}
        <a className="page-link" href="javascript:void(0)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </ul>
      {/* FIXME Need to figure out page number(href). Can use # with warning. using javascript:void(0) with red warning */}

    </nav >
  )
}
export default Pagination