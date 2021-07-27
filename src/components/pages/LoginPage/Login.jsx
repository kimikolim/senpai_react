import React, { Component } from 'react'
import axios from 'axios'
import { withCookies } from 'react-cookie'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'


export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            userID: '',
        }
    }

    handleFormSubmission(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {

                // console.log(response)
             if (response.data.success == true) {

                    // after successful login, store the token as cookie
                    const { cookies } = this.props
                console.log(response.data);
                    cookies.set('auth_token', response.data.token, {
                    path: '/'
                    })

                    this.props.handleUserIDFromLogin(response.data.userID)
                        toast(`Welcome back ${response.data.name}`)
                        this.props.history.push(`/${response.data.userID}/profile`)

                } else {

                    toast(response.data.message)
                }

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

        <section class="hero is-small">
            <div class="hero-body has-text-centered">
                <p class="title">
                    <strong>LOG IN</strong>
                </p>

                <p class="subtitle has-text-centered">
                    Welcome back!
                </p>
            </div>
        </section>

        <br></br>


        <div class="parent columns is-mobile is-centered">

            <div class="column box is-half has-background-light">

                <form className="login-form" onSubmit={ e => { this.handleFormSubmission(e)}}>

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
                        <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">

                                <input className="input" type="password" value={this.state.password} onChange={ e => { this.handleFormChange(e, 'password') } }/>

                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>

                            </div>
                    </div>

{/*
                    {
                        this.state.formErr !== "" ? (
                            <div className="form-group">
                                <p>{ this.state.formErr }</p>
                            </div>
                        ) : (
                                ""
                            )
                    } */}


                    <span className="column has-text-centered">
                        <button type="submit"  className="button is-primary mt-5 ">Login</button>
                    </span>

                </form>

            </div>

        </div>

        </div>


        )
    }
}

export default withRouter(withCookies(Login))