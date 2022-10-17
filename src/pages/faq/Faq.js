import React, { useRef, useState } from "react";
import { arrd, arrl, faq, faqover, question } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./faq.scss";

function Faq() {
	var acc = useRef();
	const [active, setActive] = useState();
	const [active1, setActive1] = useState();
	const [active2, setActive2] = useState();
	var panel = useRef();
	var panel1 = useRef();
	var panel2 = useRef();

	const handleClick = (input, setact, act) => {
		if (input.current.style.maxHeight) {
			input.current.style.maxHeight = null;
			setact("");
		} else {
			setact("active");
			input.current.style.maxHeight = input.current.scrollHeight + "px";
		}
	};

	return (
		<div className="faq">
			<Layout background={faq} overlay={faqover}>
				<div className="faq-container mt-12">
					<h1>Faq</h1>
					<div className="faq-flex flex items-center justify-between mb-10 mt-8">
						<div className="items-left">
							{/* <h1>Faq</h1> */}
							<div className="accordion-container">
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active && active
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel, setActive, active);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>What is this collection about?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												MGB is a handcrafted collection of 10,010 characters
												developed by notable Artists around the world. Access
												Exclusive drops, random experiences and more. Journey
												along as the stories behind each character unfolds in
												the form of nft drops. Monthly scavenger hunts where
												holders that participate will amass all sorts of
												treasure.
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active1 && active1
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel1, setActive1, active1);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>What is the mint price?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel1}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												MGB is a handcrafted collection of 10,010 characters
												developed by notable Artists around the world. Access
												Exclusive drops, random experiences and more. Journey
												along as the stories behind each character unfolds in
												the form of nft drops. Monthly scavenger hunts where
												holders that participate will amass all sorts of
												treasure.
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active2 && active2
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel2, setActive2, active2);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>When is the mint date?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel2}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												MGB is a handcrafted collection of 10,010 characters
												developed by notable Artists around the world. Access
												Exclusive drops, random experiences and more. Journey
												along as the stories behind each character unfolds in
												the form of nft drops. Monthly scavenger hunts where
												holders that participate will amass all sorts of
												treasure.
											</p>
										</div>
									</div>
									<div class="panel" ref={panel2}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												MGB is a handcrafted collection of 10,010 characters
												developed by notable Artists around the world. Access
												Exclusive drops, random experiences and more. Journey
												along as the stories behind each character unfolds in
												the form of nft drops. Monthly scavenger hunts where
												holders that participate will amass all sorts of
												treasure.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="items-right">
							<div className="que">
								<img src={question} alt="img.jpg" />
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Faq;
