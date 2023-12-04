import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";

const Projects = () => {
	return (
		<>
			<Navbar />
			<div className="projects">
				<div className="card">
					<img src="Todo.png" />
					<p className="cardHead">To-do App</p>
					<p className="cardBody">Used to create To-do list works.</p>
					<button className="detail">
						<a href="https://todo-app-arqum.vercel.app/">Overview </a>
					</button>
				</div>
				<div className="card">
					<img src="MovieApp.png" />
					<p className="cardHead">Movie App</p>
					<p className="cardBody">Used to search Movie by name.</p>
					<button className="detail">
						<a href="https://movie-search-engine-arqum.vercel.app/">Overview </a>
					</button>
				</div>
				<div className="card card3">
					<img src="E-Commerce.png" />
					<p className="cardHead">E-Commerce</p>
					<p className="cardBody">Used for E-commerce shopping.</p>
					<button className="detail">
						<a href="https://shopchameleon.netlify.app/">Overview </a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Projects;
