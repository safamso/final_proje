import { useState } from "react";
export const usePagination =(items,
    itemsPerPage)=>{
          const [currentPage, setCurrentPage] =
        useState(1);

        const totalPages = 5;

        const lastIndex =
        currentPage * itemsPerPage;

            const firstIndex =
        lastIndex - itemsPerPage;

           const currentItems = items.slice(
        firstIndex,
        lastIndex
    );
     return {

        currentPage,
        setCurrentPage,
        totalPages,
        currentItems

    };

}
