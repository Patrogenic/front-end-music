import { useState } from "react";
import CurrentlyListeningHeader from "./CurrentlyListeningHeader";
import FriendTile from "./FriendTile";
import NavFooter from "./NavFooter";


const Home = ({ user }) => {
  const [ showSongDetails, setShowSongDetails ] = useState(false);

  const style = {
    background: "#2C2B2B",
    height: "100%",
  }



  return(
    <div style={style} >

      <CurrentlyListeningHeader />
      <FriendTile user={user} showSongDetails={showSongDetails} setShowSongDetails={setShowSongDetails} />
      <NavFooter />
    </div>
  )
}

export default Home;