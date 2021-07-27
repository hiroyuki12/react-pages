import React, {useState} from 'react';
import './Form.css'

const Form = (props) => {
    const [toDoTitle, setToDoTitle] = useState("");
    const [toDoContent, setToDoContent] = useState("");

    const handleToDoTitleInputChange = (e) => {
        setToDoTitle(e.target.value);
    }

    const handleToDoContentInputChange = (e) => {
        setToDoContent(e.target.value);
    }

    const resetInputField = () => {
        setToDoTitle("");
        setToDoContent("");
    }

    const callAddToDoList = (e) => {
        e.preventDefault();
        props.add(toDoTitle,toDoContent);
        resetInputField();
    }

    return (
        <form className="toDo-form">
            <div className="toDo-form-title input-group"> 
                <div className="input-group-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input type="text"
                    className="form-control shadow"
                    onChange={handleToDoTitleInputChange}
                    value={toDoTitle}
                />
            </div>
            <div className="toDo-form-detail input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Detail</span>
                </div>
                <textarea className="form-control shadow"
                    aria-label="Detail"
                    onChange={handleToDoContentInputChange}
                    value={toDoContent}
                ></textarea>
            </div>
            <div className="toDo-form-add">
                <button className="btn btn-success"
                    type="submit" onClick={callAddToDoList}
                >
                    ADD
                </button>
            </div>
        </form>
    );
}

export default Form;
