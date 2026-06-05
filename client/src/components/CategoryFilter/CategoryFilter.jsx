//db//
import { categories } from "@/db/categories.js"
//HOOK//
import { useState } from "react";
//css//
import "@components/CategoryFilter/CategoryFilter.css"

export const CategoryFilter = () => {

    const [activeCategory, setActiveCategory] =
            useState("All");

            return (

            <section className="container category_filter">

                {categories.map((item) => (

                    <button
                        key={item.id}
                        className={
                            activeCategory === item.title
                                ? "category_btn active_category"
                                : "category_btn"
                        }

                        onClick={() =>
                            setActiveCategory(item.title)
                        }
                    >

                        {item.title}

                    </button>

                ))}

            </section>

            );

};