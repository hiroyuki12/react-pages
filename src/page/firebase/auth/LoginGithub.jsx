import React, { useContext } from "react";
import firebase from "firebase/app";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import MyNavbar from "../../../components/MyNavbar";

const LoginGithub = ({ history }) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log('user');
    console.log(user);
    if (user) {
      console.log('login');
      console.log(user.email);
    } else {
      console.log('not login');
    }
  });

  const provider = new firebase.auth.GithubAuthProvider();
  const result = firebase.auth().signInWithPopup(provider);


  // AuthContextからlogin関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
  };

  return (
    <div>
      <MyNavbar />
      <a href="https://mizchi.dev/202008172159-firebase-authentication" target="_blank" rel="noreferrer">ちょっとでもセキュリティに自信がないなら、 Firebase Authentication を検討しよう</a><br />
      <a href="https://mbp.hatenablog.com/entry/2021/07/25/100719?_ga=2.52584168.1977567373.1627048716-1359487452.1627048716" target="_blank" rel="noreferrer">ReactでFirebaseを使用してEmail・パスワードでの認証機能</a><br />
      <a href="https://qiita.com/k-penguin-sato/items/6e892231922b360a8659" target="_blank" rel="noreferrer">【React】 Firebaseを使用してEmail・パスワードでの認証機能の実装 - Qiita</a>
      <h1>GitHub Log in</h1>
    </div>
  );
};

export default withRouter(LoginGithub);
