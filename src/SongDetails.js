import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

const devAPI = "http://localhost:8080/api/";
const prodAPI = "http://34.218.208.196/api/";

const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  const email = localStorage.getItem('email');

  if (token) {
    return { headers: { 'x-access-token': token, 'email': email }};
  } else {
    return {};
  }
}

const SongDetails = ({ user }) => {
  const [ currSong, setCurrSong ] = useState("None");
  const [ currSongTime, setCurrSongTime ] = useState("");
  const [ currArtist, setCurrArtist ] = useState("");
  const [ currImage, setCurrImage ] = useState("");
  const [ currSongLength, setCurrSongLength ] = useState("");
  const intervalRef = useRef();
  const songProgress = Math.round(currSongTime / 1000)
  const songLeft = Math.round((currSongLength - currSongTime)/ 1000)

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      getCurrentlyPlayingTrack();
    }, 1000);

    // getCurrentlyPlayingTrack();


  }, []);



  const getCurrentlyPlayingTrack = async () => {
    const res = await axios.get(prodAPI + "current_track", getAuthHeader());

    if(res?.data?.data?.is_playing){
      setCurrSong(res.data.data.item.name)
      setCurrSongTime(res.data.data.progress_ms)
      let artists = res.data.data.item.album.artists.map(a => a.name).join(", ");
      let image = res.data.data.item.album.images[1].url;
      let songLength = res.data.data.item.duration_ms;
      setCurrArtist(artists);
      setCurrImage(image);
      setCurrSongLength(songLength);
    }else{
      setCurrSong("None")
    }
  }

  const ImgStyle = {
    height: "256px",
    width: "256px",
  }

  const WrapperStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
  }
  
  const BlueBoxStyle = {
    background: "#1A5299",
    paddingBottom: "50px",
  }

  const TimesStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 30px",
    boxSizing: "border-box",
  }

  const formatTime = (time) => {

    let res = `0:${formatSec(time)}`;

    if(time > 60){
      res = `${Math.floor(time / 60)}:${formatSec(time % 60)}`
    }

    return res;
  }

  const formatSec = (sec) => {

    let res = `${sec}`

    if(sec < 10){
      res = `0${sec}`;
    }

    return res;
  }


  const ArtistInfoStyle = {
    padding: "20px 0 10px 20px",
  }

  const CurrSongStyle = {
    fontWeight: "900",
  }

  const NoMusicStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
  }

  // need image, song length, and artist
  return (
    <div>

      {currSong !== "None" && <div style={BlueBoxStyle}>

        <div style={WrapperStyle}>
          <img style={ImgStyle} src={currImage} />
        </div>

        {/* {user && <div>Logged in as: {user}</div>}
        {!user && <div>Not logged in</div>}
        <div>Curr song: { currSong ? currSong : "None" }</div>
        {currSong !== "None" && <div>Song Progress: {songProgress}s</div>} */}
        <div style={ArtistInfoStyle}>
          <div style={CurrSongStyle}>{currSong}</div>
          <div>{currArtist}</div>
        </div>

        {currSongTime && <ProgressBar currTime={currSongTime} songLength={currSongLength} />}
        <div style={TimesStyle}>
          <div>{formatTime(songProgress)}</div>
          <div>-{formatTime(songLeft)}</div>

        </div>
      </div>}

      {currSong === "None" && <div style={NoMusicStyle}><div>User is not listening to music</div></div>}


    </div>
  )
}

export default SongDetails;