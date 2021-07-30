import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Homepage/Home';
import Catalog from './components/pages/CatalogPage/Catalog';
import SenpaiList from './components/pages/SenpaiListPage/SenpaiList';
import Signup from './components/pages/RegisterPage/Signup';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import UserProfile from './components/pages/UserDashboardPage/UserProfile';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';
import Login from './components/pages/LoginPage/Login'
import SenpaiProfile from './components/pages/SenpaiProfilePage/SenpaiProfile';
import AboutMe from './components/pages/AboutMePage/AboutMe';

//DEPENDENCIES
import { withCookies, Cookies } from 'react-cookie'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { instanceOf } from 'prop-types'

//FRAMEWORK
import 'bulma/css/bulma.min.css';



class App extends React.Component {
		
	constructor(props){
        super(props);
        this.state = {
            userID: null,
        }
    }

	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	}	

	
	handleUserIDFromLogin = (userIDFromLogin) => {
			this.setState({ userID: userIDFromLogin })
	}
	
		
	render() {
	
		return (
			<Router>
				<div>
					<Header userID = { this.state.userID }/>
					<ToastContainer />


					<Switch>
						<Route exact path="/">
							<Home userID = { this.state.userID }/>
						</Route>

						<Route path="/null">
							<Login handleUserIDFromLogin = { this.handleUserIDFromLogin }/>
						</Route>

						<Route path="/profile/:userid">
							<SenpaiProfile />
						</Route>

						<Route path="/catalog/:mainCategory">
							<SenpaiList />
						</Route>					

						<Route path="/catalog">
							<Catalog />
						</Route>

						<Route path="/signup">
							<Signup />
						</Route>

						<Route path="/login">
							<Login handleUserIDFromLogin = { this.handleUserIDFromLogin }/>
						</Route>

						<Route path="/:userID/profile" userID = { this.state.userID }>
							<AboutMe />
						</Route>

						<Route path="/:userID/skill" userID = { this.state.userID }>
							<UserProfile />
						</Route>

						<Route path="*">
							<ErrorPage />
						</Route>


					</Switch>
				</div>
	<br></br>
	<br></br>

				<Footer />


			</Router>
			)
		}
}


export default withCookies(App)