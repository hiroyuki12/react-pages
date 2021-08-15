import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment';

function Qiita() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // ��ԉ��ɓ��B������ handleClick�Ńy�[�W���X�V
  const handleScroll = lodash.throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    // ��ԉ��ɓ��B�������̏���
    //if(message !== "loading...") {
      setPage((prevCount) => prevCount + 1);  //NG
      console.log('page count + 1');
    //}

  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // page���ω��������Ɏ��s
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    console.log('handleClick (useEffect)');
  }, [page]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
    const limit = 40;
    const url = `https://qiita.com/api/v2/tags/react/items?page=${page}&per_page=${limit}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPostsList(postsList.concat(res.data));
        setIsLoading(false);
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

      <button onClick={() => {setPage((prevCount) => prevCount + 1)}}>もっと見る</button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>Not Loading</div>
      )}
      <Footer />
    </div>
  );
}

export default Qiita;
