import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>

        <section class="hero is-small">
            <div class="hero-body has-text-centered">
                <p class="title">
                    <strong>CREATE ACCOUNT</strong>
                </p>
                        
                <p class="subtitle has-text-centered">
                    Sign up and join the community today!                     
                </p>
            </div>
        </section>

        <br></br>


        <div class="parent columns is-mobile is-centered">
            
            <div class="column box is-half has-background-light">
                    
                <form className="register-form">
                    
                    <div className="field">
                        <label className="label">Full Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="First and Last Name"></input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>


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
                    <br></br>


                    <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="xxx@email.com"></input>
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
                                        <input className="input" type="tel" placeholder="8 digits mobile number"></input>
                                    </p>
                                </div>
                            </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">

                                <input className="input" type="password" />
                                
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            
                            </div>      
                    </div>
                        

                    <div className="field">
                        <label className="label">Confirm Password</label>
                            <div className="control has-icons-left has-icons-right">
                                
                                <input className="input" type="password" />
                            
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

export default Signup
