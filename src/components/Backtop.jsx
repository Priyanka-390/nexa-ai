import React, { useState } from "react";
import backtopicon from "../assets/images/up-arrow.webp"
const Backtop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center rounded-full items-center p-2 w-[55px]  h-[55px]  bg-ellips fixed right-[1.7%] bottom-[10px] z-10 transition-all ease-linear duration-300   hover:shadow-[1px_1px_1px_1px_#02CDCF] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img className="w-full " src={backtopicon} alt="backtoptop"/>
            </button>
        </div>
    );
};

export default Backtop;