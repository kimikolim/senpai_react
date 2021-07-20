import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FilterSidebar from './Components/FilterSidebar';
import SenpaiCard from './Components/SenpaiCard';

export class SenpaiList extends Component {
    render() {
        return (

<div>
        <section class="main-content columns is-fullheight">
            
            <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <FilterSidebar />
            </aside>
            
            
            <div class="container main-content column is-10 is-multiline">
                        <SenpaiCard />
            </div>
        
        </section>

</div>

        )
    }
}

export default SenpaiList