import React,{ useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function Feedly() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [continuation, setContinuation] = useState("9999999999999")
  const [category, setCategory] = useState("c59b3cef-0fa1-414c-8aca-dc9678aaa85f")  //hbfav
//  const [category, setCategory] = useState("44e0c1a9-30b5-44ab-b7e5-2ba732503822")  //zenn react
//  const [category, setCategory] = useState("01328fc1-f342-4bae-b459-d613ff670195")  //zenn swift
//  const [category, setCategory] = useState("It")
  const [categoryName, setCategoryName] = useState("hbfav")
//  const [categoryName, setCategoryName] = useState("zennReact")  //zenn react
//  const [categoryName, setCategoryName] = useState("zennSwift")  //zenn swift 
//  const [categoryName, setCategoryName] = useState("It")

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
    //console.log('handleClick (useEffect)');
    // eslint-disable-next-line
  }, [page]); // Only re-run the effect if count changes

  // categoryが変化した時に実行
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    // eslint-disable-next-line
  }, [category]); // Only re-run the effect if count changes

  const categoryButtonClick = (target) => {
    setPostsList([]);
    setContinuation("9999999999999");
    if(target === "hbfav") {
      setCategory("c59b3cef-0fa1-414c-8aca-dc9678aaa85f");
      setCategoryName("hbfav");
    }
    else if(target === "zennReact") {
      setCategory("44e0c1a9-30b5-44ab-b7e5-2ba732503822");  // zenn react
      setCategoryName("zennReact");
    }
    else if(target === "zennSwift") {
      setCategory("01328fc1-f342-4bae-b459-d613ff670195");  // zenn swift
      setCategoryName("zennSwift");
    }
    else if(target === "It") {
      setCategory("It");
      setCategoryName("I t");
    }
  }
  const handleClick = () => {
    const url = 'https://u2r6yb4u30.execute-api.us-east-1.amazonaws.com/default/feedly?continuation=' + continuation + "&category=" + category + "&count=20";
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
          throw Error(res.data.message);

        } else {
          setPostsList(postsList.concat(res.data.items));
          setIsLoading(false);
          setContinuation(res.data.items[res.data.items.length - 1].published);
        }
       })
  }

  const renderImageList = (list) => {
    const posts = list.map((item, index) => {
      var imgsrc = ""
      if(categoryName === "hbfav") {
        imgsrc = "https://cdn.profile-image.st-hatena.com/users/" + item.author + "/profile.gif"
      }
      else if(categoryName === "zennReact") {
        imgsrc = "https://storage.googleapis.com/zenn-topics/react.png"  // zenn react
      }
      else if(categoryName === "zennSwift") {
        imgsrc = "https://storage.googleapis.com/zenn-topics/swift.png"  // zenn swift 
      }
      else if(categoryName === "I t") {
        imgsrc = "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Feedly-512.png"  // It 
      }
      const date = new Date(item.published)
      return (
        <li className="item" key={index}>
          <img src={imgsrc} width="50" height="50" loading="lazy" alt="img"/>
          <a className="QiitaApp-link" href={item.alternate[0].href} target="_blank" rel="noreferrer">{item.title}</a> {dayjs(date).fromNow(true)}
        </li>
      );
    });
    return posts;
  }

  return (
    <div>
      <MyNavbar />
      <header className="QiitaApp-header">
        <Search search={handleClick} />
        <button onClick={() => {categoryButtonClick("hbfav")}}>hbfav</button>
        <button onClick={() => {categoryButtonClick("zennReact")}}>zenn react</button>
        <button onClick={() => {categoryButtonClick("zennSwift")}}>zenn swift</button>
        <button onClick={() => {categoryButtonClick("It")}}>I t</button>
        {categoryName}
        <ul>{renderImageList(postsList)}</ul>

        {isLoading ? (
          <div>Loading ...page: {page}/20posts/{20*(page-1)+1}-</div>
        ) : (
          <div>Not Loading. page: {page}/20posts/{20*(page-1)+1}-</div>
        )}
      </header>
      <div className="QiitaApp-footer">{categoryName} Page {page}/50posts</div>
      <Footer />
    </div>
  );
}

export default Feedly;
