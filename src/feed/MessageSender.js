import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { green, orange, red } from "@material-ui/core/colors";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";

export default function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`what's on your mind`}
            className="messageSender__input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image Url(optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
