import React, { useState } from "react";
import { pageData } from "../../data/Data";

const Pag = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(pageData.length / itemsPerPage);

  console.log(totalPages, "total pages");
  const page = [];

  const generatePageIndex = () => {
    for (let i = 1; i <= totalPages; i++) {
      page.push(i);
    }
    return page;
  };

  console.log(page, "page");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentListItems = pageData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-xl font-bold">Pagination </h1>
      <div className="grid grid-cols-3 gap-3">
        {currentListItems.map((listItems) => {
          return (
            <li
              key={listItems.id}
              className=" list-none px-3 py-2 bg-red-300 mx-4"
            >
              {listItems.name}
            </li>
          );
        })}
      </div>
      <div className="mt-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className=" bg-red-500 px-5 py-2 mx-2 rounded-lg disabled:bg-gray-500 disabled:cursor-none disabled:text-white"
        >
          prev
        </button>
        {generatePageIndex().map((pageNo) => (
          <button
            onClick={() => setCurrentPage(pageNo)}
            key={pageNo}
            className={
              currentPage === pageNo
                ? " bg-green-600 px-5 py-2 mx-2 rounded-lg"
                : " bg-red-500 px-5 py-2 mx-2 rounded-lg"
            }
          >
            {pageNo}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" bg-red-500 px-5 py-2 mx-2 rounded-lg disabled:bg-gray-500 disabled:cursor-none disabled:text-white"
        >
          next
        </button>
        {/* {page.map((items) => {
          return <button>{items}</button>;
        })} */}
      </div>
    </div>
  );
};

export default Pag;
