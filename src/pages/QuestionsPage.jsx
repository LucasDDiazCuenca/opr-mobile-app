import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function QuestionsPage({ db, tipoUnidad, setFaseInicial, setInicio, setFaseJuego }) {
	const [modoJuego, setModoJuego] = useState(null); // ["H", "C", "D"
	const [primeraRonda, setPrimeraRonda] = useState(true);
	const [segundaRonda, setSegundaRonda] = useState(false);
	const [terceraRonda, setTerceraRonda] = useState(false);
	const [cuartaRonda, setCuartaRonda] = useState(false);
	const [preguntasFinales, setPreguntasFinales] = useState(false);

	useEffect(() => {
		try {
			prepareGame();
		} catch (error) {
			console.log(error);
		}
	});

	const prepareGame = () => {
		switch (tipoUnidad) {
			case "H":
				setModoJuego("H");
				break;
			case "C":
				setModoJuego("C");
				break;
			case "D":
				setModoJuego("D");
				break;
			default:
				console.log("No se ha elegido ninguna unidad");
				break;
		}
	};

	const markAnswerAsTrue = (modoJuego, db) => {
		console.log("Pregunta respondida como true");

		if (modoJuego === "C") {
			if (primeraRonda) {
				db.CUERPO_A_CUERPO.nivel1.respuesta = true;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}

			if (segundaRonda) {
				db.CUERPO_A_CUERPO.nivel2.respuesta = true;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}
		}

		if (modoJuego === "D") {
			if (primeraRonda) {
				db.DISPARO.nivel1.respuesta = true;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}

			if (segundaRonda) {
				db.DISPARO.nivel2.respuesta = true;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}
		}

		if (modoJuego === "H") {
			if (primeraRonda) {
				db.HIBRIDA.nivel1.respuesta = true;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}

			if (segundaRonda && db.HIBRIDA.nivel1.respuesta === true) {
				db.HIBRIDA.nivel2.respuesta = true;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}

			if (segundaRonda && db.HIBRIDA.nivel1.respuesta === false) {
				db.HIBRIDA.nivel2.respuesta = true;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}

			if (terceraRonda && db.HIBRIDA.nivel2.respuesta === false && db.HIBRIDA.nivel1.respuesta === false) {
				db.HIBRIDA.nivel3.respuesta = true;
				setTerceraRonda(false);
				setPreguntasFinales(true);
			}

			if (terceraRonda && db.HIBRIDA.nivel2.respuesta === false && db.HIBRIDA.nivel1.respuesta === true) {
				db.HIBRIDA.nivel3.respuesta = true;
				setTerceraRonda(false);
				setPreguntasFinales(true);
			}

			if (
				cuartaRonda &&
				db.HIBRIDA.nivel3.respuesta === false &&
				db.HIBRIDA.nivel2.respuesta === false &&
				db.HIBRIDA.nivel1.respuesta === true
			) {
				db.HIBRIDA.nivel4.respuesta = true;
				setCuartaRonda(false);
				setPreguntasFinales(true);
			}
		}
	};

	const markAnswerAsFalse = (modoJuego, db) => {
		console.log("Pregunta respondida como false");

		if (modoJuego === "C") {
			if (primeraRonda) {
				db.CUERPO_A_CUERPO.nivel1.respuesta = false;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}

			if (segundaRonda) {
				db.CUERPO_A_CUERPO.nivel2.respuesta = false;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}
		}

		if (modoJuego === "D") {
			if (primeraRonda) {
				db.DISPARO.nivel1.respuesta = false;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}
			if (segundaRonda) {
				db.DISPARO.nivel2.respuesta = false;
				setSegundaRonda(false);
				setPreguntasFinales(true);
			}
		}

		if (modoJuego === "H") {
			if (primeraRonda) {
				db.HIBRIDA.nivel1.respuesta = false;
				setPrimeraRonda(false);
				setSegundaRonda(true);
			}

			if (segundaRonda && db.HIBRIDA.nivel1.respuesta === true) {
				db.HIBRIDA.nivel2.respuesta = false;
				setSegundaRonda(false);
				setTerceraRonda(true);
			}

			if (segundaRonda && db.HIBRIDA.nivel1.respuesta === false) {
				db.HIBRIDA.nivel2.respuesta = false;
				setSegundaRonda(false);
				setTerceraRonda(true);
			}

			if (terceraRonda && db.HIBRIDA.nivel2.respuesta === false && db.HIBRIDA.nivel1.respuesta === false) {
				db.HIBRIDA.nivel3.respuesta = false;
				setTerceraRonda(false);
				setPreguntasFinales(true);
			}

			if (terceraRonda && db.HIBRIDA.nivel2.respuesta === false && db.HIBRIDA.nivel1.respuesta === true) {
				db.HIBRIDA.nivel3.respuesta = false;
				setTerceraRonda(false);
				setCuartaRonda(true);
			}

			if (
				cuartaRonda &&
				db.HIBRIDA.nivel3.respuesta === false &&
				db.HIBRIDA.nivel2.respuesta === false &&
				db.HIBRIDA.nivel1.respuesta === true
			) {
				db.HIBRIDA.nivel4.respuesta = false;
				setCuartaRonda(false);
				setPreguntasFinales(true);
			}
		}
	};

	const resetQuestions = () => {
		setPrimeraRonda(true);
		setSegundaRonda(false);
		setTerceraRonda(false);
		setPreguntasFinales(false);

		db.CUERPO_A_CUERPO.nivel1.respuesta = null;
		db.CUERPO_A_CUERPO.nivel2.respuesta = null;
		db.DISPARO.nivel1.respuesta = null;
		db.DISPARO.nivel2.respuesta = null;
		db.HIBRIDA.nivel1.respuesta = null;
		db.HIBRIDA.nivel2.respuesta = null;
		db.HIBRIDA.nivel3.respuesta = null;
	};

	const resetGame = () => {
		setFaseInicial(true);
		setInicio(false);
		setFaseJuego(false);

		db.CUERPO_A_CUERPO.nivel1.respuesta = null;
		db.CUERPO_A_CUERPO.nivel2.respuesta = null;
		db.DISPARO.nivel1.respuesta = null;
		db.DISPARO.nivel2.respuesta = null;
		db.HIBRIDA.nivel1.respuesta = null;
		db.HIBRIDA.nivel2.respuesta = null;
		db.HIBRIDA.nivel3.respuesta = null;
	};

	return (
		<>
			<div className="flex flex-col items-center mt-20">
				{preguntasFinales && <p className="text-md my-2">FASE DE INSTRUCCION DE LA IA:</p>}
				{!preguntasFinales && <p className="text-md my-2">FASE DE PREGUNTAS</p>}

				{primeraRonda && (
					<img
						className="my-3"
						src="/grimdarkfuture/foto-dispara2.webp"
						alt="Imagen de ejemplo en gris"
						width={250}
					/>
				)}
				{segundaRonda && (
					<img
						className="my-3"
						src="/grimdarkfuture/foto-cuerpo-a-cuerpo2.webp"
						alt="Imagen de ejemplo en gris"
						width={250}
					/>
				)}
				{terceraRonda && (
					<img
						className="my-3"
						src="/grimdarkfuture/foto-cuerpo-a-cuerpo.webp"
						alt="Imagen de ejemplo en gris"
						width={250}
					/>
				)}
				{cuartaRonda && (
					<img
						className="my-3"
						src="/grimdarkfuture/foto-cuerpo-a-cuerpo3.webp"
						alt="Imagen de ejemplo en gris"
						width={250}
					/>
				)}
				{preguntasFinales && (
					<img
						className="my-3"
						src="/grimdarkfuture/foto-dispara.webp"
						alt="Imagen de ejemplo en gris"
						width={250}
					/>
				)}

				{primeraRonda && (
					<>
						{modoJuego === "H" && <p>{db.HIBRIDA.nivel1.PREGUNTA_OBJETIVO_IA}</p>}
						{modoJuego === "C" && <p>{db.CUERPO_A_CUERPO.nivel1.PREGUNTA_OBJETIVO_IA}</p>}
						{modoJuego === "D" && <p>{db.DISPARO.nivel1.PREGUNTA_OBJETIVO_IA}</p>}
					</>
				)}

				{segundaRonda && (
					<>
						{modoJuego === "C" && db.CUERPO_A_CUERPO.nivel1.respuesta === true && (
							<p>{db.CUERPO_A_CUERPO.nivel2.PREGUNTA_ENEMIGO_CAMINO}</p>
						)}

						{modoJuego === "C" && db.CUERPO_A_CUERPO.nivel1.respuesta === false && (
							<p>{db.CUERPO_A_CUERPO.nivel2.PREGUNTA_ENEMIGO_ALCANCE_CARGA}</p>
						)}

						{modoJuego === "D" && db.DISPARO.nivel1.respuesta === true && (
							<p>{db.DISPARO.nivel2.PREGUNTA_AVANZA_RANGO_TIRO}</p>
						)}

						{modoJuego === "D" && db.DISPARO.nivel1.respuesta === false && (
							<p>{db.DISPARO.nivel2.PREGUNTA_AVANZA_RANGO_TIRO}</p>
						)}

						{modoJuego === "H" && db.HIBRIDA.nivel1.respuesta === true && (
							<p>{db.HIBRIDA.nivel2.PREGUNTA_ENEMIGO_CAMINO}</p>
						)}

						{modoJuego === "H" && db.HIBRIDA.nivel1.respuesta === false && (
							<p>{db.HIBRIDA.nivel2.PREGUNTA_ENEMIGO_ALCANCE_CARGA}</p>
						)}
					</>
				)}

				{terceraRonda && (
					<>
						{modoJuego === "H" &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel1.respuesta === true && (
								<p>{db.HIBRIDA.nivel3.PREGUNTA_ENEMIGO_RANGO_CORRE_PERO_NO_SI_AVANZA}</p>
							)}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel1.respuesta === false && (
								<p>{db.HIBRIDA.nivel3.PREGUNTA_AVANZA_RANGO_TIRO}</p>
							)}
					</>
				)}

				{cuartaRonda && (
					<>
						{modoJuego === "H" &&
							db.HIBRIDA.nivel3.respuesta === false &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel1.respuesta === true && (
								<p>{db.HIBRIDA.nivel4.PREGUNTA_AVANZA_RANGO_TIRO}</p>
							)}
					</>
				)}

				{preguntasFinales && (
					<>
						<p className="text-emerald-500 mb-2">INSTRUCCION FINAL:</p>

						{modoJuego === "C" &&
							db.CUERPO_A_CUERPO.nivel1.respuesta === true &&
							db.CUERPO_A_CUERPO.nivel2.respuesta === true && <p>{db.NIVEL_FINAL.CARGA_CORRE}</p>}

						{modoJuego === "C" &&
							db.CUERPO_A_CUERPO.nivel1.respuesta === true &&
							db.CUERPO_A_CUERPO.nivel2.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_OBJETIVO}</p>}

						{modoJuego === "C" &&
							db.CUERPO_A_CUERPO.nivel1.respuesta === false &&
							db.CUERPO_A_CUERPO.nivel2.respuesta === true && <p>{db.NIVEL_FINAL.CARGA}</p>}

						{modoJuego === "C" &&
							db.CUERPO_A_CUERPO.nivel1.respuesta === false &&
							db.CUERPO_A_CUERPO.nivel2.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_ENEMIGO}</p>}

						{modoJuego === "D" &&
							db.DISPARO.nivel1.respuesta === false &&
							db.DISPARO.nivel2.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_ENEMIGO}</p>}

						{modoJuego === "D" &&
							db.DISPARO.nivel1.respuesta === false &&
							db.DISPARO.nivel2.respuesta === true && <p>{db.NIVEL_FINAL.AVANZA_DISPARA}</p>}

						{modoJuego === "D" &&
							db.DISPARO.nivel1.respuesta === true &&
							db.DISPARO.nivel2.respuesta === true && <p>{db.NIVEL_FINAL.AVANZA_DISPARA}</p>}

						{modoJuego === "D" &&
							db.DISPARO.nivel1.respuesta === true &&
							db.DISPARO.nivel2.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_OBJETIVO}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === true &&
							db.HIBRIDA.nivel2.respuesta === true && (
								<p className="text-sm">{db.NIVEL_FINAL.CARGA_AVANZA_DISPARA}</p>
							)}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === true &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel3.respuesta === true && <p>{db.NIVEL_FINAL.CORRE_DIR_OBJETIVO}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === true &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel3.respuesta === false &&
							db.HIBRIDA.nivel4.respuesta === true && <p>{db.NIVEL_FINAL.AVANZA_DISPARA}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === true &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel3.respuesta === false &&
							db.HIBRIDA.nivel4.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_OBJETIVO}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === false &&
							db.HIBRIDA.nivel2.respuesta === true && <p>{db.NIVEL_FINAL.CARGA}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === false &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel3.respuesta === true && <p>{db.NIVEL_FINAL.AVANZA_DISPARA}</p>}

						{modoJuego === "H" &&
							db.HIBRIDA.nivel1.respuesta === false &&
							db.HIBRIDA.nivel2.respuesta === false &&
							db.HIBRIDA.nivel3.respuesta === false && <p>{db.NIVEL_FINAL.CORRE_DIR_ENEMIGO}</p>}
					</>
				)}

				<br />

				<div className="flex flex-wrap w-full gap-4 justify-between">
					{!preguntasFinales && (
						<>
							<button
								className="w-5/12 bg-red-800 hover:border-pink-500"
								onClick={() => markAnswerAsFalse(modoJuego, db)}
							>
								No
							</button>
							<button
								className="w-5/12 bg-emerald-800 hover:border-emerald-500"
								onClick={() => markAnswerAsTrue(modoJuego, db)}
							>
								Si
							</button>
						</>
					)}

					{preguntasFinales && (
						<>
							<button
								className="w-full bg-yellow-700 hover:border-yellow-500 mb-2"
								onClick={resetQuestions}
							>
								Reset con la misma unidad
							</button>

							<button className="w-full bg-red-800 hover:border-red-500" onClick={resetGame}>
								Volver a Elegir unidad
							</button>
						</>
					)}
				</div>
			</div>
		</>
	);
}
