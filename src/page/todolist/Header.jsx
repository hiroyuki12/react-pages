import React from 'react';
import './Header.css'

const Header = (props) => {

    return (
        <header className="toDo-header">
            <h1>{props.headerTitle}</h1>
        </header>
    );
}

export default Header;
