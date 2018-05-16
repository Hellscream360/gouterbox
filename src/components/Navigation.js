import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";

const Navigation = () => 
    <div className="navigation-menu">
        <ul>
            <li className="liSign"><Link to={routes.SIGN_UP}>Sign up</Link></li>
            <li className="liSign"><Link to={routes.SIGN_IN}>Sign in</Link></li>
            <li className="liMenu"><Link to={routes.LANDING}>Mon gouter</Link></li>
            <li className="liMenu"><Link to={routes.HOME}>Home</Link></li>
            <li className="liSign"><Link to={routes.ACCOUNT}>Mon compte</Link></li>
        </ul>
    </div>

export default Navigation;