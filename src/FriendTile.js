import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SongDetails from "./SongDetails";




const FriendTile = ({ user, showSongDetails, setShowSongDetails }) => {


  const viewSongDetails = () => {
    setShowSongDetails(true);
  }

  return (
    <div>
      
      {!showSongDetails && <div>
        <div onClick={viewSongDetails} >Myself</div>
        <div>Noah</div>
        <div>Jackson</div>
      </div>}

      {showSongDetails && <SongDetails user={user} />}

      {/* <div>Noah</div>
      <div>Jackson</div> */}
      {/* There will be a tile that is just for me and we can navigate to it and see the song details */}
    </div>
  )
}

export default FriendTile;