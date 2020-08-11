import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SerchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1293204816429289472"} />
        <TwitterTimelineEmbed
          options={{ height: 400 }}
          screenName="anasbajjouk"
          sourcetype="profile"
        />
        <TwitterShareButton
          options={{ text: "#reactjs is awesome", via: "anasbajjouk" }}
          url={"https://www.facebook.com/anas.bajjouk"}
        />
      </div>
    </div>
  );
};

export default Widgets;
