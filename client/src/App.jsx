import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRouter";

const App = () => {
	return (
		<Router>
			<AppRoutes />
		</Router>
	)
}

export default App