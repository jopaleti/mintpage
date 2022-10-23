import React, { useRef, useState } from "react";
import Layout from "../../components/layout/Layout";
import "./team.scss";
import {
	arrow,
	but,
	faq,
	faqover,
	fing,
	hand,
	horn,
	mouse,
	over,
	run,
	spear,
} from "../../assets";

function Team() {
	const next = useRef();
	const [num, setNum] = useState(1);
	const max = 2;
	setTimeout(() => console.log(next.current), 2000);

	const scroll = () => {
		if (next.current.scrollTop <= 220) {
			next.current.scrollTop += 220;
			if (num < max) {
				setNum(num + 1);
			} else {
				setNum(max);
			}
		} else if (next.current.scrollTop === 0) {
			setNum(1);
		}
	};
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
					<div
						ref={next}
						className="team-flex flex flex-wrap gap-8 items-center justify-betwee mt-8"
					>
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
						<h4>{num}/2</h4>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div className="cursor-pointer" onClick={() => scroll()}>
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

export default Team;
