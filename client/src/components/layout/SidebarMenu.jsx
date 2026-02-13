import { NavLink } from "react-router-dom"
import { X } from 'lucide-react'

const SidebarMenu = ({ isOpen, setIsOpen, menuItems }) => {
	return (
		<nav
			className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
			isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<button
				onClick={() => setIsOpen(false)}
				className="absolute top-4 right-4 text-2xl hover:text-pink-400"
			>
				<X />
			</button>

			<ul className="mt-20 flex flex-col px-2 gap-2">
				{menuItems.map((item) => (
					<li key={item.name}>
						<NavLink
							to={item.path}
							onClick={() => setIsOpen(false)}
							className={({ isActive }) =>
								`flex flex-col rounded-full px-6 py-4 ${isActive ? "bg-gray-100" : "hover:text-pink-400"}`
							}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SidebarMenu