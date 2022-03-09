import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlog } from "../../services/data.service"
import { Blog } from "../../interfaces/blog"
import {
	BlogHeader,
	BlogContent,
	BlogFooter,
	BlogWrapper,
	NotFound
} from "./style"

const PreviewBlog = () => {

	const [blogData, setBlogData] = useState<Blog | undefined>(undefined)
	let [isLoaded, setIsLoaded] = useState<Boolean | undefined>(undefined)
	let params = useParams()

	useEffect(() => {
		getBlog(params.id!).then(({data, success}) => {
			success && setBlogData(data)
			setIsLoaded(success)
		})
	}, [])


	if (isLoaded === false) {
		return <NotFound>
			Not found, back to <Link to="/">the homepage</Link>
		</NotFound>
	}

	if (blogData) {
		return (
			<BlogWrapper>
				<BlogHeader>
					<img src={blogData.image} alt="" loading="lazy"/>
					<h2>{blogData.title}</h2>
				</BlogHeader>
				<BlogContent>{blogData.description}</BlogContent>
				<BlogFooter>
					<Link
						to={{
							pathname: '/',
							search: `?author=${blogData.author}`
						}}
					>
						{blogData.author}
					</Link>
				</BlogFooter>
			</BlogWrapper>
		)
	}

	return (<></>)
}

export default PreviewBlog
