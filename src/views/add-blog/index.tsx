import { Headline } from "../../components/shared/headline"
import { FormError, FormInputBox, FormWrapper } from "./style"
import { FormEvent, useState } from "react"
import { addBlog } from "../../services/data.service"
import { Blog } from "../../interfaces/blog"

const AddBlog = () => {
	const [formValue, setFormValue] = useState<Blog>({
		image: '',
		title: '',
		description: '',
		author: ''
	})

	const [errors, setErrors] = useState({
		imageUrl: false,
		title: false,
		description: false,
		author: false
	})

	const handleFormValidation = (): boolean => {
		setErrors({
			imageUrl: !formValue.image.match(/(https?:\/\/.*\.(?:png|jpg))/i),
			title: formValue.title.length === 0,
			description: formValue.description.length === 0,
			author: formValue.author.length === 0
		})

		for (const key in errors) {
			// @ts-ignore
			if (errors[key] === true) {
				return false
			}
		}

		return true
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()

		if (handleFormValidation()) {
			addBlog(formValue).then(() => {
				// TODO: message sent event
			})
		} else {
			console.log(formValue, errors)
		}
	}

	const handleInputChange = (event: FormEvent & { target: HTMLInputElement | HTMLTextAreaElement }) => {
		setFormValue({...formValue, [event.target.name]: event.target.value})
	}

	return (
		<>
			<Headline>Add Blog</Headline>
			<FormWrapper>
				<form onSubmit={handleSubmit}>
					<FormInputBox>
						<label>
							Image URL:
							<input
								type="text"
								name="image"
								placeholder="png/jpg link"
								value={formValue.image}
								onChange={handleInputChange}
								style={{borderColor: errors.imageUrl ? '#c02727' : 'var(--font-white)'}}
							/>
						</label>
						{errors.imageUrl
							? <FormError>invalid value</FormError>
							: null
						}
					</FormInputBox>
					<FormInputBox>
						<label>
							Title:
							<input
								type="text"
								name="title"
								value={formValue.title}
								onChange={handleInputChange}
								style={{borderColor: errors.title ? '#c02727' : 'var(--font-white)'}}
							/>
						</label>
						{errors.title
							? <FormError>invalid value</FormError>
							: null
						}
					</FormInputBox>
					<FormInputBox>
						<label>
							Description:
							<textarea
								name="description"
								rows={3}
								value={formValue.description}
								onChange={handleInputChange}
								style={{borderColor: errors.description ? '#c02727' : 'var(--font-white)'}}
							/>
						</label>
						{errors.description
							? <FormError>invalid value</FormError>
							: null
						}
					</FormInputBox>
					<FormInputBox>
						<label>
							Author:
							<input
								type="text"
								name="author"
								value={formValue.author}
								onChange={handleInputChange}
								style={{borderColor: errors.author ? '#c02727' : 'var(--font-white)'}}
							/>
						</label>
						{errors.author
							? <FormError>invalid value</FormError>
							: null
						}
					</FormInputBox>
					<FormInputBox>
						<button type="submit"><i
							className="fa-solid fa-plus"/> Add new blog
						</button>
					</FormInputBox>
				</form>
			</FormWrapper>
		</>
	)
}

export default AddBlog
