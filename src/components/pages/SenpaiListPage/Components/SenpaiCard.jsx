import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SenpaiCard extends React.Component {


	render() {
		return (
				<div className="column is-one-third is-mobile">
					<Link to={`/profile/${this.props.senpai.user._id}`}>
						<center>
							<article className="panel has-background-warning">
								<div className="image">
									<br></br>

									<figure className="image is-128x128">
										
										{this.props.senpai.user.image ? (
											<img
												src={this.props.senpai.user.image ? this.props.senpai.user.image : 'https://bulma.io/images/placeholders/128x128.png'}
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


										
										
										
										
										
										{/* <img
											className="is-rounded"
											src={this.props.senpai.user.image ? this.props.senpai.user.image : 'https://hungrygen.com/wp-content/uploads/2019/11/placeholder-male-square.png'}
											alt="Placeholder image"
										/>
									</figure> */}
								</div>

								<br></br>

								<div className="card-content has-background-light has-text-centered ">
									<p class="title">{this.props.senpai.user.name}</p>
									<p>{this.props.senpai.subCategory}</p>
									<p><i class="far fa-money-bill-alt mr-2"></i>${this.props.senpai.rate}.00 per Hour</p>
								</div>
							</article>
						</center>
					</Link>
				</div>

				/* <div className="column is-one-third">

                <center>
                    <article className="panel has-background-warning">
                        <div className="image">
                            <br></br>
                            <figure className="image is-128x128">
                                <img className="is-rounded" src="https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1202490554?k=6&m=1202490554&s=612x612&w=0&h=2yCLuBmD8-iXPUkFCbn3J3y8NSgZ8C1hMUZme1giFkA=" alt="Placeholder image"/>
                            </figure>
                        </div>
                <br></br>
                        <div className="card-content has-background-light has-text-centered">
                            <p class="title">Hakim Lim</p>
                            <p>Yoga</p>
                            <p>$10.00</p>
                        </div>
                    </article>
                </center>
            </div>
            <div className="column is-one-third">
                <center>
                    <article className="panel has-background-warning">
                        <div className="image">
                            <br></br>
                            <figure className="image is-128x128">
                                <img className="is-rounded" src="https://st4.depositphotos.com/9998432/23741/v/600/depositphotos_237419212-stock-illustration-person-gray-photo-placeholder-woman.jpg" alt="Placeholder image"/>
                            </figure>
                        </div>
                <br></br>
                        <div className="card-content has-background-light has-text-centered">
                            <p class="title">Jerelle Lew</p>
                            <p>Fine Dining</p>
                            <p>$7.00</p>
                        </div>
                    </article>
                </center>
            </div> */

			//     <div className="card has-text-centered">

			//     <div className="card-image has-background-light">
			//         <figure class="image is-4by3">
			//             <img src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png" alt="Placeholder image"></img>
			//         </figure>
			//     </div>

			//     <div className="card-content has-background-light">
			//         <div className="content">
			//             <p class="title is-4">Name</p>
			//             <p>Skill</p>
			//             <p>Rates</p>
			//         </div>
			//     </div>

			// </div>

			// <div className="card">
			//     <div className="card-image">
			//         <figure className="image is-4by3">
			//             {
			//                 this.props.animal.image ?
			//                     (<img src={this.props.animal.image} alt="Placeholder" />) :
			//                     (<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />)
			//             }
			//         </figure>
			//     </div>
			//     <div className="card-content">
			//         <div className="content">
			//             <p>Name: {this.props.animal.name}</p>
			//             <p>Species: {this.props.animal.species}</p>
			//             <p>Breed: {this.props.animal.breed}</p>
			//             <p>Gender: {this.props.animal.gender}</p>
			//             <p>Age: {this.props.animal.age}</p>
			//         </div>

			//         <Link to={"/animals/" + this.props.animal._id}>View Animal</Link>
			//     </div>
			// </div>

			// <div className="column is-one-third">

			//         <div className="card-image has-background-light">
			//         <br></br>
			//             <figure class="image is-128x128 is-inline-block">
			//                 <img class= "is-rounded " src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"></img>
			//             </figure>
			//         </div>

			//         <div className="card-content has-background-light">
			//             <div className="content is-3">
			//                 <p class="title">Name</p>
			//                 <p>Skill</p>
			//                 <p>Rates</p>
			//             </div>
			//         </div>

			// </div>
		);
	}
}

export default withRouter(SenpaiCard);
