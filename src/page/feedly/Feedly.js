import React from 'react';
import axios from "axios";
import Search from "./Search";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import moment from 'moment'

class Feedly extends React.Component {
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
    const url = `https://cloud.feedly.com/v3/streams/contents?streamId=user/` + process.env.FEEDLY_USER_ID + '/category/c59b3cef-0fa1-414c-8aca-dc9678aaa85f&continuation=99999999999999';

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization =  process.env.FEEDLY_TOKEN;
      const token = process.env.FEEDLY_TOKEN;

      return config;
    });

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
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> {moment(item.created_at).fromNow()}
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

export default Feedly;
