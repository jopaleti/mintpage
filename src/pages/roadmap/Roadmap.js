import React from "react";
import { faq, faqover, fire, lad, lad1, lad2, lad3, road } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./roadmap.scss";

function Roadmap() {
	return (
		<div className="roadmap">
			<Layout background={faq} overlay={faqover}>
				<div className="roadmap-container pb-32">
					<h1>Roadmap</h1>
					<div className="roadmap-content mt-10">
						<div className="road-img">
							<img src={road} alt="img.jpg" className="w-full h-full" />
						</div>
						<div className="roadmap-flex flex justify-between">
							<div className="roadmap-left mt-20 ">
								<div>
									<h3>PHASE TWO</h3>
									<div className="mt-4">
										<div className="flex items-start gap-3">
											<img src={fire} alt="img.jpg" />
											<p>
												Everyday 2 members from the MGB community will be
												randomly airdropped 1 Nft each based on their activity
												in the general chat or participation in #fanart section.{" "}
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>
											The 50 most active members on the server will be rewarded.
										</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Launch of MGB official website</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Price and Mint date announced</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Winners for giveaways announced</p>
									</div>
								</div>
								<div className="mt-5">
									<h3>PHASE THREE</h3>
									<div className="mt-4">
										<div className="flex items-start gap-3">
											<img src={fire} alt="img.jpg" />
											<p>AMA discussion with community</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Whitelist Closed</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Partnership with other projects</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Whitelist sale</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Public sale</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Special announcement about the project</p>
									</div>
								</div>
							</div>
							<div className="roadmap-right">
								<div>
									<h3>PHASE ONE</h3>
									<div className="mt-4">
										<div className="flex items-start gap-3">
											<img src={fire} alt="img.jpg" />
											<p>Host giveaways for the community on discord</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>
											Open whitelist to give everyone a fair chance at minting
										</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Host social media giveaways after whitelist is open</p>
									</div>
								</div>
								<div className="mt-5">
									<h3>PHASE THREE</h3>
									<div className="mt-4">
										<div className="flex items-start gap-3">
											<img src={fire} alt="img.jpg" />
											<p>AMA discussion with community</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Whitelist Closed.</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Partnership with other projects</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Whitelist sale</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Public sale</p>
									</div>
									<div className="flex items-start gap-3">
										<img src={fire} alt="img.jpg" />
										<p>Special announcement about the project</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Smaller screen */}
					<div className="smaller-screen">
						<div className="road-small">
							<div>
								<h3 className="mb-4">PHASE ONE</h3>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Host giveaways for the community on discord</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										Open whitelist to give everyone a fair chance at minting
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Host social media giveaways after whitelist is open</p>
								</div>
							</div>
							<div className="img-container">
								<img src={lad} alt="img.jpg" />
							</div>
						</div>
						<div className="road-small">
							<div>
								<h3 className="mb-4">PHASE TWO</h3>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										Everyday 2 members from the MGB community will be randomly
										airdropped 1 Nft each based on their activity in the general
										chat or participation in #fanart section.{" "}
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										The 50 most active members on the server will be rewarded.
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Launch of MGB official website</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Price and Mint date announced</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Winners for giveaways announced</p>
								</div>
							</div>
							<div className="img-container">
								<img src={lad1} alt="img.jpg" />
							</div>
						</div>
						<div className="road-small">
							<div>
								<h3 className="mb-4">PHASE THREE</h3>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>AMA discussion with community</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Whitelist Closed</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Partnership with other projects</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Whitelist sale</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Public sale</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Special announcement about the project</p>
								</div>
							</div>
							<div className="img-container">
								<img src={lad2} alt="img.jpg" />
							</div>
						</div>
						<div className="road-small">
							<div>
								<h3 className="mb-4">PHASE FOUR</h3>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										All holders that mint 3 different characters and keep them
										in their wallets will be randomly airdropped our very first
										MGB Nft origin story release.
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>We will reveal 10% of the collection</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										Claims section will be opened on website for holders to
										“Print” their nft story.
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>
										All those that missed the airdropped story will be able to
										claim theirs when they meet the criteria{" "}
									</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Roadmap 2.0 will be released.</p>
								</div>
								<div className="flex items-center gap-2 mb-2">
									<img src={fire} alt="img.jpg" />
									<p>Burn system revealed</p>
								</div>
							</div>
							<div className="img-container">
								<img src={lad3} alt="img.jpg" />
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Roadmap;
