import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment';

function StackOverFlow() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

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
      console.log('page count + 1');
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

  const handleClick = (target: string) => {
    const url = `https://api.stackexchange.com/2.2/questions?page=${page}&order=desc&sort=activity&tagged=react&site=ja.stackoverflow`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPostsList(postsList.concat(res.data.items));
        setIsLoading(false);
      })
      .catch(console.error);
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const dateTime = new Date(item.creation_date * 1000);
      const dateTime2 = dateTime.toLocaleDateString('ja-JP') + ' ' + dateTime.toLocaleTimeString();
      
      return (
        <li className="item" key={index}>
          <img class="css-100alwu eyfquo10" src={item.owner.profile_image} width="40" height="40" loading="lazy" />
          <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a> {moment(dateTime2).fromNow()} , 
蝗樒ｭ疲焚:{item.answer_count} ,PV謨ｰ:{item.view_count}
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

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>Not Loading</div>
      )}
      <Footer />
    </div>
  );
}

export default StackOverFlow;
