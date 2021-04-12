import React from 'react'
import { Card } from 'react-bootstrap'
import GoogleMapsLibraryComponent from '../GoogleMaps'
import './page-css/FindUs.css';
import SiteFooter from '../SiteFooter';

function FindUs() {
	return (
		<container className="cards-container">

			{/* Google Maps Location of the Garage */}
			<div class="col d-flex justify-content-center">
				<Card className="map-wrapper">
					<Card.Header as="h5">Our Location</Card.Header>
					<Card.Body>
						<GoogleMapsLibraryComponent></GoogleMapsLibraryComponent>
					</Card.Body>
				</Card>
			</div>
			<div class="blank-row-spacing">
			<hr></hr>
			</div>
			<div class="col d-flex justify-content-center">
				<Card className="online-wrapper">
					<Card.Header as="h5">Find Us Online</Card.Header>
					<Card.Body>
						<div class="row">

							{/* Twitter Social Media Section */}
							<div class="column">
								<iframe
									src="https://twitframe.com/show?url=https://twitter.com/Twitter/status/1360273390070865928"
									width="500"
									height="274"
									scrolling="no"
									frameborder="0"
									allowfullscreen="true"
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
								</iframe>
							</div>

							{/* Facebook Social Media Section */}
							<div class="column">
								<iframe
									src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId"
									width="500"
									height="274"
									scrolling="no"
									frameborder="0"
									allowfullscreen="true"
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
								</iframe>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		<SiteFooter></SiteFooter>	
		</container>

	)
}

export default FindUs
