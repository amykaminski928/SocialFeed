import React from "react";

//* Create template for each individual post to be displayed.  Include the user's name, body of the post, and the like/dislike buttons. *//
const PostCard= (userName, post) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{userName}</h5>
                <p class="card-text">{post}</p>
                {/* < aria-label="Dislike" size="large" icon= ThumbsdownIcon sx={{ml: 2}} />
                < aria-label="Like" size="large" icon= ThumbsupIcon sx={{ml: 2}} /> */}
                <div class="btn btn-primary">Like</div>
                <div class="btn btn-primary">Disike</div>
            </div>
        </div>
);
}
export default PostCard; 