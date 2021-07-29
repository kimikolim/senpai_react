
import React, { Component } from 'react';
import FilterSidebar from './Components/FilterSidebar';
import SenpaiCard from './Components/SenpaiCard';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

export class SenpaiList extends Component {
	constructor({ match, ...props }) {
		super(props);
		this.state = {
			particulars: [],
			rate: 0,
			experience: 0,
			subCategory: [],
		};
		// this.handleFormChange = this.handleFormChange.bind(this);
		this.performFilter = this.performFilter.bind(this);
		this.sliderMagic = this.sliderMagic.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	sliderMagic(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ rate: newVal });
		console.log(e.target.value);
	}

	componentDidMount() {
		axios
			.get(
				`http://localhost:8000/api/v1/catalog/${this.props.match.params.mainCategory}`
			)

			.then((response) => {
				// console.log(response)

				this.setState({
					particulars: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleCheckboxChange = (changeEvent) => {
		const cleanName = changeEvent.target.name.trim();

		this.setState((prevState) => ({
			subCategory: {
				...prevState.subCategory,
				[cleanName]: !prevState.subCategory[cleanName],
			},
		}));
	};

	performFilter(e, filterType) {
		// set the filters state
		let newState = {};

		if (filterType !== 'subCategory') {
			newState[filterType] = parseInt(e.target.value.trim());
			console.log(e.target.value.trim());
		}
		console.log(newState);

		// setState is a async operation
		this.setState(newState, () => {
			let queryStr = '?';
			// [this.state.rate]: this.state.rate === 'number' ? parseInt(this.state.rate) : this.state.rate;
			if (this.state.experience !== 0) {
				queryStr += `experience=${this.state.experience}&`;
			}
			let subCatString = '';
			for (const subCatName in this.state.subCategory) {
				if (this.state.subCategory[subCatName]) {
					subCatString += subCatName.replace(/\s/g, '+') + ',';
				}
			}

			if (subCatString.length > 0) {
				queryStr += `subCategory=${subCatString}&`;
			}

			if (this.state.rate !== 0) {
				queryStr += `rate=${this.state.rate}&`;
			}

			// // check if adoptionStatus status is empty
			// if (this.state.adoptionStatus !== '') {
			// 	queryStr += `isAdopted=${this.state.adoptionStatus}&`;
			// }

			// queryStr = _.trimEnd(queryStr, '&');
			console.log(
				`http://localhost:8000/api/v1/catalog/${this.props.match.params.mainCategory}` +
					queryStr
			);
			axios
				.get(
					`http://localhost:8000/api/v1/catalog/${this.props.match.params.mainCategory}` +
						queryStr
				)
				.then((response) => {
					console.log(response.data);
					this.setState({
						particulars: response.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}

	// componentDidMount() {
	//     let category = this.props.match.params.mainCategory
	//     console.log(category)
	// }

	// handleFormChange(e, fieldName) {
	// 	this.setState((prevState) => {
	// 		let updatedForms = prevState.forms.map((form) => {
	// 			return {
	// 				...form,
	// 				post: { ...form.post, [fieldName]: e.target.value },
	// 			};
	// 		});
	// 		return { forms: updatedForms };
	// 	});
	// }

	render() {
		let senpaiRender = this.state.particulars.map((item, idx) => {
			return (
				<div className="column is-three-quarters" key={idx}>
					<SenpaiCard senpai={item} />
				</div>
			);
		});

		return (
			<div className="container">
				<section className="columns is-fullheight">
					<br></br>

					<aside className="column is-one-quarter">
						<FilterSidebar
							category={this.props.match.params.mainCategory}
							rate={this.state.rate}
							matchParticulars={this.state.particulars}
							experience={this.state.experience}
							performFilter={this.performFilter}
							sliderMagic={this.sliderMagic}
							handleCheckboxChange={this.handleCheckboxChange}
							subCategory={this.state.subCategory}
						/>
					</aside>

					<div className="column is-three-quarters">
						<div>
							<section class="hero is-small">
								<div class="hero-body has-text-centered">
									<p class="title">
										<strong>CHOOSE YOUR SENPAI</strong>
									</p>
								</div>
							</section>
						</div>
						{senpaiRender}
					</div>
				</section>
			</div>
		);
	}
}

export default withRouter(SenpaiList);

