import React from 'react';
import { Link } from 'react-router-dom';

class One extends React.Component{
    render(){
        return (
            <div>
                /react-pages/one<br/>
                <Link to='/react-pages'>/react-pagesへ</Link> 
            </div>
        )
    } 
}

export default One;