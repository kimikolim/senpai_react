import React, { Component } from 'react'
import {Link, useParams, withRouter} from 'react-router-dom'
import FilterSidebar from './Components/FilterSidebar';
import SenpaiCard from './Components/SenpaiCard';

export class SenpaiList extends Component {

    componentDidMount() {

    let category = this.props.match.params.mainCategory

    console.log(category)
    }

    render() {
        return (


<div className="container">
        
        <section className="columns is-fullheight">

        <br></br>
            
            <aside className="column is-one-quarter">
                <FilterSidebar category={this.props.match.params.mainCategory}/>
            </aside>
            
            
            <div className="column is-three-quarters">

            <div>
        <section class="hero is-small">
            <div class="hero-body has-text-centered">
                <p class="title">
                    <strong>CHOOSE YOUR SENPAI</strong>                  
                </p>
            </div>
        </section>
        </div>
                <SenpaiCard />
            </div>
        
        </section>

</div>

        )
    }
}

export default withRouter(SenpaiList)