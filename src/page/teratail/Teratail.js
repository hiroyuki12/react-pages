import React, { useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function Teratail() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // κΤΊΙB΅½η handleClickΕy[WπXV
  const handleScroll = lodash.throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    // κΤΊΙB΅½Μ
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

  // pageͺΟ»΅½Ιΐs
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    console.log('handleClick (useEffect)');
    // eslint-disable-next-line
  }, [page]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
    const limit = 40;
    const url = `https://teratail.com/api/v1/tags/react.js/questions?page=${page}&limit=${limit}`;
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
          setPostsList(postsList.concat(res.data.questions));
          setIsLoading(false);
        }
       })
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const user = item.user
      if(user == null) {
        const profileImage2 = 'https://teratail-v2.storage.googleapis.com/uploads/avatars/u8/86365/UYo8ovxu_thumbnail.jpg'
        return (
          <li className="item" key={index}>
            <img className="css-100alwu eyfquo10" src={profileImage2} width="40" height="40" loading="lazy" alt="img" />
            <a className="QiitaApp-link" href={item.id} target="_blank" rel="noreferrer">{item.title}</a> {dayjs(item.created).fromNow(true)} εη­ζ°:{item.count_reply} PVζ°:{item.count_pv}
          </li>
        );
      }
      else {
        const url = "https://teratail.com/questions/" + item.id
        return (
          <li className="item" key={index}>
            <img className="css-100alwu eyfquo10" src={item.user.photo} width="40" height="40" loading="lazy" alt="img"/>
            <a className="QiitaApp-link" href={url} target="_blank" rel="noreferrer">{item.title}</a> {dayjs(item.created).fromNow(true)} εη­ζ°:{item.count_reply} PVζ°:{item.count_pv}
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

export default Teratail;
