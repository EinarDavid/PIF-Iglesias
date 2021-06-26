import {Dimensions} from 'react-native';

const config = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height - 45, 
};
const strings={
    NETX: '>',
    PREV: '<',
    TITULOSPLASH1: 'Bienvenido',
    CONTENIDOSPLASH1: 'Mediante esta aplicacion podras ver todas las actividades que tu iglesia publique, asi para estar al tanto y no te pierdas de ningun evento.',
    TITULO1: 'Bienvenido',
    TITULO2: 'App Mobile',
    TITULO3: 'App Web',
    INICIARSESION:'INICIAR SESIÓN',
    GUARDAR:'GUARDAR',
    TITLE_INICIAR_SESION: ' Iniciar Sesión',
    CI_ERROR: 'Ci Invalido',
    PASS_ERROR: 'Password Invalido',
    EMPTY_TITLE_PERFIL: 'Revisa los campos de Texto',
    EMPTY_TITLE: 'Review Email/Password values',
    EMPTY_VALUES: 'Empty values detected',
    NAMEIGLESIA: 'Palabra de FE',
    FE_IGUAL_AMOR: '✞=♡',
    DESCRIPTION: '“SIVIENDO AL SEÑOR DESDE 1950”',
    MISION: 'MISIÓN',
    VISION: 'VISIÓN',
    RES_SOCIAL: 'RESPONSABILIDAD SOCIAL',
    PASTORES: 'PASTORES',
    ACTIVIDAD: 'Actividades',
    ACT_DES: 'Mira todo lo nuevo que se viene',
    NOMBRE:'Einar Villarroel',
    RECUERDOS:'Recuerdos',
}
export default{
    CONFIG: config,
    STRING: strings,
}