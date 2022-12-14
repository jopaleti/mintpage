import "./App.css";
import {
	Faq,
	Home,
	Mint,
	Roadmap,
	Story,
	Team,
	Whitelist,
	WhitePaper,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path={routes.home.route}
						element={<Home />}
						title={routes.home.path}
					/>
					<Route exact path={routes.faq.route} element={<Faq />} />
					<Route exact path={routes.mint.route} element={<Mint />} />
					<Route exact path={routes.team.route} element={<Team />} />
					<Route exact path={routes.story.route} element={<Story />} />
					<Route exact path={routes.whitelist.route} element={<Whitelist />} />
					<Route
						exact
						path={routes.whitepaper.route}
						element={<WhitePaper />}
					/>
					<Route exact path={routes.roadmap.route} element={<Roadmap />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
