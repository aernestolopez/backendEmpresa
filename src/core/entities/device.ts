/**
 * Creacion de la interfaz dispositivo que contiene los atributos de este
 * @author ernesto
 */
export default interface Device {
    id:String;
    nombre:String;
    tipo:String;
    uid:String;
    imgAbierto:String;
    imgCerrado:String;
    imgEspera:String;
}