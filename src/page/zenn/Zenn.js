import React, { useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function Zenn() {
  const [postsList, setPostsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    handleClick();
    return () => {
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (target: string) => {
    const url = `https://zenn-api.netlify.app/.netlify/functions/trendTech`;
    setIsLoading(true);

    const headers = {}
    fetch(url, { headers })
      .then(res =>
        res.json().then(data => ({
          ok: res.ok,
         data,
        }))
      )
      .then(res => {
        if (!res.ok) {
          throw Error(res.data.message)
        } else {
          setPostsList(postsList.concat(res.data));
          setIsLoading(false);
        }
       })
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const url = 'https://zenn.dev/' + item.user.username + '/articles/' + item.slug;
      return (
        <li className="item" key={index}>
          <img src={item.user.avatarSmallUrl} width="50" height="50" loading="lazy" alt="img" />
          <a className="QiitaApp-link" href={url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.publishedAt).fromNow()}  {item.likedCount} liked
        </li>
      );
    });
    return posts;
  }

  return (
    <div>
      <MyNavbar />
      <header className="QiitaApp-header">
        <Search search={handleClick} />
        <ul>{renderImageList(postsList)}</ul>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <div>Not Loading</div>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default Zenn;
