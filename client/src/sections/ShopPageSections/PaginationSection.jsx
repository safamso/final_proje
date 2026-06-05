import { shopProducts } from "@/db/shopProducts";
import { Pagination } from "@/components";
import { usePagination } from "@/hooks";


export const PaginationSection = () => {
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems
    } = usePagination(
        shopProducts,
        8
    );

    return (

        <section>

            <div>

                {

                    currentItems.map((item) => (

                        <h1 key={item.id}>
                
                        </h1>

                    ))

                }

            </div>

            <Pagination

                currentPage={currentPage}

                setCurrentPage={setCurrentPage}

                totalPages={totalPages}

            />

        </section>

    );

};