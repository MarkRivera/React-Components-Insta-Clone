//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {
        data.map((element, index) => {
          return <Post post={element} key={index + 2} />
        })
      }
    </div>
  );
};

export default PostsPage;

