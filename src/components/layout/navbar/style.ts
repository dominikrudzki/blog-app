import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
	position: sticky;
	top: 0;
	background-color: #21285b;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: .5rem;
	padding-bottom: .5rem;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
	z-index: 10;

	h1 {
		margin: 0;
		color: #c4c4c4;
	}
`

export const NavButton = styled.button`
	border: none;
	cursor: pointer;
	color: #c4c4c4;
	font-size: 24px;
	background-color: unset;
	padding: 10px;

	@media (min-width: 768px) {
		display: none;
	}
`

export const NavMenu = styled.div<{ isOpen?: boolean }>`
	position: fixed;
	top: 76px;
	left: 0;
	border-top: 1px solid #1a1a1a;
	display: ${props => props.isOpen ? 'block' : 'none'};
	background-color: #21285b;
	width: 100%;
	box-shadow: #00000072;
	z-index: 1;

	ul {
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	@media (min-width: 768px) {
		border: none;
		position: initial;
		display: block;

		ul {
			flex-direction: row;
			justify-content: flex-end;
		}
	}
`

export const NavLink = styled(Link)`
	color: #c4c4c4;
	padding-bottom: .4em;
	border-bottom: 1px solid #939191;
	font-size: 18px;
	font-weight: 600;
	margin: 0 1em;
	display: grid;
	grid-template-columns: 30px 1fr;


	&:hover {
		border-bottom-color: #fff;
	}

	i {
		justify-self: center;
		align-self: center;
	}

	@media (min-width: 768px) {
		border: none;
		padding: 0;
	}
`

export const Backdrop = styled.div`
	position: fixed;
	top: 76px;
	left: 0;
	height: calc(100vh - 76px);
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);

	@media (min-width: 768px) {
		display: none;
	}
`
