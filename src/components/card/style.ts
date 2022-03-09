import styled from "styled-components"

export const CardWrapper = styled.div`
	background-color: #7E7E7E16;
	box-shadow: #00000059 0 5px 15px;
	padding: 20px 15px;
	border-radius: 15px;
	cursor: pointer;
	max-width: 400px;
	transition: transform 0.3s;
	height: 100%;
	box-sizing: border-box;

	&:hover {
		transform: scale(1.05);
	}
`

export const CardImageWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 10px;

	img {
		display: block;
		width: 100%;
		height: 180px;
		object-fit: cover;
	}
`

export const CardTitle = styled.div`
	padding: 14px 0;

	p {
		font-size: 20px;
		font-weight: 700;
		color: #c4c4c4;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`

export const CardDescription = styled.span`
	font-size: 16px;
	font-weight: 300;
	color: #7e7e7e;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	line-clamp: 4;
	-webkit-box-orient: vertical;
`

export const CardFooter = styled.span`
	display: block;
	margin-top: 7px;
	font-size: 18px;
	color: #b4b4c2;
`
