import { useCounter } from "@/hooks";

export const CounterItem = ({ count, title }) => {

    const animatedCount = useCounter(count);

    return (
        <div className="about_counter_item">

            <h2 className="about_counter_number">
                {animatedCount.toLocaleString()}
            </h2>

            <p className="about_counter_title">
                {title}
            </p>

        </div>
    );
};