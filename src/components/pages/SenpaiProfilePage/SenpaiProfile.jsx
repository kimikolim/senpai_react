import React, { Component } from 'react';
import './SenpaiProfile.scss';
import { RangeStepInput } from 'react-range-step-input';

export class SenpaiProfile extends Component {
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="sidebar column is-one-quarter">
						<center>
							<img src="https://via.placeholder.com/200" alt="Avatar" />
						</center>
						<div>Name</div>
						<div>Age</div>
					</div>
					<div className="skills-display column">
						<h1>
							<strong>Skills</strong>
						</h1>

						<article className="message is-primary">
							<div className="message-header">
								<p>Category Name</p>
							</div>
							<div class="message-body">
								<strong>First Skill</strong> <h3>Years of Experience</h3>
								<h3>Rate</h3>
								<h3>Comments</h3>
							</div>
						</article>
					</div>
				</div>
			</div>
		);
	}
}

export default SenpaiProfile;
