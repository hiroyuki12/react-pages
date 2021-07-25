import React from 'react';
import app, { db } from '../firebase/components/base';
import { Link } from 'react-router-dom';

class App extends React.Component{

    //登録ボタンが押されたら
    handleSubmit = (values) => {
        const docId = db.collection("articles").doc().id;
        db.collection("articles").doc(docId).set({
            title: "aaaa",
            subtitle: "bbbb",
            text: "cccc",
        });

        //登録後、Topに移動
        this.props.history.push("/react-pages/firestore/");
    }

    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit} style={{marginTop: "4em"}}>
              <textarea
                type="text"
                id="text"
              />
              <button type="submit">
                send
              </button>
            </form>
        </div>
        )
    } 
}

export default App;
