import Lathe from "./lathe";

export default interface LatheRepository{
    addLathe(id:string, password:string):boolean;
    deleteLathe(id:string):boolean;
    updateLathe(id:string):boolean

    getLatheById(id:string):Lathe;
    getAllLathe():Array<Lathe>
}