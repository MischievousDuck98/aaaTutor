import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Logo() {
    return (
        <div id="logo">
            <Link to={"/"} id ="logo_link"><span id="logo1">aaa</span><span id="logo2">Tutor</span></Link>
        </div>
    )
}

export default Logo;