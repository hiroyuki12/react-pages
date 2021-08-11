import React,{ useState, useEffect } from 'react';
import LoginSpotify from './LoginSpotify';
import LoggedIn from './LoggedIn';
import { getTokenFromUrl } from './Spotify';

function SpotifyApp() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash)
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      setToken(token)
    }

  }, [])

  return (
    <div className="App">
      { token ? <LoggedIn/> : <LoginSpotify/> } 
    </div>
  );
}

export default SpotifyApp;
