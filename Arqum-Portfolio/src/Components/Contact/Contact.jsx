import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLinkedin } from "react-icons/ci";

const Contact = () => {
	return (
		<>
			<Navbar />
			<div className="contact">
				<p className="getInTouch">
					Get in <span>Touch</span>
				</p>
				<div className="underline contactLine"></div>
				<div className="contactData">
					<div className="allAbout">
						<p className="address">
							<CiLocationOn className="contactIcon" />
							Thokar Niaz Baig, Lahore, Pakistan
						</p>
						<p className="number">
							<IoCallOutline className="contactIcon" />
							+92 321-1079545
						</p>
						<p className="mail">
							<CiMail className="contactIcon" />
							<a href="mailto:arqumahmad019@gmail.com">arqumahmad019@gmail.com</a>
						</p>
						<p className="linkdIn">
							<CiLinkedin className="contactIcon" />
							<a href="https://www.linkedin.com/in/arqum-ahmad-bb5851248"> @linkdIn/Arqum Ahmad </a>
						</p>
					</div>
					<div className="contactFields">
						<div className="nameEmail">
							<input type="text" className="Name" placeholder="Name" />
							<input type="text" className="Email" placeholder="Email" />
						</div>
						<textarea className="msg" placeholder="Message" />
						<button className="contactBtn">Send Message</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
