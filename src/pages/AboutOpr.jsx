export default function AboutOpr() {
	return (
		<div className="flex flex-col items-center mt-20">
			<h1>Sobre OPR</h1>
			<br />
			<p>
				<span className="text-cyan-500 font-bold">OPR</span> ofrece reglas gratuitas y fáciles de aprender para
				que puedas empezar a jugar juegos de miniaturas de ciencia ficción y fantasía sin tener un título en
				derecho. Las reglas son tan profundas como quieras. Si eres un jugador de wargames experimentado o
				quieres profundizar, consulta los libros de reglas completos, que incluyen explicaciones detalladas de
				cada regla. En cualquier caso, tú decides a qué quieres jugar.
			</p>
			<br />
			<a
				className="text-cyan-500 border-b border-b-cyan-500"
				href="https://www.onepagerules.com/"
				target="_blank"
				rel="noreferrer"
			>
				Link a la pagina oficial
			</a>

			<br />
			<picture>
				<source srcSet="aboutOpr/footer-OPR.avif" type="image/avif" />
				<source srcSet="aboutOpr/footer-OPR.webp" type="image/webp" />
				<img src="aboutOpr/footer-OPR.webp" alt="imagen de un icono" />
			</picture>
		</div>
	);
}
