import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment'

function QiitaFunction() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [message, setMessage] = useState('')

  // 一番下に到達したら handleClickでページを更新
  const handleScroll = lodash.throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    // 一番下に到達した時の処理
    //if(message !== "loading...") {
      setPage((prevCount) => prevCount + 1);  //NG
      setMessage('loading...');
      console.log('set loading');
    //}

  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // pageが変化した時に実行
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    console.log('handleClick (useEffect)');
  }, [page]); // Only re-run the effect if count changes

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

      <button onClick={() => {setPage((prevCount) => prevCount + 1)}}>繧ゅ▲縺ｨ隕九ｋ</button>
      <Footer />
    </div>
  );
}

export default QiitaFunction;
