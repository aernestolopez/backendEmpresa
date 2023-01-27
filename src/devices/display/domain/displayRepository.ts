import Display from "./display";
export default interface DisplayRepository {
    addDisplay(id:string, password:string):boolean;
    deleteDisplay(id:string):boolean;
    updateDisplay(id:string, password:string):boolean;
    getDisplayById(id:string):Display;
    getAllDisplay():Array<Display>;


}