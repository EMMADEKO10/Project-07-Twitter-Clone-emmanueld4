
import { useState } from "react";


export default function TweetAction({ url, url2, action, eventOfClick, colorFill }) {

    const urlretweet = "M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 8.88395 2.225 6.35495 2.225H6.35395Z"
    const urlrepleytweet = "M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z"

    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="" >

            <div className="action-content">
    
    <svg onClick={eventOfClick} className={`hoverIcon ${isHovered ? "hovered" : ""}`} width="55" height="75" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={url} fill={isHovered ? (url === urlretweet ? "red" : "rgba(29, 155, 240, 1)") : colorFill} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
</svg>


     <span className={`${isHovered ? (url === urlretweet ? "hoverLike" : "hoverOtherIcon") : ""}`}
     onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
                    {action}
                </span>

            </div>
        </div>

    )
};








































