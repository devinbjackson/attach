import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from "../../../router";
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div id="Nav">
                <div className="nav-left">
                    <ul className="nav-links nav-item">
                        <li>
                            <a href="/">Browse Matches</a>
                        </li>
                        <li>
                            <a href="/">Double Take</a>
                        </li>
                        <li>
                            <a href="/">Purchase A-List</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-notifications nav-item">
                    <li id="nav_ratings" className="nav-notifications-item">
                    star
                    </li>
                    <li id="nav_mailbox" className="nav-notifications-item conversations">
                    message bubble
                    </li>
                    </ul>
                    <div className="nav-user">
                        USERPIC
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
