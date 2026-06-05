import "@/sections/HomePageSections/HomePageTestimonials.css";
import { testimonials } from "@/db/testimonials.js";
import { TestimonialCard } from "@/components";
import { useTestimonialSlider } from "@/hooks";


export const HomePageTestimonials = () => {
    const { current, setCurrent } = useTestimonialSlider(testimonials.length);
    const visibleTestimonials =
        testimonials.slice(current, current+3);

    return (
        <section className="testimonials container">
            <div className="testimonials_header">
                <h3 className="testimonials_subtitle">
                    Testimony
                </h3>
                <h1 className="testimonials_title">
                    Our satisfied customer says
                </h1>
                <p className="testimonials_text">
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                </p>
            </div>
            <div className="testimonials_slider">
                {visibleTestimonials.map((item) => ( 
                    <TestimonialCard
                    key={item.id}
                    image={item.image}
                    comment={item.comment}
                    name={item.name}
                    job={item.job}
                />))}
            </div>
            <div className="testimonials_dots">
                {testimonials.map((item, i) => (
                    <span
                        key={item.id}
                        className={
                            current === i
                                ? "dot active_dot"
                                : "dot"
                        }
                        onClick={() => setCurrent(i)}
                    ></span>

                ))}

            </div>

        </section>
    );

}