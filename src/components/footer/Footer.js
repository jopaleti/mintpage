import React from "react";
import { dis, ins, twi, twitch } from "../../assets";
import "./footer.scss";

function Footer() {
	return (
		<div className="footer relative z-50">
			<div className="footer-content">
				<hr />
				<div className="flex items-center justify-between pt-6 pb-6">
					<div className="flex items-center gap-2 footer-lap">
						<img src={dis} alt="img.jpg" />
						<img src={twi} alt="img.jpg" />
						<img src={ins} alt="img.jpg" />
						<img src={twitch} alt="img.jpg" />
					</div>
					<div>
						<h6>Copyright © 2022 MGB. - All Rights Reserved. | Terms</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
