import { BsStars } from "react-icons/bs";


function PageTitle() {

  return(
    <div className="page-title">
     Home
    </div>
  );
}

function TopTweets() {

  return (
    <div className="top-tweets"><BsStars className="top-tweets"/>
    </div>
  );
}
export default function Header() {
  return (

    <div className="header">
      <PageTitle />
      <TopTweets />
    </div>
  );
  
}