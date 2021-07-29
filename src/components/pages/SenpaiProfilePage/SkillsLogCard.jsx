import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class SkillsLogCard extends React.Component {

    render() {
        return (
            
            <div>
                <br/>
                
                <article className="message">

                    <div className="message-header has-background-warning has-text-black">
                        <p>{this.props.skill.mainCategory} - {this.props.skill.subCategory}</p>
                    </div>
                
                    <div class="message-body">
                        <h3><i class="fas fa-shapes mr-4"></i><strong>{this.props.skill.tags}</strong></h3>
                        <br/>
                        <h3><i class="fas fa-book-reader mr-4"></i>{this.props.skill.experience} Years of Experience</h3>
                        <br/>
                        <h3><i class="fas fa-money-bill-alt mr-4"></i>${this.props.skill.rate}.00 per Hour</h3>
                        <br/>
                        <h3><i class="fas fa-comment-dots mr-4"></i> {this.props.skill.comments}</h3>
                    </div>
                    
                </article>

            </div>
        )
    }
}

export default withRouter(SkillsLogCard)