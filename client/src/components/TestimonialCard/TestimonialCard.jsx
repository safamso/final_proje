//Icons//
import { FaQuoteLeft } from "react-icons/fa";

//CSS//
import "@components/TestimonialCard/TestimonialCard.css";

export const TestimonialCard = ({
    image,
    comment,
    name,
    job
}) => {

    return (
        <div className="testimonial_card">
            <div className="testimonial_card_image">
                <img
                    className="testimonial_image"
                    src={image}
                    alt={name}
                />
                <div className="testimonial_quote">
                    <FaQuoteLeft />
                </div>
            </div>
            <div className="testimonial_card_content">
                <div className="testimonial_card_line"></div>
                <p className="testimonial_feedback">
                    {comment}
                </p>
                <h3 className="testimonial_name">
                   {name}
                </h3>
                <span className="testimonial_job">
                    {job}
                </span>
            </div>
        </div>

    );
};