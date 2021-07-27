import React from "react";
import app from "./base";
import MyNavbar from "../../../components/MyNavbar";

function Home(props) {
  return (
    <div>
      <MyNavbar />
      <h2>Home Page(private)</h2>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
