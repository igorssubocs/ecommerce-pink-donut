import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./routes/AppRouter";

const App = () => {
	return (
		<Router>
			<AppRoutes />
			<Analytics />
		</Router>
	)
}

export default App