
import { useState } from "react";


export default function TweetAction({ url, action, eventOfClick, colorFill }) {
    
    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
    setHovered(true);
    };
    const handleMouseLeave = () => {
    setHovered(false);
    };
    

    return (
        <div  className="" >
           
            <div className="action-content">

                <svg onClick={eventOfClick} className={`hoverIcon ${isHovered ? "hovered" : ""}`} width="14" height="50" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={url} fill={isHovered ? "darkblue" : colorFill} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} />
                </svg>
             
                <span className={`hoverText ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}> {action}</span>

            </div>
        </div>

    )
};












// import { useState } from "react";
// 
// export default function MyComponent() {
//   const [isHovered, setHovered] = useState(false);
// 
//   const handleMouseEnter = () => {
// setHovered(true);
//   };
// 
//   const handleMouseLeave = () => {
// setHovered(false);
//   };
// 
//   return (
// <div>
{/* <svg */ }
// className={`hoverIcon ${isHovered ? "hovered" : ""}`}
// width="14"
// height="50"
// viewBox="0 0 22 20"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
//   >
{/* <path d={url} fill={colorFill} /> */ }
{/* </svg> */ }
{/*  */ }
{/* <span */ }
// className={`hoverText ${isHovered ? "hovered" : ""}`}
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
//   >
{/* Texte avec effet :hover */ }
{/* </span> */ }
{/* </div> */ }
//   );
// }
//
// 