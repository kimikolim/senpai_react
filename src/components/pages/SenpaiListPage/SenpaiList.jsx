import React, { Component } from 'react'
import FilterSidebar from './Components/FilterSidebar';
import SenpaiCard from './Components/SenpaiCard';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


export class SenpaiList extends Component {

    constructor({ match, ...props }) {
        super(props)
        this.state = {
        particulars: [{
            name: '',
        email: '',
        mobile: '',
        gender: '',
        age: '',}]
            
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/v1/catalog/${this.props.match.params.mainCategory}`)

            .then(response => {
                console.log(response)

                this.setState({
                    name: response.data.user.name,
                    email: response.data.user.email,
                    mobile: response.data.user.mobile,
                //     gender: response.data[0].gender,
                //     age: response.data[0].age,  
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
                
                    <SenpaiCard senpai={item} /> 
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