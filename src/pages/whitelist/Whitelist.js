import React from "react";
import { arrbtn, faq, faqover, lnv, shield } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./whitelist.scss";

function Whitelist() {
	return (
		<div className="whitelist h-full">
			<Layout background={faq} overlay={faqover}>
				<div className="whitelist-container flex items-start justify-center py-10 h-full">
					<div className="whitelist-flex flex items-start justify-between pb-16">
						<div className="flex-left">
							<h1>Whitelist</h1>
							<p className="mt-4">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
							<div className="form-group mt-6">
								<form action="">
									<input type="text" placeholder="Eth Address" />
									<input type="text" placeholder="Discord Username" />
									<button className="submit-btn" type="submit">
										<div className="flex items-center gap-2">
											<h6>Submit</h6>
											<img src={arrbtn} alt="img.jpg" />
										</div>
									</button>
								</form>
							</div>
						</div>
						<div className="flex-right">
							<div>
								<img src={lnv} alt="img.jpg" />
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Whitelist;
