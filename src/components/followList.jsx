export default function FollowList(){
    return(
        <div className="flex h-90 flex-col items-center justify-center self-stretch pt-0" >
            <div className="flex flex-grow flex-col items-center justify-center self-stretch  bg-zinc-800 p-1 rounded-2xl " >
                <div className="font-s-f_pro_display flex items-center self-stretch bg-zinc-800 py-1 pl-2 pr-52 text-center text-xl font-bold  text-neutral-300" >
                    <div className="flex flex-grow justify-center self-stretch">
                        Who to follow
                    </div>
                </div>

                <div className="font-s-f_pro_text flex h-20 items-center justify-center gap-x-3 self-stretch bg-zinc-800 py-1 px-2" >
                    <img
                        className="h-12 w-12 rounded-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/4f06a16ac1cdbe6b530999d2dc7ebcc3d95d6cf1.webp"
                    />
                    <div className="flex flex-grow items-center justify-center gap-x-4 self-stretch" >
                        <div className="flex flex-grow items-center justify-center self-stretch py-1.5 text-left text-[15px] " >
                            <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
                                <div className="flex flex-grow items-center justify-center font-normal text-neutral-300" >
                                    <div className=" text-center">
                                        The New York Times
                                    </div>
                                    
                                    <div className="h-5 w-5">
                                        <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7501 10.4167C18.7501 9.1 18.0209 7.95833 16.9601 7.41667C17.0884 7.05417 17.1584 6.6625 17.1584 6.25C17.1584 4.40833 15.7334 2.91833 13.9768 2.91833C13.5851 2.91833 13.2101 2.98833 12.8634 3.12667C12.3484 2.0125 11.2584 1.25 10.0001 1.25C8.74177 1.25 7.65343 2.01417 7.13593 3.125C6.7901 2.9875 6.41427 2.91667 6.0226 2.91667C4.26427 2.91667 2.84093 4.40833 2.84093 6.25C2.84093 6.66167 2.9101 7.05333 3.03843 7.41667C1.97843 7.95833 1.24927 9.09833 1.24927 10.4167C1.24927 11.6625 1.90093 12.7483 2.8676 13.3217C2.85093 13.4633 2.84093 13.605 2.84093 13.75C2.84093 15.5917 4.26427 17.0833 6.0226 17.0833C6.41427 17.0833 6.78927 17.0117 7.1351 16.875C7.65177 17.9867 8.7401 18.75 9.99927 18.75C11.2593 18.75 12.3476 17.9867 12.8634 16.875C13.2093 17.0108 13.5843 17.0817 13.9768 17.0817C15.7351 17.0817 17.1584 15.59 17.1584 13.7483C17.1584 13.6033 17.1484 13.4617 17.1309 13.3208C18.0959 12.7483 18.7501 11.6625 18.7501 10.4175V10.4167ZM13.2368 7.63833L9.6251 13.055C9.50427 13.2358 9.30677 13.3333 9.10427 13.3333C8.9851 13.3333 8.86427 13.3 8.7576 13.2283L8.66177 13.15L6.64927 11.1375C6.4051 10.8933 6.4051 10.4975 6.64927 10.2542C6.89343 10.0108 7.28927 10.0092 7.5326 10.2542L9.0076 11.7267L12.1951 6.94333C12.3868 6.65583 12.7751 6.58 13.0618 6.77083C13.3501 6.9625 13.4284 7.35083 13.2368 7.6375V7.63833Z" fill="#D9D9D9" /></svg>
                                    </div>

                                </div>
                                <div className="self-stretch font-light text-gray-500">
                                    @nytimes
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center self-stretch pb-2 pt-2.5 text-center text-sm font-normal  text-zinc-900" >
                            <div className="flex flex-grow justify-center items-center self-stretch rounded-3xl bg-slate-100 py-2 px-4" >
                                Follow
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-s-f_pro_text flex h-20 items-center justify-center gap-x-3 self-stretch bg-zinc-800 py-1 px-2" >
                    <img
                        className="h-12 w-12 rounded-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/4a83e3afcc0254938a0f98dd14b210b1493f71c5.webp"
                    />
                    <div className="flex flex-grow items-center justify-center gap-x-32 self-stretch" >
                        <div className="flex w-14 items-center justify-center self-stretch py-1.5 text-left text-[15px] " >
                            <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
                                <div className="flex flex-grow items-center justify-between self-stretch font-normal text-neutral-300" >
                                    <div className="">CNN
                                    </div>
                                    <div className="h-5 w-5">
                                        <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7501 10.4167C18.7501 9.1 18.0209 7.95833 16.9601 7.41667C17.0884 7.05417 17.1584 6.6625 17.1584 6.25C17.1584 4.40833 15.7334 2.91833 13.9768 2.91833C13.5851 2.91833 13.2101 2.98833 12.8634 3.12667C12.3484 2.0125 11.2584 1.25 10.0001 1.25C8.74177 1.25 7.65343 2.01417 7.13593 3.125C6.7901 2.9875 6.41427 2.91667 6.0226 2.91667C4.26427 2.91667 2.84093 4.40833 2.84093 6.25C2.84093 6.66167 2.9101 7.05333 3.03843 7.41667C1.97843 7.95833 1.24927 9.09833 1.24927 10.4167C1.24927 11.6625 1.90093 12.7483 2.8676 13.3217C2.85093 13.4633 2.84093 13.605 2.84093 13.75C2.84093 15.5917 4.26427 17.0833 6.0226 17.0833C6.41427 17.0833 6.78927 17.0117 7.1351 16.875C7.65177 17.9867 8.7401 18.75 9.99927 18.75C11.2593 18.75 12.3476 17.9867 12.8634 16.875C13.2093 17.0108 13.5843 17.0817 13.9768 17.0817C15.7351 17.0817 17.1584 15.59 17.1584 13.7483C17.1584 13.6033 17.1484 13.4617 17.1309 13.3208C18.0959 12.7483 18.7501 11.6625 18.7501 10.4175V10.4167ZM13.2368 7.63833L9.6251 13.055C9.50427 13.2358 9.30677 13.3333 9.10427 13.3333C8.9851 13.3333 8.86427 13.3 8.7576 13.2283L8.66177 13.15L6.64927 11.1375C6.4051 10.8933 6.4051 10.4975 6.64927 10.2542C6.89343 10.0108 7.28927 10.0092 7.5326 10.2542L9.0076 11.7267L12.1951 6.94333C12.3868 6.65583 12.7751 6.58 13.0618 6.77083C13.3501 6.9625 13.4284 7.35083 13.2368 7.6375V7.63833Z" fill="#D9D9D9" /></svg>
                                    </div>
                                </div>
                                <div className="font-light text-gray-500">@CNN</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center self-stretch pb-2 pt-2.5 pl-2.5 text-center text-sm font-normal  text-zinc-900" >
                            <div className="flex flex-grow justify-center items-center self-stretch rounded-3xl bg-slate-100 py-2 px-4" >
                                Follow
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-s-f_pro_text flex h-20 items-center justify-center gap-x-3 self-stretch bg-zinc-800 py-1 px-2" >
                    <img
                        className="h-12 w-12 rounded-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/a37709049243261c9d3d1fa6dead9bc132ea171f.webp"
                    />
                    <div className="flex flex-grow items-center justify-center gap-x-28 self-stretch" >
                        <div className="flex w-20 items-center justify-center self-stretch py-1.5 text-left text-[15px] " >
                            <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
                                <div className="flex flex-grow items-center self-stretch font-normal text-neutral-300" >
                                    <div className="">Twitter</div>
                                    <div className="h-5 w-5">
                                        <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7501 10.4167C18.7501 9.1 18.0209 7.95833 16.9601 7.41667C17.0884 7.05417 17.1584 6.6625 17.1584 6.25C17.1584 4.40833 15.7334 2.91833 13.9768 2.91833C13.5851 2.91833 13.2101 2.98833 12.8634 3.12667C12.3484 2.0125 11.2584 1.25 10.0001 1.25C8.74177 1.25 7.65343 2.01417 7.13593 3.125C6.7901 2.9875 6.41427 2.91667 6.0226 2.91667C4.26427 2.91667 2.84093 4.40833 2.84093 6.25C2.84093 6.66167 2.9101 7.05333 3.03843 7.41667C1.97843 7.95833 1.24927 9.09833 1.24927 10.4167C1.24927 11.6625 1.90093 12.7483 2.8676 13.3217C2.85093 13.4633 2.84093 13.605 2.84093 13.75C2.84093 15.5917 4.26427 17.0833 6.0226 17.0833C6.41427 17.0833 6.78927 17.0117 7.1351 16.875C7.65177 17.9867 8.7401 18.75 9.99927 18.75C11.2593 18.75 12.3476 17.9867 12.8634 16.875C13.2093 17.0108 13.5843 17.0817 13.9768 17.0817C15.7351 17.0817 17.1584 15.59 17.1584 13.7483C17.1584 13.6033 17.1484 13.4617 17.1309 13.3208C18.0959 12.7483 18.7501 11.6625 18.7501 10.4175V10.4167ZM13.2368 7.63833L9.6251 13.055C9.50427 13.2358 9.30677 13.3333 9.10427 13.3333C8.9851 13.3333 8.86427 13.3 8.7576 13.2283L8.66177 13.15L6.64927 11.1375C6.4051 10.8933 6.4051 10.4975 6.64927 10.2542C6.89343 10.0108 7.28927 10.0092 7.5326 10.2542L9.0076 11.7267L12.1951 6.94333C12.3868 6.65583 12.7751 6.58 13.0618 6.77083C13.3501 6.9625 13.4284 7.35083 13.2368 7.6375V7.63833Z" fill="#D9D9D9" /></svg>
                                    </div>
                                </div>
                                <div className="font-light text-gray-500">
                                    @Twitter
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center self-stretch pb-2 pt-2.5 text-center text-sm font-normal  text-zinc-900" >
                            <div className="flex flex-grow justify-center items-center self-stretch rounded-3xl bg-slate-100 py-2 px-4" >
                                Follow
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-s-f_pro_text flex items-center self-stretch bg-zinc-800 pr-60 text-center text-[15px] font-bold  text-sky-500" >
                    <div className="flex flex-grow justify-center self-stretch p-4">
                        Show more
                    </div>
                </div>
            </div>
        </div>

    )
}