import React, { useRef } from "react";
import { arr, fing, map, mouse, ohome } from "../../assets";
import { Footer, Navbar } from "../../components";
import "./home.scss";

function Home() {
	// const touch = useRef();
	// setTimeout(() => {
	// 	console.log(touch.current.getBoundingClientRect().top);
	// }, 1000);
	// const handleScroll = () => {
	// 	console.log(touch.current.scrollTop);
	// };

	const swipe1 = useRef();
	const swipe2 = useRef();
	var startingY, movingY;

	function touchstart(evt) {
		startingY = evt.clientY;
	}
	function touchmove(evt, disp) {
		// movingY = evt.touches[0].clientY;
		var touch = evt.clientY;
		var change = startingY - touch;
		console.log(touch);
		if (change < 0) {
			return;
		}
		evt.current.style.display = "none";
		disp.current.style.display = "block";
		evt.preventDefault();
	}
	function touchend() {
		if (startingY < movingY) {
			console.log("UPPPPPPPPPPPPPPP");
			console.log(startingY, movingY);
		} else {
			console.log("DOWNPPPPPPPPPPPP");
			console.log(startingY, movingY);
		}
	}
	// const disp = () => {
	// 	console.log("DDDDDD");
	// 	swipe1.current.style.display = "none";
	// 	swipe2.current.style.display = "block";
	// };
	return (
		<div className="home">
			<div className="overlay z-10">
				<img src={ohome} alt="img.jpg" />
			</div>
			<Navbar />
			<div
				className="home-container"
				ref={swipe1}
				onTouchStart={() => touchstart(swipe1)}
				onTouchMove={() => touchmove(swipe1, swipe2)}
				onTouchEnd={() => touchend()}
			>
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
					<div className="scroll flex flex-col items-center justify-center cursor-pointer">
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
			<div
				ref={swipe2}
				className="swipe map"
				onTouchStart={() => touchstart(swipe2)}
				onTouchMove={() => touchmove(swipe2, swipe1)}
				onTouchEnd={() => touchend()}
			>
				<div className="map-container cursor-pointer">
					<img src={map} alt="img.jpg" />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
