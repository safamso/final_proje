import { products } from "@/db/product";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import "@/sections/HomePageSections/HomePageProducts.css";

export const HomePageProducts = () => {

    return(

        <section className="container products_section">

            <div className="products_section_info">

                <h4 className="products_section_subtitle">
                    Featured Products
                </h4>

                <h1 className="products_section_title">
                    Our Products
                </h1>

                <h4 className="products_section_text">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </h4>

            </div>

            <div className="products_grid">

                {products.map((item)=>(

                    <ProductCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldprice={item.oldPrice}
                        discount={item.discount}
                    />

                ))}

            </div>

        </section>

    );

};