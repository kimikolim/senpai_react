import React, { Component } from 'react';
import './UserProfile.scss';
import { RangeStepInput } from 'react-range-step-input';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

export class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 30,
		};
	}
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="sidebar column is-one-quarter">
						<center>
							<img src="https://via.placeholder.com/200" alt="Avatar" />
						</center>
						<div className="box">Name</div>
						<div className="box">Age</div>
					</div>
					<div className="skills-display column">
						<h1>
							<strong>Skills</strong>
						</h1>
						<div className="columns">
							<div className="category column">
								<div className="select is-primary">
									<select>
										<option>Select Category</option>
										<option>Academia</option>
										<option>Fitness</option>
										<option>Cooking & Baking</option>
										<option>Arts & Design</option>
									</select>
								</div>

								<div className="skill">
									<div className="sub-skill">
										<div className="select">
											<select>
												<option>Select Sub-Category</option>
												<option>Physics</option>
												<option>Others</option>
											</select>
										</div>
										<div className="input-bar">
											<input
												class="input"
												type="text"
												placeholder="Specify your skill!"
											></input>
										</div>
									</div>
									<div className="slidey-info">
										<div class="control">
											<div class="select">
												<select>
													<option>Years of Experience</option>
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5 or more</option>
												</select>
											</div>
										</div>
										<div className="slider">
											<h3>Your rate per hour ($)</h3>
											<RangeStepInput
												min={0}
												max={100}
												value={this.state.value}
												step={1}
												onChange={this.onChange.bind(this)}
											/>
											<div className="input-group-append">
												<span className="input-group-text ml-2">
													{this.state.value}
												</span>
											</div>
										</div>
										<div className="comments">
											<input
												class="input is-primary"
												type="text"
												placeholder="Additional Comments"
											/>
										</div>
									</div>
									<div className="my-buttons">
										<button className="button is-primary is-small">
											<i class="far fa-plus-square"></i>
											<p>Add Skill</p>
										</button>
										<button className="button is-danger is-small">
											<i class="far fa-minus-square"></i>
											<p>Delete Skill</p>
										</button>
									</div>
								</div>
							</div>
							<div className="my-buttons column is-1">
								<button className="button is-primary is-small">
									<i class="far fa-plus-square"></i>
								</button>
								<button className="button is-danger is-small">
									<i class="far fa-minus-square"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	onChange(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ value: newVal });
	}
}

export default UserProfile;
