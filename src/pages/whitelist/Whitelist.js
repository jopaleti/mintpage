import React from "react";
import { arrbtn, faq, faqover, lnv, shield } from "../../assets";
import Layout from "../../components/layout/Layout";
import "./whitelist.scss";

function Whitelist() {
	return (
		<div className="whitelist h-full">
			<Layout background={faq} overlay={faqover}></Layout>
		</div>
	);
}

export default Whitelist;
