import { Headline } from "../../components/shared/headline"
import { useEffect, useState } from "react"
import { getBlogs } from "../../services/data.service"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const AuthorList = styled.ul`
	display: flex;
	gap: .2em;
	flex-wrap: wrap;

	li {
		color: var(--font-white);
		transition: background-color .3s;
		padding: .5em 1em;
		margin: .2em 0;
		background-color: #7E7E7E16;
		border-radius: 15px;

		&:hover {
			background-color: #3054a2;
		}
	}
`

const Authors = () => {
	const [authors, setAuthors] = useState<Array<string>>([])

	useEffect(() => {
		getBlogs().then(({data, success}) =>
			success &&
			setAuthors([...Array.from(new Set(data.map(blog =>
				(blog.author))
				.sort().filter(val =>
					val !== '')))]
			)
		)
	}, [])

	return (
		<>
			<Headline>Authors</Headline>
			<AuthorList>
				{authors.map((author, index) =>
					<Link
						key={index}
						to={{pathname: '/', search: `?author=${author}`}}
					>
						<li>{author}</li>
					</Link>
				)}
			</AuthorList>
		</>
	)
}

export default Authors
