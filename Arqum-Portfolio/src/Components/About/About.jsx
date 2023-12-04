import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
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
			<Navbar />
			<div className="aboutContainer">
				<div className="About">
					<img className="aboutImg" src="MyImg.jpeg" />
					<div className="aboutData">
						<h1 className="dataHead">
							Arqum <span>Ahmad</span>
						</h1>
						<p className="dataSubHead">
							Creative{" "}
							<span>
								{currentRole === "React.js developer" ? " React.js developer" : ""}
								{currentRole === "Next.js developer" ? " Next.js Developer" : ""}
							</span>
						</p>
						<div className="underline"></div>
						<p className="aboutMe">
							My name is Arqum Ahmad. I am a Frontend developer, and I'm very passionate and dedicated to my work. With
							1 year experience as a professional Frontend developer, I have acquired the skills and knowledge.
						</p>
						<button className="learnMore">
							<a href="https://drive.google.com/file/d/1pRpem98zmItWFrJtzAKrAvTuFNE8rVqH/view"> Learn More </a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
