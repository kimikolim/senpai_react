import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Catalog extends Component {


    render() {
        return (

    <div>

    <div>
        <section class="hero is-small">
            <div class="hero-body has-text-centered">
                <p class="title">
                    <strong>PLEASE HELP ME SENPAI!</strong>
                </p>

                <p class="subtitle has-text-centered">
                    Which skill do you wish to master?
                </p>
            </div>
        </section>

        <br></br>

        <div className="tile is-ancestor">

            <div className="tile is-vertical is-4">
                <div className="tile">
                    <div className="tile is-parent is-vertical">


                        <Link to="/catalog/academic" id="academic" value="academic" onClick={this.handleClick} className="btn btn-primary is-link tile is-child box has-text-centered has-background-warning on-hover">
                            <p className="title">Academia</p>
                            <i className="fas fa-user-graduate"></i>
                        </Link>


                        <Link to="/catalog/fitness" id="fitness" value="fitness" onClick={this.handleClick} className="btn btn-primary is-link tile is-child box has-text-centered has-background-warning">
                            <p className="title">Fitness</p>
                            <i className="fas fa-swimmer"></i>
                        </Link>

                    </div>
                </div>
            </div>


            <div className="tile is-vertical is-4">
                <div className="tile">
                    <div className="tile is-parent is-vertical">

                        <Link to="/catalog/cooking&baking" id="cookingbaking" value="cookingbaking" onClick={this.handleClick} className="btn btn-primary is-link tile is-child box has-text-centered has-background-warning on-hover">
                            <p className="title">Cooking & Baking</p>
                            <i className="fas fa-utensils"></i>
                        </Link>

                        <Link to="/catalog/arts&design" id="artsdesign" value="artsdesign" onClick={this.handleClick} className="btn btn-primary is-link tile is-child box has-text-centered has-background-warning">
                            <p className="title">Arts & Design</p>
                            <i className="fas fa-palette"></i>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    </div>

    </div>
        )
    }
}

export default Catalog
