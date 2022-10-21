import React from "react";
import { logo } from "../../assets";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar pt-9 px-10">
			<div className="navbar-top flex items-center justify-between">
				<div className="nav-left z-50">
					<img src={logo} alt="img.jpg" className="logo" />
				</div>
				<div className="nav-right flex items-center gap-10">
					<Link to="/">Home</Link>
					<Link to="/story">Story</Link>
					<Link to="/faq">Faq</Link>
					<a href="/">White Paper</a>
					<Link to="/mint">Mint</Link>
					<a href="/">Whitelist</a>
					<Link to="/team">Team</Link>
					<a href="/">Roadmap</a>
					<a href="/">NFT Drops</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
