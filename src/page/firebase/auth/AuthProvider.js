import React, { useEffect, useState } from "react";
import app from "../components/base.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数
  const login = async (email, password, history) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/react-pages/");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = async (email, password, history) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/react-pages/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    //app.auth().onAuthStateChanged(setCurrentUser);

    //onAuthStateChanged(auth, user => { console.log(user); });
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
