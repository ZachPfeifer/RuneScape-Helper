import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []
  //For loop for pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number =>
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
            {/* FIXME Need to figure out page number(href) */}
          </li>
        )}
      </ul>

    </nav >
  )
}
export default Pagination