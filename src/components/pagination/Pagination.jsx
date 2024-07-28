import React, { useState } from "react";
import PaginationCard from "./paginationCard";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
  }));

  const perPageItems = 10;

  const indexOfLastPage = currentPage * perPageItems;
  const indexOfFirstPage = indexOfLastPage - perPageItems;

  const currentListItems = dummyData.slice(indexOfFirstPage, indexOfLastPage);

  console.log(currentListItems);

  const handleOnChangePage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  console.log(indexOfFirstPage, indexOfLastPage);
  return (
    <div className=" flex flex-col items-center ">
      <h2 className="text-2xl font-bold">Paginatio</h2>
      <ul className=" grid grid-cols-3 gap-3">
        {currentListItems.map((items) => (
          <li className=" list-none  px-5 py-2 bg-red-500 my-2" key={items.id}>
            {items.name}
          </li>
        ))}
      </ul>

      <PaginationCard
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / perPageItems)}
        handleOnChangePage={handleOnChangePage}
      />
    </div>
  );
};

export default Pagination;
