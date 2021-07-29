import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
        }
    }


    handleFormSubmission(e) {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_APIURL}/api/v1/user/register`, {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        })
            .then(response => {
                toast('Account created successfully!')
                this.props.history.push('/login')

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


    render() {
        return (
            <div>

        <section className="hero is-small">
            <div className="hero-body has-text-centered">
                <p className="title">
                    <strong>CREATE ACCOUNT</strong>
                </p>

                <p className="subtitle has-text-centered">
                    Sign up and join the community today!
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

{/*
                    <div class="control">
                        <label className="label">Gender</label>

                        <label class="radio">
                            <input type="radio" name="foobar" checked></input>
                             Male
                        </label>

                        <label class="radio">
                            <input type="radio" name="foobar"></input>
                             Female
                        </label>
                    </div>
                    <br></br> */}


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

                    <div className="field">
                        <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">

                                <input className="input" type="password" value={this.state.password} onChange={ e => { this.handleFormChange(e, 'password') } } placeholder="Minimum 8 characters"/>

                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>

                            </div>
                    </div>


                    <div className="field">
                        <label className="label">Confirm Password</label>
                            <div className="control has-icons-left has-icons-right">

                                <input className="input" type="password" value={this.state.confirmPassword} onChange={ e => { this.handleFormChange(e, 'confirmPassword') } }/>

                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>

                            </div>
                    </div>


                    <span className="column has-text-centered">
                        <button type="submit" className="button is-primary mt-5">Register</button>
                    </span>

                </form>

            </div>

        </div>


        </div>


        )
    }
}

export default withRouter(Signup)
