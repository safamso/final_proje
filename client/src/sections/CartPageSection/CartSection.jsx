//DB//
import { cartProducts } from "@/db/cartProducts.js"
//Componnets//
import { WishlistCard,HorizontalScroll } from "@/components";
import {WishlistTitle} from "@/sections";


export const CartSection = () => {
    return (
        <section className="container">
             <WishlistTitle/>
            <div>
                {cartProducts.map((item) => (
                    <WishlistCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        totalPrice={item.totalPrice}
                        quantity={item.quantity}

                    />

                )

                )
                }


            </div>
            <HorizontalScroll/>



        </section>
    )
}