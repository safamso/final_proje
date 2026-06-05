//CSS//
import "@components/Pagination/Pagination.css";
//Icons //
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Pagination = ({

    currentPage,
    setCurrentPage,
    totalPages

}) => {

    return (

        <div className="pagination">
            <button className="pagination_btn"> <FaChevronLeft/> </button>

            {

                Array.from(
                    { length: totalPages },

                    (_, index) => (
                      

                        <button
                            key={index}
                            className={
                                currentPage === index + 1
                                    ? "pagination_btn active_page"
                                    : "pagination_btn"
                            }

                            onClick={() =>
                                setCurrentPage(index + 1)
                            }
                        >

                            {index + 1}

                        </button>
                     

                    )
                )

            }
            <button className="pagination_btn">< FaChevronRight/> </button>

        </div>

    );

};