export class Direccion{
    private _calle:string;
    private _numero: number;
    private _piso: number | boolean;
    private _letra: string | boolean;
    private _codigopostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor (calle: string, numero: number, piso:number | boolean, letra: string | boolean, codigopostal: number, poblacion: string, provincia: string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    get calle (){
        return this._calle;
    }

    set calle (calle:string){
        this._calle = calle;
    }

    get numero (){
        return this._numero;
    }

    set numero (numero:number){
        this._numero = numero;
    }

    get piso (){
        return this._piso;
    }

    set piso (piso:number | boolean){
        this._piso = piso;
    }

    get letra(){
        return this._letra;
    }

    set letra(letra:string | boolean){
        this._letra = letra;
    }

    get codigopostal (){
        return this._codigopostal;
    }

    set codigopostal (codigopostal:number){
        this._codigopostal = codigopostal;
    }

    get poblacion (){
        return this._poblacion;
    }

    set poblacion (poblacion:string){
        this._poblacion = poblacion;
    }

    get provincia (){
        return this._provincia;
    }

    set provincia (provincia:string){
        this._provincia = provincia;
    }
    
}