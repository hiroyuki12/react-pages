import React,{ useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment';

function Feedly() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [continuation, setContinuation] = useState("9999999999999")

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
  }, [page]); // Only re-run the effect if count changes

  const handleClick = (target: string) => {
//    const url = 'https://u2r6yb4u30.execute-api.us-east-1.amazonaws.com/default/feedly?continuation=9999999999999';
    const url = 'https://u2r6yb4u30.execute-api.us-east-1.amazonaws.com/default/feedly?continuation=' + continuation;
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
          setPostsList(postsList.concat(res.data.items));
          setIsLoading(false);
          setContinuation(res.data.items[99].published);
        }
       })
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      const imgsrc = "https://cdn.profile-image.st-hatena.com/users/" + item.author + "/profile.gif"
      const date = new Date(item.published)
      return (
        <li className="item" key={index}>
          <img src={imgsrc} width="50" height="50" loading="lazy" />
          <a href={item.alternate[0].href} target="_blank" rel="noreferrer">{item.title}</a> {moment(date).fromNow()}
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

export default Feedly;
