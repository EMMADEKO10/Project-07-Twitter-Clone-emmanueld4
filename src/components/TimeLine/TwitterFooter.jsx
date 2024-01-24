export default function TwitterFooter() {

    const dtaFooter = [
        ["1", "Terms of Service", "Privacy Policy", "Cookie Policy"],
        ["2", "Imprint", "Ads info", "More ...", "© 2021 Twitter, Inc."]
    ];

    return (
        <div className="font-s-f_pro_text flex flex-col items-center justify-end self-stretch pt-1 text-center text-[13px] font-light  text-gray-500" >
            <div className="flex flex-grow items-center justify-center self-stretch px-4" >
                <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
                    {dtaFooter.map((dtaItem, index) => (
                        dtaItem && <ItemInFooter key={index} dtaItem={dtaItem} />))}
                </div>
            </div>
        </div>
    )
}
function ItemInFooter({ dtaItem }) {
    return (
        <>
            <div className="flex flex-grow items-center justify-center">
                <div className="flex items-center self-stretch py-0.5 pr-3" >
                    <a  className="flex flex-grow justify-center self-stretch">
                    
                        {dtaItem[1]}
                    </a>
                </div>
                <div className="flex items-center self-stretch py-0.5 pr-3">
                    <a  className="flex flex-grow justify-center self-stretch">
                       
                        {dtaItem[2]}
                    </a>
                </div>
                <div className="flex items-center self-stretch py-0.5 pr-3">
                    <a  className="flex flex-grow justify-center self-stretch">
                       
                        {dtaItem[3]}
                    </a>
                </div>
                <div className="flex items-center self-stretch py-0.5 pr-3" >
                    <a  className="flex flex-grow justify-center self-stretch">
                        {dtaItem[4]}
                    </a>
                </div>
            </div>
        </>
    )
}