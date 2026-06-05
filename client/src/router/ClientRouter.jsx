import { Route, Routes } from "react-router-dom";
import { HomePage,ShopPage,WishlistPage,SingleProductPage,CartCard,AboutPage,BlogPage } from "@/pages";

const ClientRouter  = () => {
    return (
    
            <Routes>

                <Route path="/" element={<HomePage/>} />
                <Route path="/shop" element={<ShopPage/>} />
                <Route path= "/shop/wishlist" element={<WishlistPage/>}/>
                <Route path= "/shop/product-single" element={<SingleProductPage/>}/>
                <Route path= "/Cart" element={<CartCard/>}/>
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/blog" element={<BlogPage/>} />
                <Route path="/contact" element={<div>ContactPage</div>} />
 

            </Routes>


       
    )
};
export default ClientRouter;