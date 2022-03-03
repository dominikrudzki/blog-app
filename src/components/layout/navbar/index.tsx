import { Nav, NavButton, NavMenu, NavLink, Backdrop } from './style'
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const navLinks = [
		{link: 'add-blog', text: 'Add new', icon: 'fa-solid fa-plus'},
		{link: 'authors', text: 'Show authors', icon: 'fa-solid fa-user-group'}
	]

	return (
		<Nav>
			<Link to="/" onClick={() => setIsNavOpen(false)}><h1>Blog</h1>
			</Link>
			<NavMenu isOpen={isNavOpen}>
				<ul>
					{navLinks.map(({link, text, icon}, index) => (
						<li key={index}>
							<NavLink
								to={link}
								onClick={() => setIsNavOpen(false)}
							>
								<i className={icon}/>
								<span>{text}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</NavMenu>
			<NavButton onClick={() => setIsNavOpen(!isNavOpen)}>
				<i className={`fa-solid ${isNavOpen ? 'fa-xmark' : 'fa-bars'}`}/>
			</NavButton>
			{isNavOpen && <Backdrop onClick={() => setIsNavOpen(false)}/>}
		</Nav>
	)
}

export default Navbar
