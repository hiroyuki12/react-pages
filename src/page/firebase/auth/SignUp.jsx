import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import MyNavbar from "../../../components/MyNavbar";

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  // AuthContextからsignup関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div>
      <MyNavbar />
      <a href="https://mbp.hatenablog.com/entry/2021/07/25/100719?_ga=2.52584168.1977567373.1627048716-1359487452.1627048716" target="_blank" rel="noreferrer">ReactでFirebaseを使用してEmail・パスワ>ードでの認証機能</a><br />
      <a href="https://qiita.com/k-penguin-sato/items/6e892231922b360a8659" target="_blank" rel="noreferrer">【React】 Firebaseを使用してEmail・パスワードでの認証機能の実装 - Qiita</a>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
