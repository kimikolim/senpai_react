import React, { Component } from "react";
import "./Header.scss";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export class Header extends Component {
	render() {
		return (
			<div className="container">
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<Link to="/" class="navbar-item">
							<img
								src="https://bulma.io/images/bulma-logo.png"
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
									<a class="navbar-item">About</a>
									<a class="navbar-item">View your account</a>
									<hr class="navbar-divider" />
									<a class="navbar-item">Report an issue</a>
								</div>
							</div>
						</div>

						<div class="navbar-end">
							<div class="navbar-item">
								<div class="buttons">
									<a class="button is-primary">
										<strong>Sign up</strong>
									</a>
									<a class="button is-light">Log in</a>
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
