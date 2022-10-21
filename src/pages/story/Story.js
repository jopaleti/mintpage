import React from "react";
import {
	arrow,
	but,
	faq,
	faqover,
	hand,
	speaker,
	spear,
	star,
} from "../../assets";
import Layout from "../../components/layout/Layout";
import "./story.scss";

function Story() {
	return (
		<div className="story">
			<Layout background={faq} overlay={faqover}>
				<div className="story-container flex justify-between items-center">
					<div className="story-left">
						<p>1/10</p>
						<div className="flex justify-between items-center">
							<h1 className="text-white">Story</h1>

							<div className="flexy  flex items-center gap-3 py-1 px-4">
								<h3>Hear the Story</h3>
								<img src={speaker} alt="img.jpg" />
							</div>
						</div>
						<div className="mt-4 flex items-center justify-between">
							<div className="flex-left">
								<img src={arrow} alt="img.jpg" className="w-full" />
							</div>
							<div className="flex-right">
								<div className="flex items-center justify-between">
									<h2>Origin story of the beings</h2>
									<div className="flex items-center justify-between">
										<img src={star} alt="img.jpg" />
										<img src={star} alt="img.jpg" />
										<img src={star} alt="img.jpg" />
										<img src={star} alt="img.jpg" />
										<img src={star} alt="img.jpg" />
									</div>
								</div>
								<p className="mt-4">
									When Zeus overthrew his own father, Cronus King of the Titans,
									and became the new Greek deity, he felt a sense of power and
									content he had never felt before. However, after hundreds of
									years as the King of the Gods, he became bored and set about
									to instil something never seen before in history… a
									competition between the gods.
								</p>
							</div>
						</div>
					</div>
					<div className="story-right flex flex-wrap gap-4 items-center">
						<img src={arrow} alt="img.jpg" />
						<img src={hand} alt="img.jpg" />
						<img src={but} alt="img.jpg" />
						<img src={spear} alt="img.jpg" />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Story;
