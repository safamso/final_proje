//React Icons//
import { BsChatLeftTextFill } from "react-icons/bs";
//CSS//
import "@components/BlogSidebar/BlogSidebarCard.css"

export const BlogSidebarCard = ({
    image,
    date,
    author,
    comments,
    title,
    }) => {
    return (
        <section className="blogsidebar_card">
            <div className="blogsidebar_card_image_box">
                <img src={image} alt={title} className="blogsidebar_card_image" />
            </div>
            <div className="blogsidebar_card_content">
              
                <h1 className="blogsidebar_card_title">
                    {title}
                </h1>
                  <div className="blogsidebar_card_meta">
                    <span className="blogsidebar_card_date">
                        {date}
                    </span>
                    <span className="blogsidebar_card_author">
                        {author}
                    </span>
                    <span className="blogsidebar_card_comment">
                        <BsChatLeftTextFill className="blogsidebar_card_comment_icon" />
                        {comments}
                    </span>

                </div>

            </div>

        </section>
    );
};