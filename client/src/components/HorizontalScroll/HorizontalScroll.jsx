//CSS//
import "@components/HorizontalScroll/HorizontalScroll.css";


export const HorizontalScroll =()=>{
    return(
        <section className="horizontal_scroll">
    <button className="horizontal_scroll_btn">{"<"}</button>

    <div className="horizontal_scroll_line"></div>

    <button className="horizontal_scroll_btn">{">"}</button>
</section>
    )
}