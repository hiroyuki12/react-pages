import React from 'react';
import './ToDoList.css'

const ToDoList = (props) => {
    const toDoListItems = props.list.map(
        (item, i) => {
            return (
                <div key={i} className="card toDo-item">
                    <div className="card-body">
                        <h5 className="card-title">Title: {item.title}</h5>
                        <p className="card-text">Content: {item.content}</p>
                        <button className="btn btn-danger"
                            onClick={() => props.delete(i)} >
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
    );

    return (
        <div className="toDo-List">
            <h1>Your Tasks: {props.list.length}</h1>
            <div>
                {toDoListItems}
            </div>
        </div>
    );
}

export default ToDoList;
