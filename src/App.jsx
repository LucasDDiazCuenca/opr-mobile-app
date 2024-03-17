import { useState } from "react";
import "./App.css";
import { DB } from "./data/db";
import InitPage from "./pages/InitPage";
import FirstQuestionPage from "./pages/FirstQuestionPage";
import QuestionsPage from "./pages/QuestionsPage";
import Menu from "./pages/Menu";
import UnderConstruction from "./pages/UnderConstruction";
import Footer from "./pages/Footer";
import AboutThisApp from "./pages/AboutThisApp";
import AboutOpr from "./pages/AboutOpr";
import AboutMe from "./pages/AboutMe";

function App() {
	const [faseInicial, setFaseInicial] = useState(false);
	const [faseJuego, setFaseJuego] = useState(false);
	const [tipoUnidad, setTipoUnidad] = useState(null); // ["D", "H", "C"]
	const [inicio, setInicio] = useState(true);
	const [underConstruction, setUnderConstruction] = useState(false);
	const [aboutThisApp, setAboutThisApp] = useState(false);
	const [aboutOpr, setAboutOpr] = useState(false);
	const [aboutMe, setAboutMe] = useState(false);

	return (
		<>
			{
				<Menu
					setUnderConstruction={setUnderConstruction}
					setFaseInicial={setFaseInicial}
					setFaseJuego={setFaseJuego}
					setInicio={setInicio}
					setAboutThisApp={setAboutThisApp}
					setAboutOpr={setAboutOpr}
					setAboutMe={setAboutMe}
				></Menu>
			}

			{underConstruction && (
				<UnderConstruction
					setAboutOpr={setAboutOpr}
					setUnderConstruction={setUnderConstruction}
					setFaseInicial={setFaseInicial}
					setFaseJuego={setFaseJuego}
					setInicio={setInicio}
					setAboutThisApp={setAboutThisApp}
					setAboutMe={setAboutMe}
				></UnderConstruction>
			)}

			{aboutThisApp && <AboutThisApp></AboutThisApp>}

			{aboutOpr && <AboutOpr></AboutOpr>}

			{aboutMe && <AboutMe></AboutMe>}

			{inicio && !faseInicial && !faseJuego && <InitPage setFaseInicial={setFaseInicial} setInicio={setInicio} />}

			{!inicio && faseInicial && !faseJuego && (
				<FirstQuestionPage
					setFaseJuego={setFaseJuego}
					db={DB}
					setFaseInicial={setFaseInicial}
					setTipoUnidad={setTipoUnidad}
				/>
			)}

			{!inicio && !faseInicial && faseJuego && (
				<QuestionsPage
					db={DB}
					tipoUnidad={tipoUnidad}
					setFaseInicial={setFaseInicial}
					setInicio={setInicio}
					setFaseJuego={setFaseJuego}
				/>
			)}

			<Footer></Footer>
		</>
	);
}

export default App;
