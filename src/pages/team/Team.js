import React from "react";
import Layout from "../../components/layout/Layout";
import "./team.scss";
import {
	arrow,
	but,
	faq,
	faqover,
	hand,
	horn,
	mouse,
	over,
	run,
	spear,
} from "../../assets";

function Team() {
	return (
		<div className="team">
			<Layout background={faq} overlay={faqover}>
				<div className="team-container">
					<h1>Team</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<div className="team-flex flex flex-wrap grow-0 shrink-0 items-center justify-between mt-8">
						<div className="flex-item">
							<img src={arrow} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						<div className="flex-item">
							<img src={hand} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						<div className="flex-item">
							<img src={but} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						<div className="flex-item">
							<img src={spear} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						<div className="flex-item">
							<img src={horn} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						<div className="flex-item">
							<img src={run} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div>
						{/* <div className="flex-item">
							<img src={run} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div> */}
						{/* <div className="flex-item">
							<img src={run} alt="img.jpg" />
							<div className="absolute over">
								<img src={over} alt="img.jpg" className="w-full h-full" />
							</div>
							<div className="text-over">
								<h5>Julian</h5>
							</div>
						</div> */}
					</div>
					{/* QTY */}
					<div className="qty mt-10">
						<h4>1/2</h4>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div>
							<img src={mouse} alt="img.jpg" />
						</div>
						<h2>
							Scroll Down to
							<br /> read more
						</h2>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Team;
