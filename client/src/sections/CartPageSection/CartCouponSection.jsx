//CSS//
import "./CartCouponSection.css";
export const CartCouponSection = () => {
    return (
        <section className="cart_summary container">
            <div className="cart_summary_main">
                <div className="cart_summary_box">
                    <h3 className="cart_summary_title">
                        Coupon Code
                    </h3>
                    <p className="cart_summary_text">
                        Enter your coupon code if you have one
                    </p>
                    <label htmlFor="coupon" className="coupon_label">
                        Coupon Code
                    </label>

                    <input
                        id="coupon"
                        type="text"
                        className="cart_summary_input"
                    />


                </div>
                <button className="cart_summary_btn">
                    Apply Coupon
                </button>

            </div>
            <div className="cart_summary_main">
                <div className="cart_summary_box">
                    <h3 className="cart_summary_title">
                        Estimate shipping and tax
                    </h3>
                    <p className="cart_summary_text">Enter your destination to get a shipping estimate</p>
                    <label htmlFor="country" className="coupon_label">
                        Country
                    </label>
                    <input
                        id="country"
                        type="text"
                        className="cart_summary_input"
                    />
                    <label htmlFor="state_province" className="coupon_label">
                        State/Province
                    </label>
                    <input
                        id="state_province"
                        type="text"
                        className="cart_summary_input"
                    />
                    <label htmlFor="zip_postal" className="coupon_label">
                        Zip/Postal Code
                    </label>
                    <input
                        id="zip_postal"
                        type="text"
                        className="cart_summary_input"
                    />

                </div>
                <button className="cart_summary_btn">
                    Estimate
                </button>

            </div>


            <div className="cart_summary_main">
                <div className="cart_summary_box">
                    <h3 className="cart_summary_title">
                        Cart Totals
                    </h3>

                    <div className="cart_total_row">
                        <span className="cart_summary_total_text">Subtotal</span>
                        <span className="cart_summary_total_text">$20.60</span>
                    </div>

                    <div className="cart_total_row">
                        <span className="cart_summary_total_text">Delivery</span>
                        <span className="cart_summary_total_text">$0.00</span>
                    </div>

                    <div className="cart_total_row">
                        <span className="cart_summary_total_text">Discount</span>
                        <span className="cart_summary_total_text">$3.00</span>
                    </div>
                    <div className="cart_summary_total_line"></div>

                    <div className="cart_total_row cart_total_final">
                        <span className="cart_summary_total_text">TOTAL</span>
                        <span className="cart_summary_total_sum">$17.60</span>
                    </div>

                </div>
                {/*///////Bu düymə link-lə əvəz ediləcək və checkout bölməsinə yönləndiriləcək//////////*/}
                <button className="cart_checkout_btn">
                    Proceed to Checkout
                </button>

            </div>
        </section>
    );
};