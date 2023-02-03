/**
 * Creacion de la interfaz dispositivo que contiene los atributos de este
 * @author ernesto
 */
export default interface Device {
    id:string;
    nombre:string;
    tipo:string;
    uid:string;
    imgAbierto:Blob;
    imgCerrado:Blob;
    imgEspera:Blob;
}