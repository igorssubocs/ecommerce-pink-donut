import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Cart from "../pages/Cart"
import Privacy from "../pages/Privacy"
import Terms from "../pages/Terms"
import Profile from "../pages/Profile"
import Checkout from "../pages/Checkout"
import Product from "../pages/Product"
import NotFound from "../pages/NotFound"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/catalog" element={<Catalog />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/profile/:id" element={<Profile />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/terms" element={<Terms />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
