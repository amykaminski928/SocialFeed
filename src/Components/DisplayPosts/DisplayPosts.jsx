
import React, { useState } from 'react';
import './DisplayPosts.css';


const DisplayPost = ({ posts }) => {
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);

  const handleLike = (index) => {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });

    if(disliked[index]) {
    setDisliked((prev) => {
      const newDisliked = [...prev];
      newDisliked[index] = false;
      return newDisliked;
    });
    }
  };

  const handleDislike = (index) => {
    setDisliked((prev) => {
      const newDisliked = [...prev];
      newDisliked[index] = !newDisliked[index];
      return newDisliked;
    });

    if (liked[index]) {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = false;
      return newLiked;
    });
    }
  };

  return (
    <div className="display-container">
      {posts.map((post, index) => (
        <div key={index} className="post-card">
          <div className="post-name">{post.userName}</div>
          <div className="post-content">{post.post}</div>
          <div className="post-actions">
            <button
              className={`like-button ${liked[index] ? 'liked' : ''}`}
              onClick={() => handleLike(index)}
            >
              Like
            </button>
            <button
              className={`dislike-button ${disliked[index] ? 'disliked' : ''}`}
              onClick={() => handleDislike(index)}
            >
              Dislike
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPost;


