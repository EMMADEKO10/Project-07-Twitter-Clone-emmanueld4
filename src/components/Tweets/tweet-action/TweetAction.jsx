import { React, useState } from "react"



export default function TweetAction({ logo, action, eventOfClick }) {

    return (
        <div className="tweet-action">

            <div onClick={eventOfClick} className="tweet-action">
                <img src={logo} alt="" />
                {action}
            </div>
        </div>
    )
};