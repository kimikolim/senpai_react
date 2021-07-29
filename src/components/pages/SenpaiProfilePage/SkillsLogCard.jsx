import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class SkillsLogCard extends React.Component {

    render() {
        return (

    <div>
        <h1>
        <strong>Skills</strong>
        </h1>

        <article className="message is-primary">
        <div className="message-header">
            <p>{this.props.skill.mainCategory} - {this.props.skill.subCategory}</p>
        </div>
        <div class="message-body">
            <strong>{this.props.skill.tags}</strong> <h3>Years of Experience</h3>
            <h3>{this.props.skill.user.name}</h3>
            <h3>Comments</h3>
        </div>
        </article>
</div>
        )
    }

}

export default withRouter(SkillsLogCard)