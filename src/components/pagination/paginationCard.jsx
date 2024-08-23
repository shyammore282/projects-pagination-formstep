import React from "react";

const PaginationCard = ({
  currentPage,
  totalPages = 10,
  handleOnChangePage,
}) => {
  const pages = [];

  const generatePages = () => {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div className="mt-9 mb-5">
      <button
        onClick={() => handleOnChangePage(currentPage - 1)}
        className=" bg-red-500 text-white mx-1 px-3 py-1 disabled:bg-white disabled:cursor-none disabled:text-slate-400"
        disabled={currentPage === 1}
      >
        prev
      </button>
      {generatePages().map((pageNo) => (
        <button
          onClick={() => handleOnChangePage(pageNo)}
          key={pageNo}
          className={
            currentPage === pageNo
              ? " bg-green-600 text-white px-3 mx-1 py-1"
              : "bg-red-500 text-white px-3 mx-1 py-1"
          }
        >
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => handleOnChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" bg-red-500 text-white mx-1 px-3 py-1 hover:bg-red-500 disabled:bg-white disabled:cursor-none disabled:text-slate-400"
      >
        next
      </button>
    </div>
  );
};

export default PaginationCard;
