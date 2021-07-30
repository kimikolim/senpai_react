import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let formatText = (str) => {
	let capitalise = str.charAt(0).toUpperCase() + str.slice(1);

	return capitalise;
};

let addComma = (arr) => {
	let newStr = arr.join(', ');
	let capitalise = newStr.charAt(0).toUpperCase() + newStr.slice(1);
	return capitalise;
};

class SkillsLogCard extends React.Component {
	componentDidMount() {
		console.log(formatText('pee,pee'));
	}

	render() {
		return (
			<div>
				<br />

				<article className="message">
					<div className="message-header has-background-warning has-text-black is-size-5">
						<p>
							{formatText(this.props.skill.mainCategory)} -{' '}
							{formatText(this.props.skill.subCategory)}
						</p>
					</div>

					<div class="message-body">
						<h3>
							<i class="fas fa-shapes mr-4"></i>
							<strong>{addComma(this.props.skill.tags)}</strong>
						</h3>
						<br />
						<h3>
							<i class="fas fa-book-reader mr-4"></i>
							{this.props.skill.experience} Years of Experience
						</h3>
						<br />
						<h3>
							<i class="fas fa-money-bill-alt mr-4"></i>${this.props.skill.rate}
							.00 per Hour
						</h3>
						<br />
						<h3>
							<i class="fas fa-comment-dots mr-4"></i>{' '}
							{this.props.skill.comments}
						</h3>
					</div>
				</article>
			</div>
		);
	}
}

export default withRouter(SkillsLogCard);
