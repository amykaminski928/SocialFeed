// Post.js
import React, { useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import CreatePost from "../CreatePost/CreatePost";
import './Post.css';

const Post = () => {
    const [posts, setPosts] = useState([]);
    
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    return ( 
        <div className="post-section">
            <div className="form-container border-box">                          
                <CreatePost onAddPost={addPost} />
            </div>
            <div className="display-container border-box">
                <div>Your daily notices</div>
                <DisplayPosts posts={posts} />
            </div>
        </div>
    );
}

export default Post;

