import React from 'react';
import app, { db } from '../firebase/components/base';
import { Link } from 'react-router-dom';

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: []
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
  }

    render(){
    const items = this.state.items;
    console.log("items", items);
    return (
        <div>
          <ul>
            {items.map(item => (
              <li>
                <span>{item.text},</span>
                <span>{item.amount},</span>
                <span>{item.uid}</span>
              </li>
            ))}
          </ul>
      </div>
      );
    } 
}

export default Index;
