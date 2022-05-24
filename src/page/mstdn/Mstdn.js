import React, { useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment';

function Mstdn() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [maxId, setMaxId] = useState('999999999999999999')

  // 一番下に到達したらpageを更新 -> handleClickが実行される
  const handleScroll = lodash.throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    // 一番下に到達した時の処理
    //if(message !== "loading...") {
      setPage((prevCount) => prevCount + 1);
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
    // eslint-disable-next-line
  }, [page]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
    // const limit = 40;
    const url = `https://mstdn.guru/api/v1/accounts/1/statuses?max_id=` + maxId;
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
          setMaxId(res.data[19].id);
        }
       })
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const title = item.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
      const reblog = item.reblog
      if(reblog != null) {
        return (
          <li className="item" key={index}>
            <img className="css-100alwu eyfquo10" src={item.reblog.account.avatar} width="40" height="40" loading="lazy" alt="img"/>
            <a className="QiitaApp-link" href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} 繝ｪ繝励Λ繧､謨ｰ:{item.replies_count} fav謨ｰ:{item.favourites_count}
          </li>
        );
      }
      else {
        return (
          <li className="item" key={index}>
            <img className="css-100alwu eyfquo10" src={item.account.avatar} width="40" height="40" loading="lazy" alt="img"/>
            <a className="QiitaApp-link" href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} 繝ｪ繝励Λ繧､謨ｰ:{item.replies_count} fav謨ｰ:{item.favourites_count}
          </li>
        );
      }
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
          <div>Loading ... page: {page}/20posts/{20*(page-1)+1}-</div>
        ) : (
          <div>Not Loading page: {page}/20posts/{20*(page-1)+1}-</div>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default Mstdn;
