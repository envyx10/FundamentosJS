



// Versión de aprendizaje de GEMINI

class ConfiguracionApp {
    
    static instancia;
    modoOscuro = false;
    idioma = 'es';

    constructor(idiomaInicial) {
        // 1. EL GUARDIÁN:
        // ¿Ya existe una configuración cargada en memoria?
        if (ConfiguracionApp.instancia) {
            // Si existe, TE DEVUELVO LA QUE YA HABÍA.
            // Ignoro totalmente los argumentos nuevos que me pases.
            return ConfiguracionApp.instancia;
        }

        // 2. LA CREACIÓN (Solo pasa una vez en la vida de la app):
        this.idioma = idiomaInicial;
        ConfiguracionApp.instancia = this;
    }
}

// --- SIMULACIÓN DE LA APP ---

// 1. Al iniciar la app (Login)
const config1 = new ConfiguracionApp('en'); // Creo la config en INGLÉS
console.log(config1.idioma); // 'en'

// ... Pasa el tiempo, el usuario navega ...

// 2. En otra pantalla (Perfil)
// Intento crear una config nueva en FRANCÉS por error
const config2 = new ConfiguracionApp('fr'); 

// PREGUNTA CLAVE: ¿Qué idioma tiene config2?
console.log(config2.idioma); // ¡ES 'en'! 

// ¿Por qué?
// Porque el Singleton protegió la configuración original. 
// No permitió que se sobrescribiera o se creara una copia paralela.
// config1 y config2 SON EL MISMO OBJETO.

console.log(config1 === config2); // true