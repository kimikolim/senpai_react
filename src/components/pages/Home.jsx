import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>HomePage</h1>
                <h2>
                    <Link path='/category'> Find Senpai </Link>
                </h2>
                <h2>
                    <Link path='/register'> Be Senpai </Link>
                </h2>
            </div>
        )
    }
}

export default Home
