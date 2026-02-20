import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"

import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Cart from "../pages/Cart"
import Privacy from "../pages/Privacy"
import Terms from "../pages/Terms"
import Profile from "../pages/Profile"
import Checkout from "../pages/Checkout"
import Product from "../pages/Product"
import NotFound from "../pages/NotFound"

import Register from "../pages/Register"
import Login from "../pages/Login"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/product/:path" element={<Product />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes