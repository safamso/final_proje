//css//
import "./WishlistTitle.css";

export const WishlistTitle = () => {
    return (
        <section className="wishlist_title">
            <div className="wishlist_title_product">
                Product List
            </div>
            <div className="wishlist_title_line"></div>

            <div className="wishlist_title_price">
                Price
            </div>

            <div className="wishlist_title_quantity">
                Quantity
            </div>

            <div className="wishlist_title_total">
                Total
            </div>
        </section>
    );
};