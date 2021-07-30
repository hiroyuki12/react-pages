import React from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

class Mstdn extends React.Component {
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
    const url = `https://mstdn.guru/api/v1/accounts/1/statuses`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: res.data });
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
    const title = item.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
      return (
        <li className="item" key={index}>

<img class="css-100alwu eyfquo10" src={item.account.avatar} width="40" height="40" loading="lazy" />
          <a href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()}
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
        <Footer />
      </div>
    );
  }
}

export default Mstdn;
