import TrendingList from "./trendingList";
import FollowList from "./followList";
import TwitterFooter from "../TimeLine/TwitterFooter";

export default function Trends(page) {

    const order = () => {
        if (page === "home") {
            return "trending";
        }
        return "follow";
    };

    return (
       
        <div className="flex-row px-2 " >
            <div className="flex flex-grow flex-col items-center justify-center gap-y-4 self-stretch" >
                <div className="font-s-f_pro_text flex h-11 items-center self-stretch rounded-3xl bg-zinc-800 pr-44 text-center text-[15px] font-normal  text-gray-500" >
                    <div className="flex flex-grow items-center justify-center self-stretch" >
                        <div className="h-11 w-11 rounded-full">
                            <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#202327" /><path d="M28.1475 27.3525L25.4025 24.6075C26.3963 23.43 27 21.9105 27 20.25C27 16.5225 23.9775 13.5 20.25 13.5C16.5225 13.5 13.5 16.5225 13.5 20.25C13.5 23.9775 16.5225 27 20.25 27C21.9113 27 23.43 26.397 24.606 25.4025L27.351 28.1475C27.4613 28.257 27.606 28.3125 27.7485 28.3125C27.891 28.3125 28.0373 28.2578 28.146 28.1475C28.3673 27.9278 28.3673 27.5722 28.1475 27.3525ZM14.625 20.25C14.625 17.1487 17.1488 14.625 20.25 14.625C23.3513 14.625 25.875 17.1487 25.875 20.25C25.875 23.3512 23.3513 25.875 20.25 25.875C17.1488 25.875 14.625 23.3512 14.625 20.25Z" fill="#6E767D" /></svg>
                        </div>
                        <div className="flex flex-grow justify-center self-stretch ">
                            Serach Twitter
                        </div>
                    </div>
                </div>
                {order === "follow" ? <FollowList /> : <TrendingList />}
                {order === "trending" ? <TrendingList /> : <FollowList />}
            
            <TwitterFooter />
   
            </div>
        </div>
    );
}

