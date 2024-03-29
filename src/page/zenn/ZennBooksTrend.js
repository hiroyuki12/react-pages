import React from 'react';
import axios from "axios";
import SearchBooksTrend from "./SearchBooksTrend";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

class ZennBooksTrend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
  }

  handleClick(target) {
    const url = `https://zenn-api.netlify.app/.netlify/functions/trendBook`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: this.state.postsList.concat(res.data)});
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      const url = 'https://zenn.dev/' + item.user.username + '/books/' + item.slug;
      return (
        <li className="item" key={index}>
          <img src={item.user.avatarSmallUrl} width="50" height="50" loading="lazy" alt="img" />
          <a href={url} target="_blank" rel="noreferrer">{item.title}</a> {dayjs(item.publishedAt).fromNow(true)}  {item.likedCount} liked
        </li>
      );
    });
    return posts;
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <SearchBooksTrend search={this.handleClick} />
        <ul>{this.renderImageList(this.state.postsList)}</ul>
        <Footer />
      </div>
    );
  }
}

export default ZennBooksTrend;
