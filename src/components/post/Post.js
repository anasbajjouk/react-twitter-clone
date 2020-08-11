import React from "react";

import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  gif,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          className="tweetBox__input-avatar"
          alt="Big Head"
          src="https://bigheads.io/svg?accessory=shades&body=breasts&circleColor=blue&clothing=shirt&clothingColor=black&eyebrows=leftLowered&eyes=content&facialHair=mediumBeard&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=blue&lashes=true&lipColor=purple&mask=true&mouth=open&skinTone=red"
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              LOL
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @someusername
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>What ever dummy text here!!</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/q6RoNkLlFNjaw/giphy.gif"
          alt="gif"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
