import React from "react";
import { arr, fing, mouse, ohome } from "../../assets";
import { Footer, Navbar } from "../../components";
import "./home.scss";

function Home() {
	return (
		<div className="home">
			<div className="overlay z-10">
				<img src={ohome} alt="img.jpg" />
			</div>
			<Navbar />
			<div className="home-container">
				<div className="text-last">
					<div className="home-content">
						<h5 className="">THE WORLD OF</h5>
						<h1 className="">Mythic Greek Beings</h1>
						<div className="btn mt-4">
							<a href="/">
								<div className="flexi-btn flex flex-row items-center gap-2 py-2 px-5">
									<small>Explore</small>
									<img src={arr} alt="img.jpg" />
								</div>
							</a>
						</div>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div>
							<img src={mouse} alt="img.jpg" className="lap" />
							<img src={fing} alt="img.jpg" className="tab" />
						</div>
						<h2>
							Scroll Down to
							<br /> read more
						</h2>
					</div>
				</div>
			</div>
			<div className="foot">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
