import React from "react";
import Layout from "../../components/layout/Layout";
import "./mint.scss";
import { faq, faqover } from "../../assets";

function Mint() {
	return (
		<div className="mint">
			<Layout background={faq} overlay={faqover}>
				<div className="mint-container">
					<h1>Mint</h1>
					<p className="mt-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<div className="flex items-center justify-between mint-flex mt-6">
						<div className="item">
							<div className="flex-item py-3 rounded-md">
								<h1>07</h1>
							</div>
							<p className="text-bottom text-center">DAYS</p>
						</div>
						<div className="item">
							<div className="flex-item py-3 rounded-md">
								<h1>11</h1>
							</div>
							<p className="text-bottom text-center">HOURS</p>
						</div>
						<div className="item">
							<div className="flex-item py-3 rounded-md">
								<h1>01</h1>
							</div>
							<p className="text-bottom text-center">MINUTES</p>
						</div>
						<div className="item">
							<div className="flex-item py-3 rounded-md">
								<h1>02</h1>
							</div>
							<p className="text-bottom text-center">SECONDS</p>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Mint;
