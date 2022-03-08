import { Headline } from "../../components/shared/headline"
import { FormError, FormInputBox, FormWrapper } from "./style"
import { addBlog } from "../../services/data.service"
import { Blog } from "../../interfaces/blog"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

const AddBlog = () => {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const {
		register, handleSubmit, formState: {errors}, reset
	} = useForm<Blog>({})

	const onSubmit: SubmitHandler<Blog> = (data) => {
		addBlog(data).then(() => {
			reset()
			setIsSubmitted(true)
			setTimeout(() => {
				setIsSubmitted(false)
			}, 3000)
		})
	}

	return (
		<>
			<Headline>Add Blog</Headline>
			<FormWrapper>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInputBox>
						<label>
							Image URL:
							<input
								type="text"
								placeholder="png/jpg link"
								{...register('image', {
									required: true,
									pattern: /(https?:\/\/.*\.(?:png|jpg))/i
								})}
								style={{borderColor: errors.image && '#c02727'}}
							/>
						</label>
						{errors.image && <FormError>invalid value</FormError>}
					</FormInputBox>
					<FormInputBox>
						<label>
							Title:
							<input
								type="text"
								{...register('title', {
									required: true,
									min: 1
								})}
								style={{borderColor: errors.title && '#c02727'}}
							/>
						</label>
						{errors.title && <FormError>invalid value</FormError>}
					</FormInputBox>
					<FormInputBox>
						<label>
							Description:
							<textarea
								rows={3}
								{...register('description', {
									required: true,
									min: 1
								})}
								style={{borderColor: errors.description && '#c02727'}}
							/>
						</label>
						{errors.description &&
							<FormError>invalid value</FormError>}
					</FormInputBox>
					<FormInputBox>
						<label>
							Author:
							<input
								type="text"
								{...register('author', {
									required: true,
									min: 1
								})}
								style={{borderColor: errors.author && '#c02727'}}
							/>
						</label>
						{errors.author && <FormError>invalid value</FormError>}
					</FormInputBox>
					<FormInputBox>
						<button
							type="submit"
							disabled={isSubmitted}
							style={{borderColor: isSubmitted ? '#4BB543' : 'initial'}}
						>
							{
								!isSubmitted
									? <><i className="fa-solid fa-plus"/> Add
										new blog</>
									: <><i className="fa-solid fa-plus"/> Blod
										added</>
							}
						</button>
					</FormInputBox>
				</form>
			</FormWrapper>
		</>
	)
}

export default AddBlog
