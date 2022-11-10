import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';

const search = window.location.search;
const params = new URLSearchParams(search);
const access_token = params.get('access_token');
const refresh_token = params.get('refresh_token');
const email = params.get('email');
const devAPI = "http://localhost:8080/api/";
const prodAPI = "http://34.218.208.196/api/";

if(access_token){
  localStorage.setItem("access_token", access_token);
}
if(refresh_token){
  localStorage.setItem("refresh_token", refresh_token);
}


const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  const email = localStorage.getItem('email');

  console.log(token);

  if (token) {
    return { headers: { 'x-access-token': token, 'email': email }};
  } else {
    return {};
  }
}

function App() {
  const [ user, setUser ] = useState("");
  const [ currSong, setCurrSong ] = useState("");
  const [ recentlyPlayed, setRecentlyPlayed ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const login = async () => {
    window.location.href = prodAPI + "login";
  }

  const getCurrentlyPlayingTrack = async () => {
    const res = await axios.get(prodAPI + "current_track", getAuthHeader());
    
    if(res?.data?.data){
      setCurrSong(res.data.data.item.name)
    }
  }

  const getRecentlyPlayed = async () => {
    const res = await axios.get(prodAPI + "recently_played", getAuthHeader());

    if(res?.data?.data){
      setRecentlyPlayed(res.data.data.items.map(item => item.track.name));
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(prodAPI + "user", getAuthHeader());
      console.log(res);

      if(res.data.user){
        setUser(res.data.user);
      }
      setLoading(false);
    }

    getUser();


  }, [])

  return (
    <div className="App">
      {!loading && <div>
        {!user && <button onClick={login}>Login</button>}
        
        <button onClick={getCurrentlyPlayingTrack}>Refresh currently playing song</button>
        <button onClick={getRecentlyPlayed}>Get Recently Played</button>

        {user && <div>Logged in as: {user}</div>}
        {!user && <div>Not logged in</div>}
        <div>Curr song: { currSong ? currSong : "None" }</div>

        {recentlyPlayed.map((song, i) => <div key={i}>{song}</div>)}
        
      </div>}


      {/* <Home /> */}

    </div>
  );
}

export default App;


// get query parameters and put tokens in local storage and then redirect to remove them from the link
// (this might happen instantly and might not be noticable)
