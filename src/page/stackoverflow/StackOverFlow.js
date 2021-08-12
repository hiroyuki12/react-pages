import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function StackOverFlow() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)

  // page‚ª•Ï‰»‚µ‚½Žž‚ÉŽÀs
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    console.log('handleClick (useEffect)');
  }, [page]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
    const limit = 40;
    const url = `https://api.stackexchange.com/2.2/questions?page=1&order=desc&sort=activity&tagged=react&site=ja.stackoverflow`;
    axios
      .get(url)
      .then((res) => {
        setPostsList(res.data.items);
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
å›žç­”æ•°:{item.answer_count} ,PVæ•°:{item.view_count}
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

export default StackOverFlow;
