import React, { useEffect, useState } from 'react';

const PostItem = (props) => {
  return(

  <div>
  
    <div className="post">
    <div className="post__content">
      <strong>{props.post.id}. {props.post.title}</strong>
      <div>
         {props.post.body}  
      </div>
      </div>
      <button>Удалить</button>
  </div>

    </div>
  )
}


export default PostItem;