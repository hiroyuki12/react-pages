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
      postsList: [],
      maxId: '999999999999999999',
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderImageList = this.renderImageList.bind(this);
    this.maxId = '999999999999999999';
  }

  handleClick(target) {
    const limit = 40;
    const url = `https://mstdn.guru/api/v1/accounts/1/statuses?max_id=` + this.maxId;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        this.setState({ postsList: this.state.postsList.concat(res.data) });
      })
      .catch(console.error);
  }

  renderImageList(list) {
    const posts = list.map((item, index) => {
      const title = item.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
      const reblog = item.reblog
      if(reblog != null) {
        if(index == 19) {
          console.log('Hello 19');
          console.log(item);
          this.maxId = item.id;
        }
        return (
          <li className="item" key={index}>
            <img class="css-100alwu eyfquo10" src={item.reblog.account.avatar} width="40" height="40" loading="lazy" />
            <a href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} リプライ数:{item.replies_count} fav数:{item.favourites_count}
          </li>
        );
      }
      else {
        if(index == 19) {
          console.log('Hello 19');
          console.log(item);
          this.maxId = item.id;
        }
        return (
          <li className="item" key={index}>
            <img class="css-100alwu eyfquo10" src={item.account.avatar} width="40" height="40" loading="lazy" />
            <a href={item.url} target="_blank" rel="noreferrer">{title}</a> {moment(item.created_at).fromNow()} リプライ数:{item.replies_count} fav数:{item.favourites_count}
          </li>
        );
      }
    });
    return posts;
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Search search={this.handleClick} />
        <ul>{this.renderImageList(this.state.postsList)}</ul>

        <button onClick={this.handleClick}>more page</button><br /><br />

        <Footer />
      </div>
    );
  }
}

export default Mstdn;
