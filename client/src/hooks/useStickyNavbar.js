import { useEffect, useState } from "react";

export const useStickyNavbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 70) {
                setSticky(true);
            } else {
                setSticky(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return sticky;
};