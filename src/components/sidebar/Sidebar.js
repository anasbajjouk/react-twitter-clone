import React from "react";
//COMPONENTS
import SidebarOption from "../sidebarOption/SidebarOption";

//STYLING
import "./Sidebar.css";

//ICONS
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div>
      <TwitterIcon />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button variant="outline" className="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  );
};

export default Sidebar;
