import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function Zenn() {
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    handleClick();
    return () => {
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (target: string) => {
    const url = `https://zenn-api.netlify.app/.netlify/functions/trendTech`;
    axios
      .get(url)
      .then((res) => {
        setPostsList(postsList.concat(res.data));
      })
      .catch(console.error);
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const url = 'https://zenn.dev/' + item.user.username + '/articles/' + item.slug;
      return (
        <li className="item" key={index}>
          <img src={item.user.avatarSmallUrl} width="50" height="50" loading="lazy" />
          <a href={url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.publishedAt).fromNow()}  {item.likedCount} liked
        </li>
      );
    });
    return posts;
  }

  return (
    <div>
      <MyNavbar />
      <Search search={handleClick} />
      <ul>{renderImageList(postsList)}</ul>
      <Footer />
    </div>
  );
}

export default Zenn;
