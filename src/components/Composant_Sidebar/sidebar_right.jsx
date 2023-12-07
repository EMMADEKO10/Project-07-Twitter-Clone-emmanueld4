

export default function SidebarRight() {
    return (
        <div className="contentTrends">

            {/* <img className="icons-search" src="src/images/image Page 2/Icons/reseach.svg" /> */}
            <input type="text" className="form-control" placeholder="Serach Twitter" />
            <TrendCard />
            <Follow />

        </div>
    )
}


function TrendCard() {
    return (
        <div >
            {/* className="TrendCard" */}
            <TrendItems trends={"Think you"} />
        </div>
    )
}

function TrendItems({ trends }) {
    return (
        <div className="TrendItems">
            <div className="trends-seting trends">
                <h3>{trends}</h3>
                {trends && <img src="src/images/image Page 2/Icons/setting.svg" alt="" />}
            </div>

            {trends && <Trends trend={"Trending in turquey"} trendDetails={"SHDDS"} trendNumber={"2.6066 Tweets"} />}
            {trends && <Trends trend={"Trending in turquey"} trendDetails={"SHDDS"} trendNumber={"2.6066 Tweets"} />}
            {trends && <Trends trend={"Trending in turquey"} trendDetails={"SHDDS"} trendNumber={"2.6066 Tweets"} />}
            {trends && <Trends trend={"Trending in turquey"} trendDetails={"SHDDS"} trendNumber={"2.6066 Tweets"} />}

            <div className="showmore-btn">
                <div className="show-more"><div className="text-wrapper">Show more</div></div>
            </div>

        </div>
    )
}

function Trends({ trend, trendDetails, trendNumber }) {
    return (
        <div className="trends-seting trends">
            <div className="trend">
                <p className="subtitle">{trend}</p>
                <h4 className="tag">{trendDetails}</h4>
                <p className="count">{trendNumber}</p>
            </div>
            <img src="src\images\image Page 2\1Common-More-Button.svg" alt="" />
        </div>
    )
}

export function Follow() {
    return (
        <div className="TrendItems">
            {/* <TrendItems  trends={"Think you"}/> */}

            <ProfilFollow imageProfil="src/images/profile-photo.png" titleProfil="The New york city" titleProfilDetail="@new time" />
            <ProfilFollow imageProfil="src/images/profile-photo.png" titleProfil="The New york city" titleProfilDetail="@new time" />
            <ProfilFollow imageProfil="src/images/profile-photo.png" titleProfil="The New york city" titleProfilDetail="@new time" />

        </div>
    )
}

export function ProfilFollow({ imageProfil, titleProfil, titleProfilDetail}) {
    return (
        <div className="">

            <div className="tweet-content-follow">
                {/* <div className=" tweet-follow"> */}
                <div className="avatar-follow">
                    <img src={imageProfil} alt="" />
                </div>
                <div className="tweet-details">
                    <div className="tweet-title-follow"> <div>{titleProfil} </div> < img src="src\images\Verified.png" alt="" /></div>
                    <p>{titleProfilDetail}</p>
                </div>

                {/* </div> */}
                <button className="btnWhiteTweet">Follow</button>
            </div>
        </div>
    )
}