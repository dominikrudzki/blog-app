import Card from "../../components/card"
import { Headline } from "../../components/shared/headline"
import { Blog } from "../../interfaces/blog"
import { useEffect, useState } from "react"
import { getBlogs } from "../../services/data.service"
import { Link } from "react-router-dom"

const Home = () => {

	const [blogs, setBlogs] = useState<Array<Blog>>([])

	useEffect(() => {
		getBlogs().then(data => setBlogs(data))
	}, [])

	return (
		<>
			<Headline>All blogs</Headline>
			{blogs.map((blog: Blog) => (
				<Link key={blog.id} to={`blog/${blog.id}`}>
					<Card  {...blog}/>
				</Link>
			))}
		</>
	)
}

export default Home

// TODO: add if empty
