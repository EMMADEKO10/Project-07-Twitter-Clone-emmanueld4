export default function TrendingList(){
    return(
        <div className="flex flex-grow flex-col items-center p-1 justify-center self-stretch   bg-zinc-800 rounded-2xl" >
            <div className="font-s-f_pro_display flex h-12 items-center justify-between gap-x-1.5 self-stretch bg-zinc-800 text-center text-[14px] font-bold  text-neutral-300" >
                <div className="flex flex-grow items-center self-stretch py-1 pl-2 pr-30" >
                    <div className="flex flex-grow self-stretch">
                        Trends for you
                    </div>
                </div>
                <div className="h-5 w-16">
                    <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="20" fill="#202327" /><path d="M24.0001 6.84167C22.2585 6.84167 20.8418 8.25834 20.8418 10C20.8418 11.7417 22.2585 13.1583 24.0001 13.1583C25.7418 13.1583 27.1585 11.7417 27.1585 10C27.1585 8.25834 25.7418 6.84167 24.0001 6.84167ZM24.0001 11.9083C22.9485 11.9083 22.0918 11.0533 22.0918 10C22.0918 8.94668 22.9501 8.09167 24.0001 8.09167C25.0501 8.09167 25.9085 8.94668 25.9085 10C25.9085 11.0533 25.0518 11.9083 24.0001 11.9083Z" fill="#EFF3F4" /><path d="M24.3 18.6459H23.6984C22.7125 18.6459 21.9034 17.9059 21.8134 16.9259L21.8017 16.8034C21.7809 16.5642 21.6292 16.3592 21.4084 16.2667C21.17 16.1667 20.9234 16.2125 20.7434 16.3625L20.6467 16.4434C19.9234 17.0475 18.7692 16.9959 18.0967 16.3267L17.6717 15.9017C16.975 15.2017 16.925 14.1067 17.555 13.3517L17.6367 13.2534C17.7917 13.0684 17.8284 12.8175 17.7384 12.5975C17.6467 12.3709 17.44 12.2192 17.2 12.1975L17.075 12.1859C16.0917 12.0967 15.3525 11.2859 15.3525 10.3009V9.69919C15.3525 8.71335 16.0925 7.90419 17.0725 7.81419L17.2025 7.80252C17.44 7.78169 17.6442 7.63002 17.7375 7.40835C17.8292 7.18335 17.7917 6.93085 17.6375 6.74585L17.5592 6.64919C16.9284 5.89252 16.9775 4.79669 17.6734 4.09919L18.1 3.67252C18.77 3.00252 19.9234 2.95169 20.65 3.55585L20.7467 3.63752C20.9284 3.79085 21.1867 3.82919 21.405 3.73919C21.63 3.64585 21.7817 3.44085 21.8025 3.20335L21.8142 3.07585C21.9034 2.09252 22.7142 1.35419 23.6992 1.35419H24.3009C25.2867 1.35419 26.0959 2.09419 26.1859 3.07419L26.1975 3.20419C26.2184 3.44169 26.3692 3.64585 26.5909 3.73752C26.8217 3.83502 27.0742 3.78919 27.2525 3.64002L27.3525 3.55502C28.075 2.95252 29.2309 3.00335 29.9025 3.67169L30.3275 4.09835C31.0242 4.79669 31.0742 5.89252 30.4442 6.64835L30.3609 6.74669C30.2042 6.93002 30.1659 7.18169 30.2584 7.40335C30.3517 7.62835 30.5584 7.77835 30.7967 7.80169L30.9234 7.81335C31.9067 7.90252 32.6459 8.71335 32.6459 9.69835V10.3009C32.6459 11.2867 31.9059 12.0959 30.9259 12.1859L30.7967 12.1975C30.56 12.2175 30.355 12.3684 30.2634 12.5892C30.1692 12.8159 30.2075 13.0675 30.3609 13.2517L30.4442 13.3517C31.0742 14.1059 31.0242 15.2017 30.3275 15.9017L29.9025 16.3267C29.23 16.9967 28.0775 17.0467 27.3525 16.4434L27.2567 16.3634C27.0759 16.2109 26.815 16.1717 26.5984 16.2617C26.3709 16.3567 26.2192 16.5617 26.1984 16.8L26.1867 16.925C26.0975 17.9025 25.2867 18.6417 24.3017 18.6417L24.3 18.6459ZM21.1559 14.9625C21.4059 14.9625 21.65 15.0125 21.8809 15.1084C22.5392 15.3817 22.9842 15.9867 23.0475 16.6884L23.0592 16.8109C23.09 17.1442 23.365 17.3942 23.7009 17.3942H24.3025C24.6359 17.3942 24.9109 17.1442 24.9425 16.8109L24.9542 16.6875C25.0175 15.9859 25.4625 15.3817 26.1142 15.1109C26.775 14.8359 27.5275 14.9592 28.0584 15.4025L28.1525 15.4809C28.3009 15.6042 28.4575 15.6309 28.5634 15.6309C28.735 15.6309 28.8967 15.5642 29.0184 15.4417L29.4434 15.0167C29.68 14.78 29.6975 14.4084 29.4834 14.1517L29.4 14.0517C28.9484 13.51 28.8359 12.7684 29.1067 12.1159C29.3784 11.4575 29.9834 11.0159 30.685 10.9517L30.8142 10.94C31.145 10.9092 31.3975 10.6342 31.3975 10.2984V9.69669C31.3975 9.36335 31.145 9.08835 30.8125 9.05669L30.6859 9.04502C29.9809 8.98002 29.3775 8.53669 29.1067 7.88419C28.835 7.22752 28.9484 6.48585 29.4009 5.94502L29.4842 5.84669C29.6984 5.58835 29.6809 5.21669 29.4442 4.98002L29.0192 4.55502C28.8975 4.43252 28.7359 4.36585 28.5642 4.36585C28.4584 4.36585 28.3017 4.39252 28.1542 4.51585L28.0542 4.59919C27.5259 5.03919 26.7625 5.15752 26.1192 4.89419C25.4625 4.62169 25.0192 4.01752 24.955 3.31419L24.9434 3.18502C24.9142 2.85419 24.6392 2.60169 24.3042 2.60169H23.7017C23.3684 2.60169 23.0934 2.85419 23.0617 3.18669L23.05 3.31335C22.9867 4.01585 22.5434 4.62002 21.8917 4.89085C21.2359 5.16252 20.4809 5.04335 19.95 4.59919L19.8517 4.51919C19.7017 4.39419 19.545 4.36919 19.4392 4.36919C19.2675 4.36919 19.1059 4.43585 18.9842 4.55752L18.5575 4.98252C18.3225 5.21919 18.305 5.59085 18.5192 5.84752L18.6025 5.94585C19.0525 6.49002 19.1667 7.23252 18.8959 7.88335C18.6234 8.54002 18.0192 8.98335 17.3167 9.04752L17.1867 9.05919C16.8559 9.09002 16.6034 9.36502 16.6034 9.70085V10.3025C16.6034 10.6359 16.8559 10.9109 17.1884 10.9425L17.3134 10.9542C18.02 11.0192 18.6242 11.4642 18.8942 12.1175C19.165 12.7725 19.0525 13.5134 18.6 14.055L18.52 14.1509C18.3034 14.4092 18.3217 14.7809 18.5584 15.0175L18.9834 15.4425C19.105 15.565 19.2667 15.6317 19.4384 15.6317C19.5442 15.6317 19.7009 15.6067 19.8484 15.4817L19.945 15.4017C20.2834 15.1217 20.7142 14.965 21.1559 14.965V14.9625Z" fill="#EFF3F4" /></svg>
                </div>
            </div>

            <TrendsItem />
            <TrendsItem />
            <TrendsItem />
            <TrendsItem />

            <div className="font-s-f_pro_text flex items-center self-stretch bg-zinc-800 pr-60 text-center text-[15px] font-bold  text-sky-500" >
                <div className="flex flex-grow justify-center self-stretch p-2">
                    Show more
                </div>
            </div>
        </div>

    )
}

export function TrendsItem(){
    return(
        <div className="font-s-f_pro_text relative flex items-center pl-0 bg-zinc-800 pr-11" >
            <div className="relative flex flex-grow items-center py-1 pl-2 pr-44" >
                <div className="flex flex-grow flex-col items-start justify-center  w-32" >
                    <div className="text-left text-[13px] font-normal  text-gray-500" >
                        Trending in Turkey
                    </div>
                    <div className="text-left text-[15px] font-bold  text-neutral-300" >
                        #SQUID
                    </div>
                    <div className="text-left text-[13px] font-normal  text-gray-500" >
                        2,066 Tweets
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-3 h-5 w-11">
                <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="18" fill="#202327" /><path d="M11.75 10.5C12.5784 10.5 13.25 9.82843 13.25 9C13.25 8.17157 12.5784 7.5 11.75 7.5C10.9216 7.5 10.25 8.17157 10.25 9C10.25 9.82843 10.9216 10.5 11.75 10.5Z" fill="#6E767D" /><path d="M17 10.5C17.8284 10.5 18.5 9.82843 18.5 9C18.5 8.17157 17.8284 7.5 17 7.5C16.1716 7.5 15.5 8.17157 15.5 9C15.5 9.82843 16.1716 10.5 17 10.5Z" fill="#6E767D" /><path d="M22.25 10.5C23.0784 10.5 23.75 9.82843 23.75 9C23.75 8.17157 23.0784 7.5 22.25 7.5C21.4216 7.5 20.75 8.17157 20.75 9C20.75 9.82843 21.4216 10.5 22.25 10.5Z" fill="#6E767D" /></svg>
            </div>
        </div>


    )
}