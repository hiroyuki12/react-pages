import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Form from './Form'
import ToDoList from './ToDoList'

const MyTodoList= () => {
    const [toDoList, setToDoList] = useState([]);


    const addToDoList = (Title, Content) => {
        setToDoList(toDoList.concat({"title": Title, "content": Content}));
    }


    const deleteToDoList = (index) => {
        setToDoList(toDoList.filter(item => toDoList[index] !== item));
    }


    return (
        <div className="toDo-app">
        <a href="https://mbp.hatenablog.com/entry/2021/07/10/211218" target="_blank" rel="noreferrer">MacでReact</a><br />
        <a href="https://qiita.com/koralle/items/f4dc71de057bf1b3062a" target="_blank" rel="noreferrer">React初心者がHookを使ってTo Doリストを作ったらこうなった
</a><br />
            <Header headerTitle="To Do List Used By Hooks"/>

            <div className="toDo-app-body container">
                <div className="toDo-main">
                    <Form add={addToDoList}/>
                    <ToDoList list={toDoList} delete={deleteToDoList}/>
                </div>
            </div>
        </div>
    );
}

export default MyTodoList;
