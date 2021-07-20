import React, { Component } from 'react'

export class Login extends Component {
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
                    
                <form className="register-form">
                    
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
                        <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">

                                <input className="input" type="password" />
                                
                                <span className="icon is-small is-left">
                                    <i className="fas fa-key"></i>
                                </span>
                            
                            </div>      
                    </div>
                    
                        
                    <span className="column has-text-centered">
                        <button type="submit" className="button is-primary mt-5 ">Login</button>
                    </span>
                
                </form>

            </div>
        
        </div>

            
            
        </div>
        
         
        )
    }
}

export default Login