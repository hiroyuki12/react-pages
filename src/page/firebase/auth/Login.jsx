import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";

const Login = ({ history }) => {
  const { login } = useContext(AuthContext);

  // AuthContextからlogin関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };

  return (
    <div>
      <a href="https://mbp.hatenablog.com/entry/2021/07/25/100719?_ga=2.52584168.1977567373.1627048716-1359487452.1627048716" target="_blank" rel="noreferrer">ReactでFirebaseを使用してEmail・パスワードでの認証機能</a><br />
      <a href="https://qiita.com/k-penguin-sato/items/6e892231922b360a8659" target="_blank" rel="noreferrer">【React】 Firebaseを使用してEmail・パスワードでの認証機能の実装 - Qiita</a>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
