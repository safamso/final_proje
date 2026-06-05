//React Icons//
import { BsChatLeftTextFill } from "react-icons/bs";
//Link import//
import { Link } from "react-router-dom";
//CSS//
import "@/components/BlogCard/BlogCard.css";

export const BlogCard = ({
    image,
    date,
    author,
    comments,
    title,
    blog}) => {
    return (
        <section className="blog_card">
            <div className="blog_card_image_box">
                <img src={image} alt="" className="blog_card_image" />
            </div>
            <div className="blog_card_content">
                <div className="blog_card_meta">
                    <span className="blog_card_date">
                        {date}
                    </span>
                    <span className="blog_card_author">
                        {author}
                    </span>
                    <span className="blog_card_comment">
                        <BsChatLeftTextFill className="blog_card_comment_icon" />
                        {comments}
                    </span>

                </div>
                <h1 className="blog_card_title">
                    {title}
                </h1>
                <p className="blog_card_description">
                    {blog}
                </p>
                <Link to="/blog-single" className="blog_card_btn">
                    Read More
                </Link>

            </div>

        </section>
    );
};