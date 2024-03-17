/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber";
import FiguresExperience from "./FiguresExperience";

export default function AboutThisApp() {
	return (
		<div className="flex flex-col items-center mt-20">
			<h2>
				Esta App fue desarollada por
				<span className="text-red-500"> Lucas Diaz</span>
			</h2>
			<br />
			<p>
				Fullstack Web Developer especializado en aplicaciones <b>SPA</b> y el uso de <b>3D</b> con Three.js y
				React Three Fiber.
			</p>
			<div className="absoulte w-screen border w-ful h-80 mt-10">
				<Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
					<FiguresExperience />
				</Canvas>
			</div>
			<br />
			<p className="mb-2">
				Durante el proceso de desarrollo de esta mini SPA, se adoptaron metodologías ágiles y se aplicó un
				enfoque de modularización para garantizar un código claro y mantenible. Además de estas prácticas
				fundamentales, se incorporaron tecnologías tales como:
			</p>
			<ul>
				<li>React</li>
				<li>Tailwind</li>
				<li>Three.js</li>
				<li>React Three Fiver</li>
				<li>Netlify</li>
			</ul>
			<p className="mt-6">Descubre más sobre mi trabajo y proyectos </p>
			<p className="my-2">
				<span className="mr-2 pb-20">
					Visita el{" "}
					<a className="text-red-500" href="https://www.lucasdiaz.xyz/">
						portfolio
					</a>
				</span>
			</p>
			<p></p>
		</div>
	);
}
