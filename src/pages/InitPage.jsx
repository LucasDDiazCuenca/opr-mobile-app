// eslint-disable-next-line react/prop-types
export default function InitPage({ setInicio, setFaseInicial }) {
	const handleNextPhase = () => {
		setInicio(false);
		setFaseInicial(true);
	};

	return (
		<div className="w-full flex flex-wrap justify-center mt-20">
			<h1 className="text-emerald-600 w-full">OPR</h1>
			<h2 className="text-2xl my-4 w-full">One Page Rules</h2>

			<picture>
				<source srcSet="initPage/portada.avif" type="image/avif" />
				<source srcSet="initPage/portada.webp" type="image/webp" />
				<img src="initPage/portada.webp" alt="imagen principal de OPR" width={250} />
			</picture>

			<p className="text-md my-6 w-full">
				Aplicación para jugar a los juegos de One Page Rules en solitario contra la IA
			</p>

			<button className="hover:border-zinc-500" onClick={handleNextPhase}>
				Iniciar Partida
			</button>
		</div>
	);
}
