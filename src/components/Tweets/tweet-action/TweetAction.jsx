
import { useState, useContext } from "react";

export default function TweetAction({ tweet, url, action, eventOfClick, colorFill, className }) {

    const urlretweet = "M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 8.88395 2.225 6.35495 2.225H6.35395Z"
    const urllikedRed = "M9.49895 19C13.3967 17.2256 16.2176 14.1965 17.7392 11.1294C19.2374 8.07497 19.4481 5.0332 18.1138 3.20814C16.9082 1.57318 15.3397 0.952155 13.7478 1.00285C12.156 1.05355 10.6109 1.80132 9.49895 2.85326C8.38698 1.80132 6.84194 1.05355 5.25007 1.00285C3.6582 0.952155 2.08975 1.57318 0.884141 3.20814C-0.450218 5.0332 -0.23953 8.07497 1.28211 11.1294C2.78033 14.1965 5.60122 17.2256 9.49895 19Z"

    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };
    // ------------------------------------------------------------------------------------------------------------------------
    return (

        <div className={className}>
            <div className="action-content">

                <svg onClick={eventOfClick} width="55" height="75" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={url} fill={isHovered ? (url === urlretweet || url === urllikedRed ? "red" : "rgba(29, 155, 240, 1)") : colorFill}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                </svg>
            </div>
            <span>
                {action}
            </span>

        </div>

    )
};


