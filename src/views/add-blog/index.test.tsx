import React from 'react'
import { render, screen } from "@testing-library/react"
import AddBlog from "./index"
import userEvent from "@testing-library/user-event"

test('all inputs should be initially empty', () => {
	render(<AddBlog/>)
	const imageUrlInput: HTMLInputElement = screen.getByRole('textbox', {name: /image url:/i})
	const titleInput: HTMLInputElement = screen.getByRole('textbox', {name: /title:/i})
	const descriptionInput: HTMLInputElement = screen.getByRole('textbox', {name: /description:/i})
	const authorInput: HTMLInputElement = screen.getByRole('textbox', {name: /author:/i})

	expect(imageUrlInput.value).toBe('')
	expect(titleInput.value).toBe('')
	expect(descriptionInput.value).toBe('')
	expect(authorInput.value).toBe('')
})

test('show error when invalid email', async () => {
	render(<AddBlog/>)

	const imageUrlInput: HTMLInputElement = screen.getByRole('textbox', {name: /image url:/i})
	const formSubmitBtn = screen.getByRole('button', {name: /add new blog/i})
	const formError = screen.queryAllByRole('alert')

	expect(formError).toHaveLength(0)

	userEvent.type(imageUrlInput, 'sdfgdfg')
	userEvent.click(formSubmitBtn)

	expect(await screen.findAllByRole('alert')).toHaveLength(4)
})
