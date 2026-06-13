//CSS//
import "./BlogSidebar.css";

//React Icons//
import { IoSearch } from "react-icons/io5";
//DB//
import {
    blogSideBarCard
} from "@/db/blogSidebarCard.js";
//BlogSidebarCard//
import { BlogSidebarCard } from "@components/BlogSidebar/BlogSidebarCard.jsx";

export const BlogSidebar = () => {
    return (
        <section className="blog_sidebar">
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
                       <span className="blog_sidebar_item_name">Vegetables</span> <span className="blog_sidebar_item_count">(12)</span>
                    </li>
                    
                    <li className="blog_sidebar_item">
                       <span className="blog_sidebar_item_name"> Fruits</span> <span className="blog_sidebar_item_count"> (22)</span>
                    </li>
                     <li className="blog_sidebar_item">
                       <span className="blog_sidebar_item_name"> Juice</span> <span className="blog_sidebar_item_count"> (37)</span>
                    </li>
            
                     <li className="blog_sidebar_item">
                       <span className="blog_sidebar_item_name">  Dries</span> <span className="blog_sidebar_item_count"> (42)</span>
                    </li>
                                      
                </ul>
            </div>

            {/* Recent Blog */}
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Recent Blog
                </h3>
                {blogSideBarCard.map((item) =>
                    <BlogSidebarCard
                        key={item.id}
                        date={item.date}
                        image={item.image}
                        author={item.author}
                        comments={item.comments}
                        title={item.title}
                    />
                )}
            </div>

            {/* Tag Cloud */}
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Tag Cloud
                </h3>
                <div className="blog_tags">
                    <span className="blog_tag">
                        fruits
                    </span>
                    <span className="blog_tag">
                        tomatoe
                    </span>
                    <span className="blog_tag">
                        mango
                    </span>
                    <span className="blog_tag">
                        apple
                    </span>
                    <span className="blog_tag">
                        carrots
                    </span>
                    <span className="blog_tag">
                        orange
                    </span>
                     <span className="blog_tag">
                        pepper
                    </span>
                     <span className="blog_tag">
                        eggplant
                    </span>
                </div>
            </div>
            <div className="blog_sidebar_box">
                <h3 className="blog_sidebar_title">
                    Paragraph
                </h3>
                <p className="blog_sidebar_paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                </p>

            </div>


        </section>
    );
};