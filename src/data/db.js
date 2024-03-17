//DB

//PREGUNTAS
const PREGUNTA_INICIAL = "¿Que tipo de unidad es?";
const PREGUNTA_OBJETIVO_IA = "Hay algún objetivo que no esté bajo el control de la IA?";
const PREGUNTA_AVANZA_RANGO_TIRO = "Si avanzas, ¿Habrá enemigos a rango de tiro?";
const PREGUNTA_ENEMIGO_CAMINO = "¿Hay enemigos en el camino?";
const PREGUNTA_ENEMIGO_ALCANCE_CARGA = "¿Hay enemigos a alcance de carga?";
const PREGUNTA_ENEMIGO_RANGO_CORRE_PERO_NO_SI_AVANZA = "¿Está el objetivo a rango si corres pero no si avanzas?";

//SENTENCIAS FIN ARBOL ALGORITMO
const CARGA = "Carga";
const CARGA_CORRE = "Carga si es posible, de lo contrario corre hacia el objetivo";
const CARGA_AVANZA_DISPARA =
	"Carga contra el enemigo si es posible, de lo contrario, avance hacia el objetivo y dispara si es posible, de lo contrario corre hacia el objetivo";
const CORRE_DIR_ENEMIGO = "Corre hacia el enemigo";
const CORRE_DIR_OBJETIVO = "Corre hacia el objetivo";
const AVANZA_DISPARA = "Avanza hacia el objetivo y dispara si es posible";

//SECCION FINAL
const NIVEL_FINAL = {
	CARGA_CORRE,
	CORRE_DIR_OBJETIVO,
	CORRE_DIR_ENEMIGO,
	CARGA,
	AVANZA_DISPARA,
	CARGA_AVANZA_DISPARA,
};

//SECCION DE RAMA DE ARBOL RELACIONADO CON DISPARO -- D --
const DISPARO = {
	nivel1: {
		PREGUNTA_OBJETIVO_IA,
		respuesta: null,
	},
	nivel2: {
		PREGUNTA_AVANZA_RANGO_TIRO,
		respuesta: null,
	},
	NIVEL_FINAL,
};

//SECCION DE RAMA DE ARBOL RELACIONADO CON HIBRIDA -- H --
const HIBRIDA = {
	nivel1: {
		PREGUNTA_OBJETIVO_IA,
		respuesta: null,
	},
	nivel2: {
		PREGUNTA_ENEMIGO_ALCANCE_CARGA,
		PREGUNTA_ENEMIGO_CAMINO,
		respuesta: null,
	},
	nivel3: {
		PREGUNTA_ENEMIGO_RANGO_CORRE_PERO_NO_SI_AVANZA,
		PREGUNTA_AVANZA_RANGO_TIRO,
		respuesta: null,
	},
	nivel4: {
		PREGUNTA_AVANZA_RANGO_TIRO,
		respuesta: null,
	},
	NIVEL_FINAL,
};

//SECCION DE RAMA DE ARBOL RELACIONADO CON CUERPO A CUERPO -- C --
const CUERPO_A_CUERPO = {
	nivel1: {
		PREGUNTA_OBJETIVO_IA,
		respuesta: null,
	},
	nivel2: {
		PREGUNTA_ENEMIGO_CAMINO,
		PREGUNTA_ENEMIGO_ALCANCE_CARGA,
		respuesta: null,
	},
	NIVEL_FINAL,
};

export const DB = { DISPARO, HIBRIDA, CUERPO_A_CUERPO, PREGUNTA_INICIAL, NIVEL_FINAL };
