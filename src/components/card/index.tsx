import {
	CardDescription,
	CardFooter,
	CardImageWrapper,
	CardTitle,
	CardWrapper
} from "./style"
import { Blog } from "../../interfaces/blog"

const Card = ({...props}: Blog) => {
	const {title, image, description, author} = props

	return (
		<CardWrapper>
			<CardImageWrapper>
				<img src={image} alt="" loading="lazy"/>
			</CardImageWrapper>
			<CardTitle><p>{title}</p></CardTitle>
			<CardDescription>{description}</CardDescription>
			<CardFooter>{author}</CardFooter>
		</CardWrapper>
	)
}

export default Card
