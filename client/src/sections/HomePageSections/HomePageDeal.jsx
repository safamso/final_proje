//Hooks//
import {useCountdown} from "@/hooks/"
//CSS//
import "../HomePageSections/HomePageDeal.css"

//Backgroud İmage//
import bg_3 from "@/assets/images/bg_3.jpg";


export const HomePageDeal = () => {
  
    const timeLeft = useCountdown("2026-12-31");

   




    return (
        <div className="homepage_deal" style={{ backgroundImage: `url(${bg_3})` }} >
            <div className="homepage_deal_overlay">

                <div className="homepage_deal_info">
                    <h2 className="homepage_best_price">Best Price For You</h2>
                    <h1 className="deal_of_the_day">Deal of the day</h1>
                    <p className="homepage_far_away">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <h3 className="spinach">Spinach</h3>
                    <h3 className="daily_priece">$10 now $5 only</h3>
                    <div className="times">

                        <div className="timer_item">
                            <h1 className="time_days">{timeLeft.days}</h1>
                            <span className="time_days_title">Days</span>
                        </div>
                        <div className="times_line"></div>
                        <div className="timer_item">
                            <h1 className="time_hours">{timeLeft.hours}</h1>
                            <span className="time_hours_title">Hours</span>
                        </div>
                        <div className="times_line"></div>
                        <div className="timer_item">
                            <h1 className="time_minutes">{timeLeft.minutes}</h1>
                            <span className="time_minutes_title">Minutes</span>
                        </div>
                        <div className="times_line"></div>
                        <div className="timer_item">
                            <h1 className="time_seconds">{timeLeft.seconds}</h1>
                            <span className="time_seconds_title">Seconds</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}