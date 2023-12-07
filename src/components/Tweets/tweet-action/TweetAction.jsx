// import { React, useState } from "react"

export default function TweetAction({ logo, action, eventOfClick }) {

    return (

        <div onClick={eventOfClick} className="commentaireColor tweet-action">
               <img src={logo} alt=""  />
            {action}
        </div>

    )
};








