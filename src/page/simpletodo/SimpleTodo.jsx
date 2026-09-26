import React, { Component } from 'react'
import Form from './Form'
import List from  './List'

export default class SimpleTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  // データ保存
  handleAdd(e){
    e.preventDefault()
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value})
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo})
    // inputのvalueを空に
    e.target.title.value = ''
  }

  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1)
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo})
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <a href="https://mbp.hatenablog.com/entry/2021/07/10/211218" target="_blank" rel="noreferrer">MacでReact</a><br />
        <a href="https://qiita.com/sayama0402/items/6364cef848e2c2d1cf7d" target="_blank" rel="noreferrer">ReactでシンプルなTodoアプリケーションを作成する</a>
        <h1 className="siimple-box-title siimple--color-white">Simple Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}
