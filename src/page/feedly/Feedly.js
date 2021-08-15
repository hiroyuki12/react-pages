import React,{ useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function Feedly() {
  const [postsList, setPostsList] = useState([])

  const handleClick = (target: string) => {
    const limit = 40;
    const url = 'https://34pb4eo559.execute-api.us-east-1.amazonaws.com/default/test';

   axios
      .get(url)
      .then((res) => {
        setPostsList(postsList.concat(res.data.items));
        console.log("res.data.items");
        console.log(res.data.items);
      })
      .catch(console.error);
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>

          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
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

export default Feedly;
