import { Nav, NavButton, NavMenu, NavLink } from './style'

const Navbar = () => {
	return (
		<Nav>
			<NavLink to="/"><h1>Blog</h1></NavLink>
			<NavMenu>
				<NavLink to="add-blog">Add new</NavLink>
				<NavLink to="authors">Show authors</NavLink>
			</NavMenu>
			<NavButton>
				<i className="fa-solid fa-bars"/>
			</NavButton>
		</Nav>
	)
}

export default Navbar
