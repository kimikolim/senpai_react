import React from 'react'
import {Link} from 'react-router-dom'

class SenpaiCard extends React.Component {

    render() {
        return (

            <div className="card has-text-centered">
                    
            <div className="card-image has-background-light">
                <figure class="image is-4by3">
                    <img src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png" alt="Placeholder image"></img>
                </figure>
            </div>

            <div className="card-content has-background-light">
                <div className="content">
                    <p class="title is-4">Name</p>
                    <p>Skill</p>
                    <p>Rates</p>
                </div>
            </div>
        </div>


            // <div className="card">
            //     <div className="card-image">
            //         <figure className="image is-4by3">
            //             {
            //                 this.props.animal.image ?
            //                     (<img src={this.props.animal.image} alt="Placeholder" />) :
            //                     (<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />)
            //             }
            //         </figure>
            //     </div>
            //     <div className="card-content">
            //         <div className="content">
            //             <p>Name: {this.props.animal.name}</p>
            //             <p>Species: {this.props.animal.species}</p>
            //             <p>Breed: {this.props.animal.breed}</p>
            //             <p>Gender: {this.props.animal.gender}</p>
            //             <p>Age: {this.props.animal.age}</p>
            //         </div>

            //         <Link to={"/animals/" + this.props.animal._id}>View Animal</Link>
            //     </div>
            // </div>
        )
    }

}

export default SenpaiCard