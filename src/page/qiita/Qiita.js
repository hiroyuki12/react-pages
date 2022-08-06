import React, { useState, useEffect } from 'react';
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import lodash from 'lodash';
import moment from 'moment';
//import stringWidth from "string-width"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

export function Qiita() {
  const [postsList, setPostsList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [tag, setTag] = useState("React")
  const [error, setError] = useState("")

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
      setPage((prevCount) => prevCount + 1);
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
    // eslint-disable-next-line
  }, [page]); // Only re-run the effect if count changes

  // tagが変化した時に実行
  useEffect(() => {
    //document.title = `page = ${page}, message = ${message}`;
    handleClick();
    // eslint-disable-next-line
  }, [tag]); // Only re-run the effect if count changes

  const tagButtonClick = (target: string) => {
    setPostsList([]);
    setTag(target);
  }

  const pageButtonClick = (target) => {
    setPostsList([]);
    const tmp = parseInt(target,10);
    setPage(tmp);
    //setTag('Swift');
  }

  const handleClick = (target: string) => {
    const limit = 40;
    const url = `https://qiita.com/api/v2/tags/${tag}/items?page=${page}&per_page=${limit}`;
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
          setError(res.data.message);
          setIsLoading(false);
          //throw Error(res.data.message)
        } else {
          setPostsList(postsList.concat(res.data));
          setIsLoading(false);
        }
      })
  }

  const renderTag = (list) => {
    const tags = list.map((item, index) => {
      return (
        <>{item.name}, </>
      );
    });
    return tags;
  }

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <div class="card-container">
            <img src={item.user.profile_image_url} width="50" height="50" loading="lazy" alt="img" />
            <div class="card-text">
              <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
              <div class="card-text2">
              <p>{moment(item.created_at).fromNow()}
                 / {renderTag(item.tags)} / {item.likes_count}likes / {item.user.items_count}posts</p>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }

  return (
    <>
      <MyNavbar />
      <header className="QiitaApp-header">
        <font color="red"><b>{error}</b></font>
        <Search search={handleClick} />
        <br />
        <button onClick={() => {tagButtonClick("React")}}>React</button>
        <button onClick={() => {tagButtonClick("Next.js")}}>Next.js</button>
        <button onClick={() => {tagButtonClick("Vue.js")}}>Vue.js</button>
        <button onClick={() => {tagButtonClick("Nuxt")}}>Nuxt.js</button>
        <button onClick={() => {tagButtonClick("Swift")}}>Swift</button>
        <button onClick={() => {tagButtonClick("Vim")}}>Vim</button>
        <button onClick={() => {tagButtonClick("Azure")}}>Azure</button>
        <button onClick={() => {tagButtonClick("Aws")}}>AWS</button>
        <button onClick={() => {tagButtonClick(".NET")}}>.NET</button>
        <button onClick={() => {tagButtonClick("Flutter")}}>Flutter</button>
        {tag}<br />
        page:<button onClick={() => {pageButtonClick("1")}}>__1__</button>
        ___:<button onClick={() => {pageButtonClick("10")}}>__10__</button>
        ___:<button onClick={() => {pageButtonClick("50")}}>__50__</button>
        {page}
        <ul>{renderImageList(postsList)}</ul>

        <br />
        {isLoading ? (
          <>Loading .... page: {page}/20posts/{20*(page-1)+1}-</>
        ) : (
   	<>Not Loading. page: {page}/20posts/{20*(page-1)+1}-</> 
        )}
      </header>
      <div className="QiitaApp-footer">{tag} Page {page}/20posts/{20*(page-1)+1}-</div>
      <Footer />
    </>
  );
}

//export default Qiita;
