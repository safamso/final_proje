
import { useEffect, useState } from "react";
import { ProductCard } from "@/components";
import "@/sections/HomePageSections/HomePageProducts.css";


export const HomePageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
     const getProducts = async() => { 
        try{
            const response = await fetch( 
                "http://localhost:5000/api/products"
            );
            const data = await response.json();
            setProducts(data.products);
            }
            catch (error){
                console.log(error);

            }
            
        };
        getProducts();
    }, []);

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
                        key={item._id}
                        id={item._id}
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