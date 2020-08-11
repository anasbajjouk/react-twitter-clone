import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar
            className="tweetBox__input-avatar"
            alt="Big Head"
            src="https://bigheads.io/svg?accessory=shades&body=breasts&circleColor=blue&clothing=shirt&clothingColor=black&eyebrows=leftLowered&eyes=content&facialHair=mediumBeard&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=blue&lashes=true&lipColor=purple&mask=true&mouth=open&skinTone=red"
          />
          <input type="text" placeholder="What's in your mind, bud??" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
