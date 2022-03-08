import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/home"
import Navbar from "./components/layout/navbar"
import AddBlog from "./views/add-blog"
import Authors from "./views/authors"
import Footer from "./components/layout/footer"
import PreviewBlog from "./views/preview-blog"

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar/>
				<main>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="add-blog" element={<AddBlog/>}/>
						<Route path="authors" element={<Authors/>}/>
						<Route path="author?:author" element={<Home/>}/>
						<Route path="blog/:id" element={<PreviewBlog/>}/>
					</Routes>
				</main>
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
