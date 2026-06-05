import product1 from "@/assets/images/product_1.jpg";
//react icons//
import { IoStarOutline } from "react-icons/io5";
//CSS//
import "@/sections/SingleProductPageSection/SingleProductPageSection.css";
import { useState } from "react";

export const SingleProductPageSection = () => {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return (
        <section className="single_product container">
            <div className="single_product_img">
                <img className="single_product_image" src={product1} alt="" />
            </div>
            <div className="single_product_info" >
                <h1 className="single_product_title">Bell Pepper</h1>
                <div className="single_product_rating">
                    <div className="single_product_rating_point">5.0</div>
                    <div className="single_product_rating_star">
                        <IoStarOutline className="single_product_rating_star_icons" />
                        <IoStarOutline className="single_product_rating_star_icons" />
                        <IoStarOutline className="single_product_rating_star_icons" />
                        <IoStarOutline className="single_product_rating_star_icons" />
                        <IoStarOutline className="single_product_rating_star_icons" />
                    </div>
                    <div className="single_product_sold_count">100 <h4 className="single_product_sold">Rating</h4></div>
                    <div className="single_product_sold_count">500 <h4 className="single_product_sold">Sold</h4></div>

                </div>
                <p className="single_product_price" >120.00$</p>
                <p className="single_product_about">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
                </p>
                <div className="single_product_size">
                    <select className="single_product_select">
                        <option value="small">
                            SMALL
                        </option>
                        <option value="medium">
                            MEDIUM
                        </option>
                        <option value="large">
                            LARGE
                        </option>
                        <option value="extra-large">
                            EXTRA LARGE
                        </option>
                    </select>
                </div>
                <div className="single_product_count">
                    <button  type="button" className="single_product_increase" onClick={decreaseCount}>-</button>
                    <div className="single_product_number">{count}</div>
                    <button type="button" onClick={increaseCount} className="single_product_decrease">+</button>
                </div>
                <h2 className="single_product_available">600 kg available</h2>
                <button className="single_product_cart">Add To Cart</button>



            </div>



        </section>
    )
}