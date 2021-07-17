import React, { Component } from 'react';
import Home from './components/pages/Homepage/Home';
import Catalog from './components/pages/CatalogPage/Catalog';
import Signup from './components/pages/RegisterPage/Signup';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import SenpaiProfile from './components/pages/SenpaiProfilePage/SenpaiProfile';
import Header from './components/GlobalComponents/Header';
import 'bulma/css/bulma.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Header />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/catalog">
						<Catalog />
					</Route>
					<Route path="/profile">
						<SenpaiProfile />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
