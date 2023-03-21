import React, { useEffect, useState } from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
  return (
      <div>
          <h1 style={{textAlgin: 'center'}}>
            {title}
          </h1>
  {posts.map(post =>
    <PostItem post={post} key={post.id}/>
  ) }
      </div>
  )
}

export default PostList;