import React from 'react'

const ChaildPagination = ({
    currentPage,
    totalPages,
    onPageChange,
    showPrevNext = true,
    showFirstLast = true,
  }) => {
      const handleChange = (page) => {
          if(page >=1 && page <= totalPages && page !== currentPage){
              onPageChange(page);
          }
      }

      const renderPrevButton = () =>{
          return currentPage > 1 && showPrevNext && (
              <button onClick={() =>{handleChange(currentPage - 1)}}>Prev</button>
          )
      }

      const renderNextButton = () =>{
          return currentPage < totalPages && showPrevNext && (
              <button onClick={() => {handleChange(currentPage + 1)}}>Next</button>
          )
      }

      const renderFirstButton = () => {
          return currentPage > 1 && showFirstLast && (
              <button onClick={() => {handleChange(1)}}>First</button>
          )
      }

      const renderPrevLastButton = () => {
          return currentPage < totalPages  && showFirstLast && (
              <button onClick={() => {handleChange(totalPages)}}>Last</button>
          ) 
      }
  return (
    <div className='pagination'>
        {renderFirstButton()}
        {renderPrevButton()}
        <span>Page {currentPage} of {totalPages}</span>
        {renderNextButton()}
        {renderPrevLastButton()}
    </div>
  )
}

export default ChaildPagination