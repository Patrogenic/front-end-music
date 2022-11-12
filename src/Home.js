import { useState } from "react";
import CurrentlyListeningHeader from "./CurrentlyListeningHeader";
import FriendTile from "./FriendTile";
import NavFooter from "./NavFooter";
import SongDetails from "./SongDetails";


const Home = ({ user }) => {
  const [ showSongDetails, setShowSongDetails ] = useState(false);

  const style = {
    background: "#2C2B2B",
    height: "100%",
  }



  return(
    <div style={style} >

      

      {!showSongDetails && <div>
        <CurrentlyListeningHeader />
        <FriendTile user={user} text="Myself" showSongDetails={showSongDetails} setShowSongDetails={setShowSongDetails} />
        <FriendTile user={user} text="Noah" showSongDetails={showSongDetails} setShowSongDetails={setShowSongDetails} />
        <FriendTile user={user} text="Jackson" showSongDetails={showSongDetails} setShowSongDetails={setShowSongDetails} />
      </div>}
      {showSongDetails && <SongDetails user={user} />}
      <NavFooter />
    </div>
  )
}

export default Home;