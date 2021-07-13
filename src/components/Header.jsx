import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                 <nav>
                    <ul>
                        <li>
                        <Link to="/">frfr</Link>
                        </li>
                        <li>
                        <Link to="/category">category</Link>
                        </li>
                        <li>
                        <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
