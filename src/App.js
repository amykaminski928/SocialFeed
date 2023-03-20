import React from 'react';
import './App.css';
// import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
// import AddPostForm from './Components/CreatePost/CreatePost';
import Post from './Components/Post/Post';


function App() {
  
    return (   
    <div className='container-fluid'>
      <div className='container'>
        <h3 style={{margin:'1em'}}>Social
        <small className= 'text-muted'>FEED</small></h3>
        <div className= 'form-inline justify-content-center' >
          <div className='border-box'>
           <AddPostForm />    
          </div>
        </div>
        <div className='border-box'>
          <div>Your daily notices</div>          
         
        </div>
      </div>
    </div>
    
    );
}

export default App;
