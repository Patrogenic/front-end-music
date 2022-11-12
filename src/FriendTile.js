import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SongDetails from "./SongDetails";




const FriendTile = ({ user, text, showSongDetails, setShowSongDetails }) => {
  const viewSongDetails = () => {
    setShowSongDetails(true);
  }


  const style = {
    border: "1px lightgrey solid",
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
  }

  return (
    <div style={style}>
      
      <div onClick={viewSongDetails} >{text}</div>

      {/* There will be a tile that is just for me and we can navigate to it and see the song details */}
    </div>
  )
}

export default FriendTile;