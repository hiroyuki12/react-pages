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
    const url = `https://cloud.feedly.com/v3/streams/contents?streamId=user/` + "process.env.FEEDLY_USER_ID" + '/category/c59b3cef-0fa1-414c-8aca-dc9678aaa85f&continuation=99999999999999';
    const url2 = 'https://qiita.com/api/v2/tags/react/items';

   axios
      .get(url, {
        headers: {
          Authorization: 'Bearer FEEDLY_DEVELOPER_TOKEN',
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then((res) => {
        setPostsList(postsList.concat(res.data));
      })
      .catch(console.error);
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>

<img className="css-100alwu eyfquo10" src={item.user.profile_image_url} width="40" height="40" loading="lazy" />
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
      <Footer />
    </div>
  );
}

export default Feedly;
