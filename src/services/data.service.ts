import { config } from "../config"
import { Blog } from "../interfaces/blog"

export const getBlogs = (): Promise<Array<Blog>> => {
	return fetch(`http://localhost:${config.jsonServerUrl}/blogs`)
		.then(res => res.json())
}

export const getBlog = (id: string): Promise<{ data: Blog, ok: boolean }> => {
	return fetch(`http://localhost:${config.jsonServerUrl}/blogs/${id}`)
		.then(res => res.json().then(data => ({data, ok: res.ok})))
}
