import React, { useEffect, useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./style.css";
import "./styles/app.css";

export default function App() {
const [posts, setPosts] = useState([
  {id: 1, title: "Javascript", body: "Description"},
  {id: 2, title: "Javascript 2" , body: "Description"},
  {id: 3, title: "Javascript 3", body: "Description"},])
  return (
    <div className="App">
  {posts.map(post =>
    <PostItem post={post} key={post.id}/>
  ) }
  </div>
  );
}
export default App;