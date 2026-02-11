import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRouter"

const Layout = () => {
	<Router>
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50 text-gray-700">
			<Header />

			<main className="container mx-auto py-20 px-4 sm:px-4 md:px-8 lg:px-10 xl:px-12 gap-10">
				<AppRoutes />
			</main>

			<Footer />
		</div>
	</Router>
}

export default Layout