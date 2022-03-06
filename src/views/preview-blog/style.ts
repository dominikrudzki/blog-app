import styled from "styled-components"

export const BlogWrapper = styled.div`
	max-width: 1200px;
`

export const BlogHeader = styled.div`
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
		object-fit: cover;
		height: 250px;
		border-radius: 15px;
	}

	h2 {
		z-index: 5;
		color: #c4c4c4;
		text-align: center;
		margin: min(2vh, 10rem) 0;
	}
`

export const BlogContent = styled.p`
	font-size: 18px;
	color: #7e7e7e;
	white-space: pre-line;
`

export const BlogFooter = styled.p`
	padding: 1em;
	font-size: 16px;
	
	a {
		color: #b4b4c2;
	}
`
