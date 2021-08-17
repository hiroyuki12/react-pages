import React, { useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

function Mstdn() {
  const [postsList, setPostsList] = useState([])
  const [maxId, setMaxId] = useState('999999999999999999')
  const [isLoading, setIsLoading] = useState(false)

  // maxId‚ª•Ï‰»‚µ‚½Žž‚ÉŽÀs
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    console.log('handleClick (useEffect)');
  }, [maxId]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
    const limit = 40;
    const url = `https://mstdn.guru/api/v1/accounts/1/statuses?max_id=` + maxId;
    console.log(url);
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
      const title = item.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
      const reblog = item.reblog
      if(reblog != null) {
        if(index == 19) {
          console.log('Hello 19');
          console.log(item);
        }
        return (
          <li className="item" key={index}>
            <img class="css-100alwu eyfquo10" src={item.reblog.account.avatar} width="40" height="40" loading="lazy" />
            <a href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} ãƒªãƒ—ãƒ©ã‚¤æ•°:{item.replies_count} favæ•°:{item.favourites_count}
          </li>
        );
      }
      else {
        if(index == 19) {
          console.log('Hello 19 reblog');
          console.log(item);
          setMaxId(item.id);
        }
        return (
          <li className="item" key={index}>
            <img class="css-100alwu eyfquo10" src={item.account.avatar} width="40" height="40" loading="lazy" />
            <a href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} ãƒªãƒ—ãƒ©ã‚¤æ•°:{item.replies_count} favæ•°:{item.favourites_count}
          </li>
        );
      }
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

export default Mstdn;
