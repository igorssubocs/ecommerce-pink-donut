import { useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import SidebarMenu from "./SidebarMenu"
import { ShoppingCart, Menu, User } from 'lucide-react'
import { LOGO } from '../../assets/assets'
import { useSelector } from 'react-redux'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	const { user } = useSelector(state => state.auth)

	const menuItems = [
		{ name: "Home", path: "/" },
		{ name: "Catalog", path: "/catalog" }
	]

	const navLinkClass = ({ isActive }) =>
		`px-8 py-4 rounded-full ${isActive ? "bg-gray-100" : "hover:text-pink-400"
	}`

	const handleUserClick = () => {
		if (user) {
			navigate(`/profile/${user.userName}`)
		} else {
			navigate('/register')
		}
	}

	return (
		<header className="w-full relative flex justify-center" id="header">
			<div className="container py-5 px-4 sm:px-4 md:px-8 lg:px-10 xl:px-12 flex justify-between items-center">
				<NavLink to="/" title="Logo">
					<img src={LOGO} alt="Logo" className="w-16 h-16" />
				</NavLink>

				<nav className="hidden md:flex gap-2 bg-white p-1 rounded-full">
					{menuItems.map((item) => (
						<NavLink
								key={item.name}
								to={item.path}
								title={item.name}
								className={navLinkClass}
							>
							{item.name}
						</NavLink>
					))}
				</nav>

				<div className="flex items-center gap-4 bg-white p-5 rounded-full">
					<NavLink to="/cart" className="hover:text-pink-400" title="Cart">
						<ShoppingCart />
					</NavLink>
					<button 
						onClick={handleUserClick}
						className="hover:text-pink-400" 
						title={user ? 'Profile' : 'Register'}
					>
						<User />
					</button>
					<button
						className="md:hidden text-3xl focus:outline-none hover:text-pink-400"
						onClick={() => setIsOpen(true)}
					>
							<Menu />
					</button>
				</div>
			</div>
			<SidebarMenu
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				menuItems={menuItems}
			/>
		</header>
	)
}

export default Header