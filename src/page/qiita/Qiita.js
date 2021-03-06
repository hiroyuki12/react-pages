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
  const [tag, setTag] = useState("react")
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

  const renderImageList = (list: string) => {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <Container>
          <img src={item.user.profile_image_url} width="50" height="50" loading="lazy" alt="img" />
          <a className="QiitaApp-link" href={item.url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.created_at).fromNow()}
          </Container>
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
        <button onClick={() => {tagButtonClick("react")}}>React</button>
        <button onClick={() => {tagButtonClick("next.js")}}>Next.js</button>
        <button onClick={() => {tagButtonClick("vue.js")}}>Vue.js</button>
        <button onClick={() => {tagButtonClick("nuxt")}}>Nuxt.js</button>
        <button onClick={() => {tagButtonClick("swift")}}>Swift</button>
        <button onClick={() => {tagButtonClick("vim")}}>Vim</button>
        <button onClick={() => {tagButtonClick("azure")}}>Azure</button>
        <button onClick={() => {tagButtonClick("aws")}}>AWS</button>
        <button onClick={() => {tagButtonClick(".net")}}>.NET</button>
        <button onClick={() => {tagButtonClick("flutter")}}>Flutter</button>
        {tag}
        <ul>{renderImageList(postsList)}</ul>

        <br />
        {isLoading ? (
          <>Loading .... page: {page}/20posts/{20*(page-1)+1}-</>
        ) : (
   	<>Not Loading. page: {page}/20posts/{20*(page-1)+1}-</> 
        )}
      </header>
      <Footer />
    </>
  );
}

//export default Qiita;
