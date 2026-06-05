//React Hooks//
import { useEffect, useState } from "react";


export const useCountdown =(targetDate)=>{
 const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
});
useEffect(()=>{

const interval = setInterval(()=>{
    const now = new Date();
const difference = new Date(targetDate)-now;
const days = Math.floor(
    difference/(1000*60*60*24));
const hours = Math.floor(
   (difference / (1000 * 60 * 60)) % 24
);
const minutes = Math.floor(
   (difference / 1000 / 60) % 60
);
const seconds = Math.floor(
   (difference / 1000) % 60
);
setTimeLeft({
   days,
   hours,
   minutes,
   seconds
});

},1000);

        return () => clearInterval(interval);
    }, [targetDate]);

return timeLeft;

}