import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
  const [ currSong, setCurrSong ] = useState("");
  const intervalRef = useRef();
  const [ currSongTime, setCurrSongTime ] = useState("");
  const songProgress = Math.round(currSongTime / 1000)

  useEffect(() => {
    // clearInterval(intervalRef.current);
    // intervalRef.current = setInterval(() => {
    //   getCurrentlyPlayingTrack();
    // }, 1000);


  }, []);

  const getCurrentlyPlayingTrack = async () => {
    const res = await axios.get(prodAPI + "current_track", getAuthHeader());

    if(res?.data?.data?.is_playing){
      setCurrSong(res.data.data.item.name)
      setCurrSongTime(res.data.data.progress_ms)
    }else{
      setCurrSong("None")
    }
  }


  return (
    <div>

      {user && <div>Logged in as: {user}</div>}
      {!user && <div>Not logged in</div>}
      <div>Curr song: { currSong ? currSong : "None" }</div>
      {currSong !== "None" && <div>Song Progress: {songProgress}s</div>}

    </div>
  )
}

export default SongDetails;