//CSS//////////////////////////////////////////////////////////////////////
import "@/sections/SingleProductPageSection/RelatedProducts.css";
//DB//
import { relatedProducts } from "@/db/relatedProducts.js";
//Product cart//
import { ProductCard } from "@/components";

export const RelatedProducts = () => {
    return (
        <section className="container related_product">
            <div className="related_product_about">
                <h2 className="related_product_about_title">Products</h2>
                <h1 className="related_product_about_main_title">Related Products</h1>
                <p className="related_product_about_info">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

            </div>
            <div className="related_product_grid">
                  {
                relatedProducts.map((item) => (<ProductCard
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
    )
}