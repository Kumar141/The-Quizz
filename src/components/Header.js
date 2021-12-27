import React from 'react';
import { Link } from "react-router-dom";
import "./Style.css"

const Header = () => {
    return (
        <div className="Header">
        <title>
            <Link to="/">Welcome to the quizz</Link>
        </title>
            <hr id="divider"/>
      </div>
    );
}

export default Header;
