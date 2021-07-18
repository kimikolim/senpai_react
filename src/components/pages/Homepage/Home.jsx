import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


export class Home extends Component {

    
    render() {
        
        return (

            <div className="background">
            {/* <p className="background"> */}
                <section class="hero is-small">
                    <div class="hero-body has-text-centered">
                        <p class="title">
                            <strong>SENPAI IS HERE TO SAVE THE DAY!</strong>
                        </p>
                        <p class="subtitle has-text-centered">
                            Learn new skills and share yours.
                        </p>
                    </div>
                </section>

                <br></br>

                <h2 className = "tile is-ancestor ">
                    <p className="tile is-4 is-parent">
                        <p className="tile is-child box has-text-centered has-background-light">
                            <br></br>
                            <p><i className="fas fa-binoculars"></i></p>
                            <br></br>
                            <Link to='/catalog' className="button is-medium is-warning is-rounded"><strong> FIND SENPAI </strong></Link>  
                        </p>
                    </p>

                    <p className="tile is-4 is-parent">
                        <p className="tile is-child box has-text-centered has-background-light">
                            <br></br>
                            <p><i className="fas fa-chalkboard-teacher"></i></p>
                            <br></br>
                            <Link to='/register' className="button is-medium is-danger is-rounded"><strong> BE SENPAI </strong></Link>
                        </p>
                    </p>
                </h2>
            {/* </p> */}
            </div>
        )
    }
}

export default Home
