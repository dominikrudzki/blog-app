import { config } from "../config"
import { Blog } from "../interfaces/blog"

export const getBlogs = (author?: string | null): Promise<{ data: Array<Blog>, success: boolean }> => {
	return fetch(`http://localhost:${config.jsonServerUrl}/blogs?_sort=id&_order=desc${author && '&author=' + author}`)
		.then(res => res.json().then(data => ({data, success: res.ok})))
}

export const getBlog = (id: string): Promise<{ data: Blog, success: boolean }> => {
	return fetch(`http://localhost:${config.jsonServerUrl}/blogs/${id}`)
		.then(res => res.json().then(data => ({data, success: res.ok})))
}

export const addBlog = (data: Blog): Promise<{ success: boolean }> => {
	return fetch(`http://localhost:${config.jsonServerUrl}/blogs`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json().then(data => ({data, success: res.ok})))
}
