import React from "react";
import { arrow, but, faq, faqover, hand, spear, star } from "../../assets";
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
						</div>
						<div className="mt-4 flex items-center justify-between">
							<div className="flex-left">
								<img src={arrow} alt="img.jpg" className="w-full" />
							</div>
							<div className="flex-right bg-black">
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
