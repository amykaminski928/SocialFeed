import React, {useState} from 'react';
import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/CreatePost/CreatePost';
import PostCard from './Components/Post/Post';


function App() {

  const [posts, setPosts] = useState([{name: "Amy Kaminski", post: "I am so excited to learn to code."}, {name: "Oliver Kaminski", post: "Me too nerding out is fun."}])
  // let posts = [{Username: "Amy Kaminski", post: "I am so excited to learn to code."}, {Username: "Oliver Kaminski", post: "Me too nerding out is fun."}]
  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

    return (   
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin:'1em'}}>Social
        <small className= 'text-muted'>FEED</small></h3>
        <div className= 'form-inline justify-content-center' >
          <div className='border-box'>
           <AddPostForm addPostProperty={addNewPost}/>    
          </div>
        </div>
        <div className='border-box'>
          <div>     
            <div className='post-content'>
              <DisplayPosts parentPosts = {PostCard(tempPosts)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
}

export default App;
