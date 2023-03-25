import React, { useEffect, useState, forwardRef, useRef } from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./style.css";
import "./styles/app.css";

export default function App() {
const [posts, setPosts] = useState([
  {id: 1, title: "Javascript", body: "Description"},
  {id: 2, title: "Javascript 2" , body: "Description"},
  {id: 3, title: "Javascript 3", body: "Description"},
])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
}
  return (
    <div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin:'15px 0'}}/>
    <div>
      <select>
        <option value="value1">По названию</option>
        <option value="value1">По описанию</option>
        </select>
    </div>
    {posts.length !==0
    ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
    : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>

    }
    
    
  </div>
  );
}
export default App;