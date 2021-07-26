import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

export class AboutMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            gender: '',
            age: '',
        }
    }

    componentDidMount(){
        axios.get (`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/profile`) 
            
            .then(response => {

                console.log(response)

                    this.setState({
                        name: response.data.name,
                        email: response.data.email,
                        mobile: response.data.mobile,
                        gender: response.data.gender,
                        age: response.data.age,  
                    })
                })

            .catch (err => {
                console.log(err)
                toast("Account NOT FOUND")
                this.props.history.push("/")
                })
        }

    handleFormSubmission(e) {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/profile`, {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            gender: this.state.gender,
            age: this.state.age,
        })
            .then(response => {
                console.log(response)
                toast('Updated successfully!')
                this.props.history.push('/')
                
            })
            .catch(err => {
                console.log(err)
            })
    }


    handleFormChange(e, fieldName) {
        let newState = {}
        newState[fieldName] = e.target.value

        this.setState(newState)
    }

    handleDelete(e) {
        e.preventDefault()
            axios.delete(`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/profile`)
                .then(response => {
                    console.log(response)
                    toast('Deleted successfully!')
                    this.props.history.push('/')
                })
                
                .catch(err => {
                    console.log(err)
            })
    }


    render() {
        return (
    
    <div>

        <section className="hero is-small">
            <div className="hero-body has-text-centered">
                <p className="title">
                    <strong>Hi {this.state.name}! Update Your Profile</strong>
                </p>
                        
                <p className="subtitle has-text-centered">
                    Do you need to change anything?                     
                </p>
            </div>
        </section>

        <br></br>


        <div className="parent columns is-mobile is-centered">
            
            <div className="column box is-half has-background-light">
                    
                <form className="register-form" onSubmit={ e => { this.handleFormSubmission(e) } }>
                    
                    <div className="field">
                        <label className="label">Full Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" value={this.state.name} onChange={ e => { this.handleFormChange(e, 'name') } } placeholder="First and Last Name"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" value={this.state.email} onChange={ e => { this.handleFormChange(e, 'email') } } placeholder="xxx@email.com"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                        </div>

                    </div>


                    <div className="field">
                        <label className="label">Mobile Number (WhatsApp)</label>
                        <div className="field-body">
                    
                                <div className="field has-addons">
                                    <p className="control">
                                        <a className="button is-static">+65</a>
                                    </p>
                            
                                    <p className="control is-expanded">
                                        <input className="input" type="mobile" value={this.state.mobile} onChange={ e => { this.handleFormChange(e, 'mobile') } } placeholder="8 digits mobile number"></input>
                                    </p>
                                </div>
                        </div>
                    </div>
                    
                    <br></br>

                    <div class="control">
                        <label className="label">Gender (optional)</label>
                        
                        <label class="radio">
                            <input type="radio" value="M" onChange={ e => { this.handleFormChange(e, 'gender') }} checked={this.state.gender === "M"} />
                            Male
                        </label>
  
                        <label class="radio">
                            <input type="radio" value="F" onChange={ e => { this.handleFormChange(e, 'gender') }} checked={this.state.gender === "F"}/>
                            Female
                        </label>
                    </div>
                
                    <br></br>

                    <div className="field">
                        <label className="label">Age (optional)</label>
                            <div className="control has-icons-left has-icons-right">
                                
                                <input className="input" type="age" value={this.state.age} onChange={ e => { this.handleFormChange(e, 'age') } }/>
                            
                                <span className="icon is-small is-left">
                                    <i className="fas fa-clock"></i>
                                </span>

                            </div>
                    </div>

                        
                    <span className="column has-text-centered">
                        <button type="submit" className="button is-primary mt-5">Update</button>
                    </span>

                    <Link to="/" className="column has-text-centered"> 
                        <p>Maybe later</p>
                    </Link>

                </form>
                
                <span className="column has-text-centered">
                    <button type="submit" className="button is-danger mt-5" onClick={ e => { this.handleDelete(e) } }>Delete Account</button>
                </span>

            </div>
        
        </div>
            
            
    </div>
        
         
        )
    }
}

export default withRouter(AboutMe)
