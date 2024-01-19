
import TweetEditorForm from './TweetEditorForm';


function Avatar() {
    return (
        <div  className='avatar'>
          <img className='avatar' src="src\images\profile-photo.png" alt="profil" />     
        </div>
    );
}

export default function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}



























































































