import React, { useState } from 'react'
import ChaildPagination from './ChaildPagination';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
    <ChaildPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} showPrevNext={true} showFirstLast={true}/>
    </div>
  )
}

export default Pagination