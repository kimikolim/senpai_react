import React, { Component } from 'react';
import './Header.scss';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export class Header extends Component {

	render() {
		return (
			<div className="container">
				<nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">

						<Link to="/" class="navbar-item">
							<img
								src="https://imgur.com/FVwu3GB.png"
								width="112"
								height="28"
							/>
						</Link>
					</div>

					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-start">
							<Link to="/catalog" class="navbar-item">
								Catalog
							</Link>

							<Link to="/profile" class="navbar-item">
								Become a Senpai
							</Link>

							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">More</a>

								<div class="navbar-dropdown">
									
								<Link to ={`/${this.props.userID}/profile`} class="navbar-item">About Me</Link>
								
									<hr class="navbar-divider" />
									<a class="navbar-item">Report an issue</a>
								</div>
							</div>
						</div>


						<div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to="/login" className="button is-primary">
										<strong>Log in</strong>
									</Link>
                                    
									<Link to="/signup" className="button is-light">
										<strong>Sign Up</strong>
									</Link>
                                </div>
                            </div>
						</div>


					</div>
				</nav>
			</div>
		);
	}
}

export default Header;