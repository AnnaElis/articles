import React, { useEffect, useState } from 'react';
import PostItem from "./PostItem";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostList = ({posts, title, remove}) => {
  return (
      <div>
          <h1 style={{textAlgin: 'center'}}>
            {title}
          </h1>
  {posts.map((post, index) =>
    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
  ) }
      </div>
  )
}

export default PostList;