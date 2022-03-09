import Card from "../../components/card"
import { Headline } from "../../components/shared/headline"
import { Blog } from "../../interfaces/blog"
import { useEffect, useState } from "react"
import { getBlogs } from "../../services/data.service"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

export const Blogs = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;

	a {
		width: 100%;
		max-width: 400px;
	}
`

const Home = () => {
	const location = useLocation()
	const [headline, setHeadline] = useState('All')
	const [blogs, setBlogs] = useState<Array<Blog>>([])

	useEffect(() => {
		const author = new URLSearchParams(location.search).get('author')
		setHeadline(author ? `${author}'s` : 'All')
		getBlogs(author).then(({data, success}) => success && setBlogs(data))
	}, [location])

	return (
		<>
			<Headline>{headline} blogs</Headline>
			<Blogs>
				{blogs.map((blog: Blog) => (
					<Link key={blog.id} to={`blog/${blog.id}`}>
						<Card  {...blog}/>
					</Link>
				))}
			</Blogs>
		</>
	)
}

export default Home
