// import { BsStars } from "react-icons/bs";


function PageTitle() {

  return(
    <div className="page-title">
     Home
    </div>
  );
}

// function TopTweets() {

  // return (
    // <div className="top-tweets"><BsStars className="top-tweets"/>
  // </div>
    // <div></div>
  // );
// }


export default function Header() {
  return (

    <header className="header">
      <PageTitle />
      {/* <TopTweets /> */}
    </header>
  );
  
}