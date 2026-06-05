import { statistics } from "@/db/statistics";
import { CounterItem } from "@/components";

import bgImage from "@/assets/images/bg_3.jpg";

import "./AboutCounterSection.css";

export const AboutCounterSection = () => {
    return (
        <section
            className="about_counter"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >
            <div className="container about_counter_wrapper">

                {statistics.map((item) => (
                    <CounterItem
                        key={item.id}
                        count={item.count}
                        title={item.title}
                    />
                ))}

            </div>
        </section>
    );
};