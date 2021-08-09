import React, { useState } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function Qiita() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [message, setMessage] = useState('')

  const componentDidMount = () => {
    let queue: NodeJS.Timeout;
    window.addEventListener("scroll", () => {
      clearTimeout(queue);
      queue = setTimeout(() => {
        const scroll_Y = document.documentElement.scrollTop + window.innerHeight;
        const offsetHeight = document.documentElement.offsetHeight;

        if(offsetHeight - scroll_Y <= 500 &&
          message !== "loading..." &&
          offsetHeight > 1500) {
          message = "loading...";
          handleClick();
        }

      }, 500);
    });
  }

  const handleClick = (target: string) => {
    const limit = 40;
    setPage(page + 1);
    const url = `https://qiita.com/api/v2/tags/react/items?page=${page}&per_page=${limit}`;
    axios
      .get(url)
      .then((res) => {
        setPostsList(postsList.concat(res.data));
        message = '';
      })
      .catch(console.error);
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <img src={item.user.profile_image_url} width="50" height="50" loading="lazy" />
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.created_at).fromNow()}
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

      <button onClick={handleClick}>もっと見る</button>
      <Footer />
    </div>
  );
}

export default Qiita;
