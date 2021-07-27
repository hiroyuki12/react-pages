import React from 'react';
import app, { db } from '../firebase/components/base';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            text: '',
            uid: ''
        };
    }

    //old 登録ボタンが押されたら
    handleOnSubmit = (values) => {
        const docId = db.collection("expenseItems").doc().id;
        const date = app.firestore.Timestamp.now();
        db.collection("expenseItems").doc(docId).set({
            amount: 30000,
            date: date,
            text: "電気代",
            uid: this.state.title,
        });

        //登録後、Topに移動
        this.props.history.push("/react-pages/");
    }

    // sendボタンが押されたら
    registerPost = async (evt) => {
        evt.preventDefault();
        const date = app.firestore.Timestamp.now();
        db.collection("expenseItems").add({
            amount: this.state.amount,
            date: date,
            text: this.state.text,
            uid: "abcde",
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

        //登録後、indexに移動
        this.props.history.push("/react-pages/index");
    }

     onChangeAmount = (evt) => {
        this.setState({ amount: evt.target.value });
    }

     onChangeText = (evt) => {
        this.setState({ text: evt.target.value });
    }

     onChangeUid = (evt) => {
        this.setState({ uid: evt.target.value });
    }

    render(){
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href='/react-pages/'>Home</Nav.Link>
              <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
              <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar >
          <form onSubmit={this.registerPost} style={{marginTop: "4em"}}>
              内容: <textarea
                 name="text"
                 value={this.state.text}
                 onChange={this.onChangeText}>
              </textarea><br/>
              金額: <textarea
                 name="amount"
                 value={this.state.amount}
                 onChange={this.onChangeAmount}>
              </textarea><br/>
              <button type="submit">
                send
              </button>
            </form>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        )
    } 
}

export default App;
