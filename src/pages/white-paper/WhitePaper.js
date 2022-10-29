import React, { useRef } from "react";
import { faq, faqover, fing, hero, mouse } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./white-paper.scss";

function WhitePaper() {
	const swipe1 = useRef();
	const swipe2 = useRef();
	var startingY, movingY;
	function touchstart() {
		startingY = swipe1.clientY;
	}
	function touchmove(evt, disp) {
		// movingY = evt.touches[0].clientY;
		var touch = evt.clientY;
		var change = startingY - touch;
		if (change < 0) {
			return;
		} else {
			evt.current.style.display = "none";
			disp.current.style.display = "block";
		}
	}
	function touchend() {
		if (startingY < movingY) {
			console.log("UPPPPPPPPPPPPPPP");
		} else {
			console.log("DOWNPPPPPPPPPPPP");
		}
	}
	return (
		<div className="whitepaper">
			<Layout background={faq} overlay={faqover}>
				<div
					ref={swipe1}
					className="whitepaper-enclose"
					onTouchStart={() => touchstart()}
					onTouchMove={() => touchmove(swipe1, swipe2)}
					onTouchEnd={() => touchend()}
				>
					<div className="whitelist-container flex items-start justify-center h-full">
						<div className="whitelist-flex flex items-start justify-between pb-16">
							<div className="flex-left">
								<h1>White Paper</h1>
								<p className="mt-4">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className="flex-right">
								<div className="hero">
									<img src={hero} alt="img.jpg" className="h-full" />
								</div>
							</div>
						</div>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div className="cursor-pointer">
							<img src={mouse} alt="img.jpg" className="lap" />
							<img src={fing} alt="img.jpg" className="tab" />
						</div>
						<h2>
							Scroll Down to
							<br />
							see More Members
						</h2>
					</div>
				</div>
				{/* Slide2 */}
				<div
					ref={swipe2}
					className="swipe whitepaper-enclose"
					onTouchStart={() => touchstart()}
					onTouchMove={() => touchmove(swipe2, swipe1)}
					onTouchEnd={() => touchend()}
				>
					<div className="whitelist-container flex items-start justify-center h-full">
						<div className="whitelist-flex flex items-start justify-between pb-16">
							<div className="flex-left">
								<h1>White Sub</h1>
								<p className="mt-4">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className="flex-right">
								<div className="hero">
									<img src={hero} alt="img.jpg" className="h-full" />
								</div>
							</div>
						</div>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div className="cursor-pointer">
							<img src={mouse} alt="img.jpg" className="lap" />
							<img src={fing} alt="img.jpg" className="tab" />
						</div>
						<h2>
							Scroll Down to
							<br />
							see More Members
						</h2>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default WhitePaper;
