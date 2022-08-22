import { useRef } from "react";
export default () => {

    const arrowRef = useRef(null);
    // function get width of arrow element and set it to the left of the arrow 
    const setArrowPosition = () => {
        const arrow = arrowRef.current;
        const arrowWidth = arrow.offsetWidth;
        arrow.style.left = `calc(50% - ${arrowWidth / 2}px)`;
    }
    // call the function when the page is loaded
    window.addEventListener("load", setArrowPosition);
    return (
        <div className="cards" style={{poshtion:'a'}}>
            <div className="card">
                ................................................................................
            </div>
            <div className="arrow">
                <div className="arrow-right"></div>
                <div className="arrow-left"></div>
            </div>
        </div>
    )
}
