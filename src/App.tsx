import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AddBlog from "./pages/AddBlog"
import Authors from "./pages/Authors"

const App = () => {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar/>
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="add-blog" element={<AddBlog/>}/>
						<Route path="authors" element={<Authors/>}/>
					</Routes>
				</main>
			</BrowserRouter>
		</>
	)
}

export default App
