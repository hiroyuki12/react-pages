import React from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";

class Qiita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
  }

  handleClick(target) {
    const limit = 40;
    const url = `https://qiita.com/api/v2/tags/react/items?page=1&per_page=${limit}`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: res.data });
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
<img class="css-100alwu eyfquo10" src={item.user.profile_image_url} width="40" height="40" loading="lazy" />
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> {item.created_at}
          <span>[{index}] </span>
        </li>
      );
    });
    return posts;
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Search search={this.handleClick} />
        <ul>{this.renderImageList(this.state.postsList)}</ul>
      </div>
    );
  }
}

export default Qiita;
