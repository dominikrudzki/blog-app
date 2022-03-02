import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
	background-color: #21285b;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: .5rem;
	padding-bottom: .5rem;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);

	h1 {
		margin: 0;
		color: #c4c4c4;
	}
`

export const NavLink = styled(Link)`
	color: #c4c4c4;
	text-decoration: none;
`

export const NavButton = styled.button`
	border: none;
	color: #c4c4c4;
	font-size: 24px;
	background-color: unset;
`

export const NavMenu = styled.div`
	display: flex;
	gap: 10px;
`
