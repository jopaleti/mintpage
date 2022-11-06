import React, { useRef, useState } from "react";
import { arrd, arrl, faq, faqover, question } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./faq.scss";

function Faq() {
	var acc = useRef();
	const [active, setActive] = useState();
	const [active1, setActive1] = useState();
	const [active2, setActive2] = useState();
	const [active3, setActive3] = useState();
	const [active4, setActive4] = useState();
	const [active5, setActive5] = useState();
	const [active6, setActive6] = useState();
	const [active7, setActive7] = useState();
	const [active8, setActive8] = useState();
	const [active9, setActive9] = useState();
	const [active10, setActive10] = useState();
	var panel = useRef();
	var panel1 = useRef();
	var panel2 = useRef();
	var panel3 = useRef();
	var panel4 = useRef();
	var panel5 = useRef();
	var panel6 = useRef();
	var panel7 = useRef();
	var panel8 = useRef();
	var panel9 = useRef();
	var panel10 = useRef();

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
				<div className="faq-container mt-12 pb-32">
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
											<p>What is the mint price?</p>
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
											<p>TBA</p>
										</div>
									</div>
									{/* <div class="panel" ref={panel2}>
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
									</div> */}
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active3 && active3
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel3, setActive3, active3);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>What are stories ?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel3}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												Stories will be origin stallments about the characters
												and highlights of their journeys into battle and on
												their scavenger hunts.
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active4 && active4
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel4, setActive4, active4);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>Why should the stories be collected ?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel4}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												After all 10 stories are collected, a limited amount of
												eggs will be available on a first come first serve
												basis.
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active5 && active5
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel5, setActive5, active5);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>What is the egg for ?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel5}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>Pets, or in a gods case, monsters.</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active10 && active10
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel10, setActive10, active10);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1> How can the stories be collected ?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel10}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												All holders with 3 different characters will be randomly
												airdropped their story. If you missed the airdrop then
												each installment of the story will be available to be
												claimed up until the next installment is released then
												holders loose their chance to claim.{" "}
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active6 && active6
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel6, setActive6, active6);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>
												What should I do if a story installment has passed?
											</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel6}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>Buy on the open market</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active7 && active7
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel7, setActive7, active7);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1>When will you be able to burn stories</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel7}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												After the 10th and final installment of stories are
												released.
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active8 && active8
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel8, setActive8, active8);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1> What is the scavenger hunt/battles?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel8}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												This will be MGB staking system where users will be able
												to stake their nft for a period of time preselected by
												the user. While the nft is locked(on a scavenger hunt or
												at battle) holders will be able to find valuables on
												their journey(randomly receive cryptocurrency or
												airdropped nft etc…)
											</p>
										</div>
									</div>
								</div>
								<div className="btn mr-7">
									<button
										className={`accordion ${
											active9 && active9
										} flex items-center justify-between`}
										onClick={() => {
											handleClick(panel9, setActive9, active9);
										}}
										ref={acc}
									>
										<div className="flex items-center gap-4">
											<small className="px-2 py-1">Q</small>
											<h1> Who created the art?</h1>
										</div>
										<div className="default">
											<img src={arrl} alt="img.jpg" />
										</div>
										<div className="act">
											<img src={arrd} alt="img.jpg" />
										</div>
									</button>

									<div class="panel" ref={panel9}>
										<div className="flex items-start gap-4">
											<small className="px-2 py-1">A</small>
											<p>
												a notable team of 7 artists with very impressive
												portfolios played a part in the creation of this
												collection. Our artists have worked on Block buster
												movies and games we’ve all admired! Meet the artists
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
