import React, {useState} from "react";
import DiplayPost from "../DisplayPosts/DisplayPosts";
import CreatePost from './CreatePost/CreatePost';
// Child 3 component (adds format for each post in feed)
//* Create template for each individual post to be displayed.  Include the user's name, body of the post, and the like/dislike buttons. *//
const PostCard = () => {
    const [posts, setPosts] = useState([]);
    
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    return ( 
        <div border = '1em' sytle = {{color: '#FFFF00' }}>
                <div>                          
                <CreatePost onAddPost={addPost} />
                <DiplayPost posts={posts}/>                                      
                {/* should not have form here ONLY the Display Post Function and possibly form data*/}
                </div>
        
                <button class="btn btn-primary">Like</button>
                <button class="btn btn-primary">Disike</button>                     
        </div>  
    );
}
    
    export default PostCard;
