import { useEffect,useState } from "react";
export const useTestimonialSlider= (length)=>{
    const [current , setCurrent] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
       setCurrent((prev)=>
        prev+1 >= length+1 ? 0 : prev
    
    
    );



        },4000);

return ()=> clearInterval(interval);


    },[length])
return{
    current,setCurrent
};




}