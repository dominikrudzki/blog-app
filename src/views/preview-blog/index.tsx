import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlog } from "../../services/data.service"
import { Blog } from "../../interfaces/blog"
import { BlogHeader, BlogContent, BlogFooter, BlogWrapper } from "./style"

const PreviewBlog = () => {

	const [blogData, setBlogData] = useState<Blog | null>(null)
	let params = useParams()

	useEffect(() => {
		getBlog(params.id!).then(({data, ok}) => {
			console.log(data)
			ok && setBlogData(data)
		})
	}, [])

	if (!blogData) {
		return <h2>
			Not found, back to <Link to="/">the homepage</Link>
		</h2>
	}

	return (
		<BlogWrapper>
			<BlogHeader>
				<img src={blogData.image} alt="" loading="lazy"/>
				<h2>{blogData.title}</h2>
			</BlogHeader>
			<BlogContent>{blogData.description}</BlogContent>
			<BlogFooter>
				<Link to="/author">{blogData.author}</Link>
			</BlogFooter>
		</BlogWrapper>
	)
}

export default PreviewBlog
