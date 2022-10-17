import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./layout.scss";

function Layout({ children, ...props }) {
	return (
		<div
			className="layout"
			style={{
				background: `url(${props.background})`,
			}}
		>
			<div className="overlay z-10">
				<img src={props.overlay} alt="img.jpg" />
			</div>
			<Navbar />
			{children}
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Layout;
