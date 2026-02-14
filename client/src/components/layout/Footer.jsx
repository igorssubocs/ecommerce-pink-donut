import { NavLink, Link } from "react-router-dom"
import { LOGO } from '../../assets/assets'

const Footer = () => {
	const navigationLinks = [
		{ name: "Home", to: "/" },
		{ name: "Catalog", to: "/catalog" },
		{ name: "Cart", to: "/cart" },
		{ name: "Team", to: "/team" },
		{ name: "Not Found", to: "/notfound" },
	]

	const contactLinks = [
		{ name: "Telegram", href: "https://telegram.com/" },
		{ name: "Instagram", href: "https://instagram.com/" },
		{ name: "X", href: "https://x.com/" },
	]

	const supportLinks = [
		{ name: "FAQ", to: "/#faq"},
	]

	const legalLinks = [
		{ name: "Privacy Policy", to: "/privacy" },
		{ name: "Terms & Conditions", to: "/terms" },
	]

	return (
		<footer className="w-full flex justify-center">
			<div className="container py-5 px-4 sm:px-4 md:px-8 lg:px-10 xl:px-12 grid space-y-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
					<NavLink to="/" className="text-2xl font-bold text-pink-400" title="Logo">
						<img
							src={LOGO} 
							alt="Logo" 
							className="w-24 h-24 mx-auto md:mx-0" 
						/>
					</NavLink>
					<div className="flex flex-col sm:flex-row justify-between gap-5">
						<div>
							<h3 className="font-medium mb-2 text-center sm:text-left">Navigation</h3>
							<ul className="flex flex-col gap-1 text-center sm:text-left">
								{navigationLinks.map((link) => (
									<li key={link.name}>
										<NavLink to={link.to} className="hover:text-pink-400">
											{link.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-medium mb-2 text-center sm:text-left">Contact</h3>
							<ul className="flex flex-col gap-1 text-center sm:text-left">
								{contactLinks.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-pink-400"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-medium mb-2 text-center sm:text-left">Support</h3>
							<ul className="flex flex-col gap-1 text-center sm:text-left">
								{supportLinks.map((link) => (
									<li key={link.name}>
										<Link to={link.to} className="hover:text-pink-400">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-center sm:justify-between text-center gap-2 text-sm">
					<p>&copy; 2025 Donut Shop. All rights reserved.</p>
					<div className="flex gap-10 justify-center">
						{legalLinks.map(link => (
							<NavLink key={link.to} to={link.to} className="hover:text-pink-400">
								{link.name}
							</NavLink>
						))}
					</div>
					<a href="https://www.linkedin.com/in/igorssubocs" title="LinkedIn" target='_blank' className="hover:text-pink-400">Made by @igorssubocs</a>
				</div>

			</div>
		</footer>
	)
}

export default Footer