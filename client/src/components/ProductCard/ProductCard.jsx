import {
    FaRegHeart,
    FaBars,
    FaShoppingCart
} from "react-icons/fa";

import "@/components/ProductCard/ProductCard.css";

export const ProductCard = ({
    image,
    title,
    price,
    oldprice,
    discount
}) => {

    return (

        <div className="product_card">

            {/* IMAGE */}
            <div className="product_card_image_wrapper">

                {discount > 0 && (
                    <span className="product_card_discount">
                        {discount}%
                    </span>
                )}

                <img
                    className="product_card_image"
                    src={image}
                    alt={title}
                />

            </div>

            {/* CONTENT */}
            <div className="product_card_content">

                <h1 className="product_card_title">
                    {title}
                </h1>

                {/* PRICES */}
                <div className="product_card_prices">
                    {oldprice > 0 && (
                        <h3 className="product_card_old_price">
                            ${oldprice.toFixed(2)}
                        </h3>
                    )}

                    <h4 className="product_card_price">
                        ${price.toFixed(2)}
                    </h4>

                </div>

                {/* ICONS */}
                <div className="product_card_icons">

                    <button className="product_card_icon">
                        <FaBars />
                    </button>
                    <button className="product_card_icon">
                        <FaShoppingCart />
                    </button>
                    <button className="product_card_icon">
                        <FaRegHeart />
                    </button>

                </div>
            </div>
        </div>
    );
};