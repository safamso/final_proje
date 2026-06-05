//React icons//
import { IoMdClose } from "react-icons/io";
//Css//
import "@components/WishlistCard/WishlistCard.css";

export const WishlistCard = ({
    image,
    title,
    description,
    price,
    totalPrice,
    quantity

}) => {

    return (
        <section className="wishlist_card">
            <div className="wishlist_card_icon">
                <IoMdClose />
            </div>
            <div className="wishlist_card_img">
                <img
                    src={image}
                    alt="image"
                    className="wishlist_img"
                />
            </div>
            <div className="wishlist_card_title">
                <h2 className="wishlist_card_name">
                    {title}
                </h2>
                <span className="wishlist_card_description">
                    {description}
                </span>
            </div>
            <h3 className="wishlist_card_price">
                ${price.toFixed(2)}
            </h3>
            <div className="wishlist_card_input">
                <input
                    className="wishlist_input"
                    type="number"
                    value={quantity}
                    readOnly
                />
            </div>
            <h3 className="wishlist_card_total_price">
                ${totalPrice.toFixed(2)}
            </h3>
        </section>

    );

};