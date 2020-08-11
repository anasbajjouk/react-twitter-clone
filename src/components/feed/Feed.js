import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      
      <FlipMove>
        {posts.map((post, i) => {
          const {
            displayName,
            username,
            verified,
            timestamp,
            text,
            gif,
            avatar,
          } = post;

          return (
            <Post
              key={i + 16815}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              gif={gif}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
