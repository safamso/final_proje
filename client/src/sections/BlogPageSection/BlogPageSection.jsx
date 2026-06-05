//Components//
import { BlogCard,BlogSidebar } from "@/components";
//Blogs DB//
import { blogs } from "@/db/blogs";
//CSS//
import "@/sections/BlogPageSection/BlogPageSection.css";
export const BlogPageSection = () => {
    return (
        <section className="container blog_section_grid">
            <div className="blog_section_grid_left">
                {blogs.map((item) => 
                    <BlogCard
                        key={item.id}
                        date={item.date}
                        image={item.image}
                        author={item.author}
                        comments={item.comments}
                        title={item.title}
                        blog={item.blog}
                    />
                

                )

                }

            </div>
            <div className="blog_section_grid_right">
                <BlogSidebar/>

            </div>

        </section>
    )
}
