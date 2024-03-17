/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function UnderConstruction({
	setUnderConstruction,
	setFaseInicial,
	setFaseJuego,
	setInicio,
	setAboutThisApp,
	setAboutOpr,
	setAboutMe,
}) {
	const handleGoBackToStart = () => {
		setUnderConstruction(false);
		setFaseInicial(false);
		setFaseJuego(false);
		setInicio(true);
		setAboutThisApp(false);
		setAboutOpr(false);
		setAboutMe(false);
	};

	return (
		<div className="flex flex-col items-center mt-72">
			<p>Este apartado sigue bajo construcción ⏳</p>
			<br />
			<p>Por favor, se paciente ...</p>
			<br />
			<button onClick={handleGoBackToStart}>Vover en el tiempo 🕰</button>
		</div>
	);
}
