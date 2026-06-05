import { Footer, Newsletter, WishlistCard } from "@/components";
//DB//
import {wishlistProducts} from "@/db/wishlistProducts.js"
//Elements//
import{WishlistTitle} from "./WishlistTitle.jsx"


export const WishlistPageSections = ()=>{
    return( 
        <div>
        
        
       <div className="container wishlist_grid">
        <WishlistTitle/>


      {wishlistProducts.map((item)=>
       <WishlistCard
        key={item.id}
        image={item.image}
        title ={item.title}
        description= {item.description}
        price = {item.price}
        quantity = {item.quantity}
        totalPrice = {item.quantity*item.price}

        />
     



      )
      
      
      }
       
       </div>
      
          <Newsletter/>
        <Footer/>
       </div>
       
        
        
   
    )
}