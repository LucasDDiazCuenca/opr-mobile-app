export default function AboutMe() {
	return (
		<div className="flex flex-col items-center mt-20">
			<h1>Sobre Mi</h1>
			<br />
			<p>
				Hola, soy <span className="text-cyan-500 font-bold">Amir</span>, un apasionado jugador de juegos de mesa
				y wargames. Después de explorar diversos juegos, ambientaciones y sistemas, encontré en OPR un sistema
				tan complejo como deseo, de fácil acceso y que me permite cambiar de ambientación y juego sin tener que
				sumergirme en densos manuales.
			</p>
			<p>
				Me preocupo profundamente por nuestra comunidad y estoy comprometido a contribuir a su crecimiento. Si
				tienes alguna consulta o duda sobre el tema, no dudes en contactarme a través de las siguientes vías:
			</p>

			<br />
			<p>
				<a className="text-cyan-500" href="https://t.me/OprimaelLike" target="_blank" rel="noopener noreferrer">
					Telegram
				</a>
			</p>
			<p className="mt-3">
				<a
					className="text-cyan-500"
					href="https://www.youtube.com/@OPRimaelLike"
					target="_blank"
					rel="noopener noreferrer"
				>
					Youtube
				</a>
			</p>
			<p className="mt-5">¡Espero que disfrutes y formes parte de esta emocionante comunidad!</p>
		</div>
	);
}
