import React, { useState } from 'react';

const ReactLikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = (value) => {
    if (liked && value === 0) {
      setLikesCount(prevCount => prevCount - 1);
    } else if (!liked && value === 1) {
      setLikesCount(prevCount => prevCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div>
      {liked ?  <button onClick={() => handleLikeClick(0)}>Unlike</button> : null}
      <button onClick={() => handleLikeClick(1)}>
        Like
      </button>
      <span> Likes: {likesCount}</span>
    </div>
  );
};

export default ReactLikeButton;
