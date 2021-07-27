import React, { Component } from 'react'
import FilterSidebar from './Components/FilterSidebar';
import SenpaiCard from './Components/SenpaiCard';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


export class SenpaiList extends Component {

    constructor({ match, ...props }) {
        super(props)
        this.state = {

        particulars: [],

        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/v1/catalog/${this.props.match.params.mainCategory}`)

            .then(response => {

                // console.log(response)

                this.setState({
                    particulars: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // componentDidMount() {
    //     let category = this.props.match.params.mainCategory
    //     console.log(category)
    // }

    render() {
        let senpaiRender = this.state.particulars.map((item, idx) => {
            return (
                    <div className="column is-three-quarters" key={idx}>
                        <SenpaiCard senpai={item} />
                    </div>
            )

    })


return (



<div className="container">

        <section className="columns is-fullheight">

        <br></br>

            {/* <aside className="column is-one-quarter">
                <FilterSidebar category={this.props.match.params.mainCategory}/>
            </aside> */}


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
                {senpaiRender}

            </div>

        </section>

</div>

        )
    }
}

export default withRouter(SenpaiList)