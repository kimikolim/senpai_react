import React, { Component } from 'react'

export class Catalog extends Component {
    render() {
        return (

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

    <div className="tile is-ancestor">
                
        <div className="tile is-vertical is-4">
            <div className="tile">
                <div className="tile is-parent is-vertical">

                    <article  className="tile is-child box has-text-centered">
                        <p className="title">Academia</p>
                        <p className="subtitle">Top box</p>
                        <p><i className="fas fa-user-graduate"></i></p>
                    </article>

                    <article className="tile is-child box has-text-centered">
                        <p className="title">Fitness</p>
                        <p className="subtitle">Bottom box</p>
                        <p><i className="fas fa-swimmer"></i></p>
                    </article>
                </div>
            </div>
      </div>

    <div className="tile is-vertical is-4">
    
        <div className="tile">
            <div className="tile is-parent is-vertical">
                <article className="tile is-child box has-text-centered">
          <p className="title">Cooking & Baking</p>
          <p className="subtitle">Top box</p>
          <i className="fas fa-utensils"></i>
        </article>

        <article className="tile is-child box has-text-centered">
          <p className="title">Arts & Design</p>
          <p className="subtitle">Bottom box</p>
          <i className="fas fa-palette"></i>
        </article>
      </div>
      </div>
      </div>

      </div>

            </div>
        )
    }
}

export default Catalog
