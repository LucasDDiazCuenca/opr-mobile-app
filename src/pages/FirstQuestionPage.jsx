/* eslint-disable react/prop-types */
export default function FirstQuestionPage({ setFaseJuego, setFaseInicial, db, setTipoUnidad }) {
	const disparo = "D";
	const hibrido = "H";
	const cuerpoACuerpo = "C";

	const handleNextPhase = (opcionElegida) => {
		setFaseInicial(false);
		setFaseJuego(true);
		setTipoUnidad(opcionElegida);
	};

	return (
		<div className="flex flex-col items-center mt-20">
			<img
				src="/grimdarkfuture/foto-personajes.jpeg"
				alt="Imagen de figuras en miniatura de OPR impresas en blanco y negro"
				width={250}
			/>

			<p className="text-md m-6">{db.PREGUNTA_INICIAL}</p>
			<div className="flex flex-wrap w-full gap-4 justify-between">
				<button
					className="w-full bg-emerald-900 hover:border-emerald-500"
					onClick={() => handleNextPhase(cuerpoACuerpo)}
				>
					Cuerpo a cuerpo
				</button>
				<button className="w-full bg-amber-800 hover:border-amber-500" onClick={() => handleNextPhase(disparo)}>
					Disparo
				</button>
				<button
					className="w-full bg-violet-800 hover:border-violet-500"
					onClick={() => handleNextPhase(hibrido)}
				>
					Hibrido
				</button>
			</div>
		</div>
	);
}
