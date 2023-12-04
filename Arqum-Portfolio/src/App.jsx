import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</>
	);
}

export default App;
