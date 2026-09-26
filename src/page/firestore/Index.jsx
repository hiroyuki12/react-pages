import React from 'react';
import app, { db } from '../firebase/components/base';
import MyNavbar from "../../components/MyNavbar";

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expenseTotal: 0
    };
  }

  async componentDidMount() {
    const querySnapshot = await db 
      .collection("expenseItems")
      .get()

    const items = [];
    querySnapshot.forEach(doc => {
      items.push(doc.data());
    });

    this.setState({ items: items });

    // Amount合計
    items.forEach(doc => {
      this.setState({ expenseTotal: this.state.expenseTotal + Number(doc.amount) });
    });
  }

    render(){
    const items = this.state.items;
    console.log("items", items);
    return (
        <div>
          <MyNavbar />
          <ul>
            {items.map(item => (
              <li>
                <span>{item.text},</span>
                <span>{item.amount}</span>
              </li>
            ))}
          </ul>
          合計: {Number(this.state.expenseTotal).toLocaleString()}<span> 円</span><br />
          <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
      );
    } 
}

export default Index;
