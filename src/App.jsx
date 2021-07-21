import React, { Component } from 'react';
import Home from './components/pages/Homepage/Home';
import Catalog from './components/pages/CatalogPage/Catalog';
import SenpaiList from './components/pages/SenpaiListPage/SenpaiList';
import Signup from './components/pages/RegisterPage/Signup';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import UserProfile from './components/pages/UserDashboardPage/UserProfile';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';
import Login from './components/pages/LoginPage/Login'

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

					
					<Route path="/catalog/senpailist">
						<SenpaiList />
					</Route>


					<Route path="/catalog">
						<Catalog />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/profile">
						<UserProfile />
					</Route>
				</Switch>
			</div>
<br></br>
<br></br>
			<Footer />


		</Router>
	);
}
