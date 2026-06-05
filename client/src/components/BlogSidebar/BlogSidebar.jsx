//CSS//
import "./BlogSidebar.css";

//React Icons//
import { IoSearch } from "react-icons/io5";

export const BlogSidebar = () => {
    return (
        <aside className="blog_sidebar">
            {/* Search */}
            <div className="blog_sidebar_box">
                <div className="blog_sidebar_search">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="blog_sidebar_input"
                    />
                    <IoSearch className="blog_sidebar_search_icon" />
                </div>
            </div>

            {/* Categories */}
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Categories
                </h3>
                <ul className="blog_sidebar_list">
                    <li className="blog_sidebar_item">
                        Vegetables (12)
                    </li>
                    <li className="blog_sidebar_item">
                        Fruits (22)
                    </li>
                    <li className="blog_sidebar_item">
                        Juice (37)
                    </li>
                    <li className="blog_sidebar_item">
                        Dries (42)
                    </li>
                </ul>
            </div>

            {/* Recent Blog */}
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Recent Blog
                </h3>
                <div className="blog_recent_item">
                    <p className="blog_recent_title">
                        Even the all-powerful Pointing has no control
                    </p>
                    <span className="blog_recent_date">
                        July 20, 2019
                    </span>
                </div>

                <div className="blog_recent_item">
                    <p className="blog_recent_title">
                        Far far away behind the word mountains
                    </p>
                    <span className="blog_recent_date">
                        July 18, 2019
                    </span>
                </div>

                <div className="blog_recent_item">
                    <p className="blog_recent_title">
                        Separated they live in Bookmarksgrove
                    </p>
                    <span className="blog_recent_date">
                        July 15, 2019
                    </span>
                </div>
            </div>

            {/* Tag Cloud */}
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Tag Cloud
                </h3>
                <div className="blog_tags">
                    <span className="blog_tag">
                        FRUITS
                    </span>
                    <span className="blog_tag">
                        VEGETABLES
                    </span>
                    <span className="blog_tag">
                        TOMATO
                    </span>
                    <span className="blog_tag">
                        APPLE
                    </span>
                    <span className="blog_tag">
                        FOOD
                    </span>
                    <span className="blog_tag">
                        JUICE
                    </span>
                </div>
            </div>
        </aside>
    );
};