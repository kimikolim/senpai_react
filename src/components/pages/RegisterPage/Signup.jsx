import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>

            <p className="box">

            <div className="register-page mt-5">
                <div className="container">
                    
                    <form className="register-form">
                        <div className="field">
                            <label className="label">Full Name</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>


                        <div className="field">
                            <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email"></input>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                                </span>
                                </div>

                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">Contact Number</div>
                            <div className="field-body">
                            <div className="field has-addons">
                                <p className="control">
                                    <a className="button is-static">
                                    +65
                                    </a>
                                </p>
                            <p className="control is-expanded">
                            <input className="input" type="tel" placeholder="This is the number for business purposes"></input>
                            </p>
                        </div>
                        </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Confirm Password</label>
                            <div className="control">
                                <input className="input" type="password" />
                            </div>
                        </div>

                        <button type="submit" className="button is-primary mt-5">Create</button>
                    </form>

                </div>

            </div>
            </p>
    
    
    </div>
         
        )
    }
}

export default Signup
