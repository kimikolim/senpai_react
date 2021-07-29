import React, { Component } from 'react'
import './SenpaiProfile.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import SkillsLogCard from './SkillsLogCard'

export class SenpaiProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {

        senpaiSkills: [],
		senpai: "",

        }
    }

	componentDidMount() {
		axios
			.get(
				`http://localhost:8000/api/v1/profile/${this.props.match.params.userid}`
			)

			.then((response) => {

				console.log(response.data);

				this.setState({
					senpaiSkills: response.data.skills,
					senpai: response.data
					
				});
			})

			.catch((err) => {
				console.log(err);
				// this.props.history.push('/');
			});
	}


	render() {

        let skillsRender = this.state.senpaiSkills.map((item, idx) => {
            return (
                    <div key={idx}>
                        <SkillsLogCard skill={item} />
                    </div>
            )    
		})



		return (

			<div className="container">
				<div className="columns">
					<div className="sidebar column is-one-quarter">
						<center>
							<img src="https://via.placeholder.com/200" alt="Avatar" />
						</center>
						<div>{this.state.senpai.name}</div>
						<div>{this.state.senpai.age}</div>
						<div>{this.state.senpai.mobile}</div>
						<div>{this.state.senpai.email}</div>
					</div>
					<div className="skills-display column">

					</div>
               			 {skillsRender}
            		</div>

					</div>
		)
	}
}

			
export default withRouter(SenpaiProfile);
