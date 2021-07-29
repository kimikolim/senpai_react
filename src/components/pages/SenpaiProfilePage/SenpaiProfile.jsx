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
				`${process.env.REACT_APP_APIURL}/api/v1/profile/${this.props.match.params.userid}`
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
				<div className="columns is-warning">
					<div className="sidebar column is-one-quarter">

					<center>

						<article className="panel">

							<p className="panel-heading">
								<div className="is-size-3"><strong>{this.state.senpai.name}</strong></div>
							</p>

							<img src="https://cdn2.vectorstock.com/i/thumb-large/99/21/default-avatar-photo-placeholder-icon-grey-vector-38519921.jpg" alt="Avatar" />
		
								<div className="panel-block has-background-white-ter">
									<span className="panel-icon">
										<i className="fas fa-user-circle" aria-hidden="true"></i>
									</span>
										{this.state.senpai.name}
								</div>


  									<a className="panel-block has-background-white-ter">
										<span className="panel-icon">
      										<i className="fas fa-user-clock" aria-hidden="true"></i>
    									</span>
											{this.state.senpai.age}
  									</a>

  									<a className="panel-block has-background-white-ter">
    									<span class="panel-icon">
    										<i class="fas fa-venus-mars" aria-hidden="true"></i>
    									</span>
											{this.state.senpai.gender}
  									</a>

  									<a class="panel-block has-background-white-ter">
    									<span class="panel-icon">
      										<i class="fas fa-mobile-alt" aria-hidden="true"></i>
    									</span>
											{this.state.senpai.mobile}
		
											<a class="button is-primary is-small is-rounded ml-3" href={`https://wa.me/${this.state.senpai.mobile}`} target="_blank">
												<span class="icon is-small">
													<i class="fab fa-whatsapp"></i>
												</span>
											</a>
  									</a>

  									<a class="panel-block has-text-centered has-background-white-ter">
    									<span class="panel-icon">
											<i class="fas fa-envelope-open-text" aria-hidden="true"></i>
										</span>
											{this.state.senpai.email}
  									</a>

						</article>
					</center>						
					</div>


					<div className="skills-display column">
						<h1 className="is-size-3">
        					<strong>Your Senpai's Skills</strong>
        				</h1>
						   {skillsRender}
					</div>


        		</div>
			</div>

		)
	}
}

			
export default withRouter(SenpaiProfile);
