import React, { useState } from "react";
import { bar, close, dis, ins, line, logo, twi, twitch } from "../../assets";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className="navbar pt-9 px-10">
			{/* Responsive navbar */}
			{open && (
				<div className="nav-res pt-6">
					<div className="flex gap-6 flex-col justify-center w-full h-full items-center">
						<div
							className="cursor-pointer"
							onClick={() => {
								handleClick();
							}}
						>
							<img src={close} alt="img.jpg" />
						</div>
						<Link to="/">Home</Link>
						<Link to="/story">Story</Link>
						<Link to="/faq">Faq</Link>
						<a href="/">White Paper</a>
						<Link to="/mint">Mint</Link>
						<a href="/whitelist">Whitelist</a>
						<Link to="/team">Team</Link>
						<a href="/">Roadmap</a>
						<a href="/">NFT Drops</a>
						<div>
							<img src={line} alt="img.jpg" />
						</div>
						<div className="flex items-center gap-2 mt-2">
							<img src={dis} alt="img.jpg" />
							<img src={twi} alt="img.jpg" />
							<img src={ins} alt="img.jpg" />
							<img src={twitch} alt="img.jpg" />
						</div>
					</div>
				</div>
			)}
			<div className="navbar-top flex items-center justify-between">
				<div className="nav-left z-50">
					<img src={logo} alt="img.jpg" className="logo" />
				</div>
				<div className="nav-right flex items-center gap-10 lap-right">
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
				<div
					className="bar-right cursor-pointer"
					onClick={() => {
						handleClick();
					}}
				>
					<img src={bar} alt="img.jpg" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
