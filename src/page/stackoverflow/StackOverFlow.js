import React from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

class StackOverFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
  }

  handleClick(target) {
    const limit = 40;
    const url = `https://api.stackexchange.com/2.2/questions?page=1&order=desc&sort=activity&tagged=react&site=ja.stackoverflow`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: res.data.items });
      })
      .catch(console.error);
  }

  renderImageList(list) {
    console.log('list=res.data.items')
    console.log(list)

    const posts = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <img class="css-100alwu eyfquo10" src={item.owner.profile_image} width="40" height="40" loading="lazy" />
          <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>

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

export default StackOverFlow;
