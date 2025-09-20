import React, { useState } from "react";
import { CatalogList } from "../Queries/Queries";

import './Catalog.css'

function Catalog({ totalPages=10, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const visibleCount = 10;
  const changePage = (page) => {
    console.log(page)

    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  // Calculate range
  let start = currentPage;
  let end = start + visibleCount - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - visibleCount + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (

    <div> 
        <CatalogList page={currentPage}/>
    <div className="pageButtons">
      {/* Prev button */}
      <button
        className="changePage"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          
          key={page}
          onClick={() => changePage(page)}
          className={page === currentPage ? "activeButton" : "nonActiveButton"}

        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        className="changePage"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
    </div>
  );
}

export default Catalog;
