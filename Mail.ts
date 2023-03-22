export class Mail  {
    private _tipo: string;
    private _direccion: string;

    constructor (tipo: string, direccion: string){
        this._tipo = tipo;
        this._direccion= direccion;
    }
    
        get direccion(){
            return this._direccion;
        }
    
        set direccion (direccion:string){
            this._direccion = direccion;
        }
    
        get tipo (){
            return this._tipo;
        }
    
        set tipo (tipo:string){
            this._tipo = tipo;
        }
    
}