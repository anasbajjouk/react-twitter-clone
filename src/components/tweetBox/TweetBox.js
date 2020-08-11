import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Anas Bajjouk",
      username: "@anasbajjouk",
      verified: true,
      timestamp: Date.now(),
      text: tweetMessage,
      gif: tweetImage,
      avatar:
        "https://bigheads.io/svg?accessory=shades&body=breasts&circleColor=blue&clothing=shirt&clothingColor=black&eyebrows=leftLowered&eyes=content&facialHair=mediumBeard&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=blue&lashes=true&lipColor=purple&mask=true&mouth=open&skinTone=red",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar
            className="tweetBox__input-avatar"
            alt="Big Head"
            src="https://bigheads.io/svg?accessory=shades&body=breasts&circleColor=blue&clothing=shirt&clothingColor=black&eyebrows=leftLowered&eyes=content&facialHair=mediumBeard&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=blue&lashes=true&lipColor=purple&mask=true&mouth=open&skinTone=red"
          />
          <input
            type="text"
            placeholder="What's in your mind, bud??"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
