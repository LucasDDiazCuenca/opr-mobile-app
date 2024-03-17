/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Menu({
	setUnderConstruction,
	setFaseInicial,
	setFaseJuego,
	setInicio,
	setAboutThisApp,
	setAboutOpr,
	setAboutMe,
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleGoToAboutThisApp = () => {
		setIsMenuOpen(!isMenuOpen);
		setAboutThisApp(true);
		setFaseInicial(false);
		setFaseJuego(false);
		setUnderConstruction(false);
		setInicio(false);
		setAboutOpr(false);
		setAboutMe(false);
	};

	const handleGoToMainPage = () => {
		setIsMenuOpen(false);
		setInicio(true);
		setFaseInicial(false);
		setFaseJuego(false);
		setUnderConstruction(false);
		setAboutThisApp(false);
		setAboutOpr(false);
		setAboutMe(false);
	};

	const handleGoToAboutOpr = () => {
		setIsMenuOpen(!isMenuOpen);
		setAboutOpr(true);
		setFaseInicial(false);
		setFaseJuego(false);
		setUnderConstruction(false);
		setInicio(false);
		setAboutThisApp(false);
		setAboutMe(false);
	};

	const handleGoToAboutMe = () => {
		setIsMenuOpen(!isMenuOpen);
		setAboutMe(true);
		setFaseInicial(false);
		setFaseJuego(false);
		setUnderConstruction(false);
		setInicio(false);
		setAboutThisApp(false);
		setAboutOpr(false);
	};

	// const handleGoToUnderConstruction = () => {
	//   setIsMenuOpen(!isMenuOpen);
	//   setUnderConstruction(true);
	//   setFaseInicial(false);
	//   setFaseJuego(false);
	//   setInicio(false);
	//   setAboutThisApp(false);
	//   setAboutOpr(false);
	//   setAboutMe(false);
	// };

	return (
		<>
			<div className="flex items-center justify-between absolute top-0 left-0 w-full">
				<div className="flex items-center">
					<div className="mr-2" onClick={handleGoToMainPage}>
						<img src="logo.svg" alt="icono" width={80} className="m-1" />
					</div>
				</div>

				<div className="flex items-center">
					<img src="burger2.png" width={35} className="text-white m-5" onClick={toggleMenu} />
				</div>
			</div>

			{isMenuOpen && (
				<div
					className={`fixed right-0 top-0 h-full w-40 bg-[#403e41] rounded shadow z-20 transform transition-transform duration-200 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<ul className="flex flex-col justify-between items-center h-full">
						<div className="flex flex-col gap-5 text-left">
							<li className="py-2 font-bold flex items-center gap-2 mt-3" onClick={handleGoToAboutOpr}>
								<img src="icons/game.svg" alt="imagen de un icono" className="w-8" />
								Sobre OPR
							</li>
							<li
								className="py-2 font-bold flex items-center gap-2 mt-1"
								onClick={handleGoToAboutThisApp}
							>
								<img src="icons/app.svg" alt="imagen de un icono" className="w-8" />
								Sobre la app
							</li>
							<li className="py-2 font-bold flex items-center gap-2 mt-1" onClick={handleGoToAboutMe}>
								<img src="icons/me.svg" alt="imagen de un icono" className="w-8" />
								Sobre mi
							</li>
							<li
								className="py-2 font-bold flex items-center gap-2 mt-1 text-cyan-200"
								onClick={handleGoToMainPage}
							>
								<img src="icons/app-game.svg" alt="imagen de un icono" className="w-8" />
								Ir a la App
							</li>
						</div>
						<div>
							<li className="mb-4">
								<button className="bg-red-900" onClick={toggleMenu}>
									Cerrar menú
								</button>
								<span className="relative bottom-12 right-1 flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
								</span>
							</li>
						</div>
					</ul>
				</div>
			)}
		</>
	);
}
