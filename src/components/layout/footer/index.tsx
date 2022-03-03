import styled from "styled-components"

const StyledFooter = styled.footer`
	display: flex;
	padding: 2em;
	background-color: #2e3357;
	color: #c4c4c4;
	font-weight: 600;
`

const Footer = () => {
	return <StyledFooter>&copy; Blog App 2022</StyledFooter>
}

export default Footer
