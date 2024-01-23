
import TweetEditorForm from './TweetEditorForm';

function Avatar() {
    return (
        <div  className='avatar'>
          <img className='avatar' src="src\images\profile-photo.png" alt="profil" />     
        </div>
    );
}
export default function TweetEditor() {
  // const [isClickLogo, setIsClickLogo] = useState(false)
  // const [selectedFile, setSelectedFile] = useState(null);
  return (
    // <TweetEditorsContext.Provider value={{isClickLogo, setIsClickLogo, selectedFile, setSelectedFile}}>
    <div className="tweet-editor">
      <Avatar />
      <TweetEditorForm />
    </div>
    // </TweetEditorsContext.Provider>
  );
}



























































































