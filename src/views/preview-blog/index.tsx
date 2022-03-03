import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlog } from "../../services/data.service"
import { Blog } from "../../interfaces/blog"

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
		<>
			<div>Found</div>
		</>
	)
}

export default PreviewBlog
