import React,{ useState, useEffect } from 'react';
import axios from "axios";
import LoginSpotify from './LoginSpotify';
import LoggedIn from './LoggedIn';
import { getTokenFromUrl } from './Spotify';

function SpotifyApp() {

  const [token, setToken] = useState(null);
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash)
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      setToken(token)
      console.log(token);
    }
  }, [])

  const handleClick = (target: string) => {
    const url = `https://api.spotify.com/v1/playlists/37i9dQZF1DX9vYRBO9gjDe/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        setPostsList(postsList.concat(res.data));
        console.log(res.data);
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <a href="https://mbp.hatenablog.com/entry/2021/08/11/214057" target="_blank" rel="noreferrer">Spotify APIを使ってログインしてSpotify Japan 急上昇チャートを取得</a><br />
      { token ? <LoggedIn/> : <LoginSpotify/> } 
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SpotifyApp;
