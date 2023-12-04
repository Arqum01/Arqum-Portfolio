import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	const roles = ["React.js developer", "Next.js developer"];
	const [currentRole, setCurrentRole] = useState(roles[0]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]));
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<div className="homeContainer">
				<Navbar />
				<div className="Home">
					<h1 className="homeHead">
						Arqum <span>Ahmad</span>
					</h1>
					<p className="homeBody">
						Creative
						{currentRole === "React.js developer" ? " React.js developer" : ""}
						{currentRole === "Next.js developer" ? " Next.js Developer" : ""}
					</p>
					<button className="getTouch">
						<Link className="linkBtn" to="/contact">
							Get in Touch
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
