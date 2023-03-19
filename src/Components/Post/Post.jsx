import React from "react";
import AddPostForm from "../CreatePost/CreatePost";

// Parent component
//* Create template for each individual post to be displayed.  Include the user's name, body of the post, and the like/dislike buttons. *//
const PostCard = () => {
    return ( 
        <div border = 'warning' sytle = {{width: '80%'}}>
            <div>
                {/* <card-title style = {{}}>
                <AddPostForm className="newPost"></AddPostForm>
                </card-title> */}
                <div>
                <AddPostForm AddPostFormProperty = {AddPostForm}/>
                </div>
                {/* < aria-label="Dislike" size="large" icon= ThumbsdownIcon sx={{ml: 2}} />
                < aria-label="Like" size="large" icon= ThumbsupIcon sx={{ml: 2}} /> */}
                <button class="btn btn-primary">Like</button>
                <button class="btn btn-primary">Disike</button>                
            </div>           
        </div>  
     );
}
 
export default PostCard;
