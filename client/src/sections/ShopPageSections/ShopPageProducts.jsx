//DB//
import {shopProducts} from "@/db/shopProducts.js";
//Card componnets//
import { ProductCard } from "@/components";
//CSS//
import "@/sections/ShopPageSections/ShopPageProducts.css"

export const ShopPageProducts =()=>{
    return(
        <div className=" container shoppage_grid"> 
            {shopProducts.map((item)=>(
                 <ProductCard
                 key={item.id}
                 title={item.title}
                 image ={item.image}
                 price={item.price}
                 oldPrice={item.oldPrice}
                 discount={item.discount}
                                 
                 />

            )
            )}

        </div>
    )
}