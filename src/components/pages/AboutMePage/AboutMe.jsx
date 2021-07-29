import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

export class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			mobile: '',
			gender: '',
			age: '',
			img: '',
			imgUpload: {},
		};
	}

	componentDidMount() {
		axios
			.get(
				`${process.env.REACT_APP_APIURL}/api/v1/dashboard/${this.props.match.params.userID}/profile`
			)

			.then((response) => {
				console.log(response);

				this.setState({
					name: response.data.name,
					email: response.data.email,
					mobile: response.data.mobile,
					gender: response.data.gender,
					age: response.data.age,
					img: response.data.image,
				});
			})

			.catch((err) => {
				console.log(err);
				toast('Account NOT FOUND');
				this.props.history.push('/');
			});
	}

	handleFormSubmission(e) {
		e.preventDefault();

		let formData = new FormData();
		formData.append('name', this.state.name);
		formData.append('email', this.state.email);
		formData.append('mobile', this.state.mobile);
		formData.append('age', this.state.age);
		formData.append('gender', this.state.gender);
		if (this.state.img) {
			formData.append('img', this.state.imgUpload);
		}

		axios
			.patch(
				`${process.env.REACT_APP_APIURL}/api/v1/dashboard/${this.props.match.params.userID}/profile`,
				formData
			)
			.then((response) => {
				console.log(response);
				toast('Updated successfully!');
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleFormChange(e, fieldName) {
		let newState = {};
		newState[fieldName] = e.target.value;

		this.setState(newState);
	}

	handleDelete(e) {
		e.preventDefault();
		axios
			.delete(
				`${process.env.REACT_APP_APIURL}/api/v1/dashboard/${this.props.match.params.userID}/profile`
			)
			.then((response) => {
				console.log(response);
				toast('Deleted successfully!');
				this.props.history.push('/');
			})

			.catch((err) => {
				console.log(err);
			});
	}

	handleFileChange(e) {
		this.setState({
			imgUpload: e.target.files[0],
		});
	}

	render() {
		return (
			<div>
				<section className="hero is-small">
					<div className="hero-body has-text-centered">
						<p className="title">
							<strong>Update Your Profile</strong>
						</p>

						<p className="subtitle has-text-centered">
						Hello {this.state.name}! Do you want to update your details?
						</p>
					</div>
				</section>


				<br/>
				<div className="container">
				<div className="parent columns is-mobile is-centered ">


					

				<br></br>

				{/* <div>
					<figure class="image is-128x128">

							<img
								src={this.state.img ? this.state.img : 'https://bulma.io/images/placeholders/128x128.png'}
								alt="Placeholder"
								className="is-rounded"
							/>


					</figure>
				</div> */}
				

					<div className="column box is-half has-background-light">
					<div className="panel has-background-primary">
						<center>
						<br/>
							<figure class="image is-128x128">
								{this.state.img ? (
									<img
										src={this.state.img ? this.state.img : 'https://bulma.io/images/placeholders/128x128.png'}
										alt="Placeholder"
										className="is-rounded"
									/>
								) : (
									<img
										className="is-rounded"
										src="https://ejcoombs.co.uk/wp-content/uploads/2021/03/female-placeholder-image-300x300-1-e1615713983878.png"
										alt="Placeholder"
									/>
								)}
							</figure>
							<br/>
						</center>
					</div>
						<form
							className="register-form"
							onSubmit={(e) => {
								this.handleFormSubmission(e);
							}}
						>
							<div className="field">
								<label className="label">Full Name</label>
								<div className="control has-icons-left has-icons-right">
									<input
										className="input"
										type="text"
										value={this.state.name}
										onChange={(e) => {
											this.handleFormChange(e, 'name');
										}}
										placeholder="First and Last Name"
									/>
									<span className="icon is-small is-left">
										<i className="fas fa-user"></i>
									</span>
								</div>
							</div>

							<div className="field">
								<label className="label">Email Address</label>
								<div className="control has-icons-left has-icons-right">
									<input
										className="input"
										type="email"
										value={this.state.email}
										onChange={(e) => {
											this.handleFormChange(e, 'email');
										}}
										placeholder="xxx@email.com"
									/>
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
											<input
												className="input"
												type="mobile"
												value={this.state.mobile}
												onChange={(e) => {
													this.handleFormChange(e, 'mobile');
												}}
												placeholder="8 digits mobile number"
											></input>
										</p>
									</div>
								</div>
							</div>

							<br></br>

							<div class="control">
								<label className="label">Gender (optional)</label>

								<label class="radio">
									<input
										type="radio"
										value="M"
										onChange={(e) => {
											this.handleFormChange(e, 'gender');
										}}
										checked={this.state.gender === 'M'}
									/>
									Male
								</label>

								<label class="radio">
									<input
										type="radio"
										value="F"
										onChange={(e) => {
											this.handleFormChange(e, 'gender');
										}}
										checked={this.state.gender === 'F'}
									/>
									Female
								</label>
							</div>

							<br></br>

							<div className="field">
								<label className="label">Age (optional)</label>
								<div className="control has-icons-left has-icons-right">
									<input
										className="input"
										type="age"
										value={this.state.age}
										onChange={(e) => {
											this.handleFormChange(e, 'age');
										}}
									/>

									<span className="icon is-small is-left">
										<i className="fas fa-clock"></i>
									</span>
								</div>
							</div>

							<div class="file is-boxed">
								<label class="file-label">
									<input
										class="file-input"
										type="file"
										name="img"
										onChange={(e) => {
											this.handleFileChange(e);
										}}
									/>
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-upload"></i>
										</span>
										<span class="file-label">Click to Browse...</span>
									</span>
									{this.state.img ? (
										<span className="file-name">{this.state.imgUpload.name}</span>
									) : (
										<span className="file-name">Upload a Profile picture</span>
									)}
								</label>
							</div>

							<span className="column has-text-centered">
								<button type="submit" className="button is-primary mt-5">
									Update
								</button>
							</span>

							<Link to="/" className="column has-text-centered">
								<p>Maybe later</p>
							</Link>
						</form>

						<span className="column has-text-centered">
							<button
								type="submit"
								className="button is-danger mt-5"
								onClick={(e) => {
									this.handleDelete(e);
								}}
							>
								Delete Account
							</button>
						</span>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default withRouter(AboutMe);
