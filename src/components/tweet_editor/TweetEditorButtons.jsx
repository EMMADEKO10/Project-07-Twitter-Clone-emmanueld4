
function handleClick() {
  //  logique de gestion de clic ici
  alert("Vous avez cliqué sur le bouton !");

  return(

<div>
     <button id="monBouton" >
       Cliquez ici
     </button>
   </div>
   
 );
}




export default function TweetEditorButtons() {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions />
            <Button />
        </div>
    );
}
function TweetEditorActions() {
    return (

        <div className="tweet-editor-actions">

            <img  src="src\images\Media.svg" alt="" />
            <img src="src\images\Gif.svg" alt="" />
            <img src="src\images\Poll.svg" alt="" />
            <img src="src\images\Group.svg" alt="" />
            <img src="src\images\Schedule (1).svg" alt="" />


        </div>
    );
}
function Button() {
    return (
        <button id = "monBouton" className="button" onClick={handleClick}>Tweet</button> 
        
    );
}
