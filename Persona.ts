import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona{ //abstarct
    private _nombre:string;
    private _apellido:string;
    private _edad: number;
    private _DNI: string;
    private _cumpleaños: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion [];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor (nombre:string,apellidos:string,edad:number,DNI:string,cumpleaños:Date,colorFavorito:string,sexo:string,direcciones: Direccion[], mails: Mail[],telefono: Telefono[],notas:string){
        this._nombre= nombre;
        this._apellido= apellidos;
        this._edad=edad;
        this._DNI= DNI;
        this._cumpleaños=cumpleaños;
        this._colorFavorito=colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefono;
        this._notas = notas;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre (nombre:string){
        this._nombre = nombre;
    }

    get apellido (){
        return this._apellido;
    }

    set apellido (apellido:string){
        this._apellido = apellido;
    }

    get edad (){
        return this._edad;
    }

    set edad (edad:number){
        this._edad = edad ;
    }

    get DNI (){
        return this._DNI;
    }

    set DNI (DNI:string){
        this._DNI = DNI;
    }

    get cumpleaños (){
        return this._cumpleaños;
    }

    set cumpleaños (cumpleaños: Date){
        this._cumpleaños = cumpleaños;
    }

    get colorFavorito (){
        return this._colorFavorito;
    }

    set colorFavorito (colorFavorito: string){
        this._colorFavorito = colorFavorito;
    }

    get sexo (){
        return this._sexo;
    }

    set sexo (sexo: string){
        this._sexo = sexo;
    }

    get direccion (){
        return this._direcciones;
    }

    set direccion (direccion: Direccion[]){
        this._direcciones = direccion;
    }

    get mail (){
        return this._mails;
    }

    set mail (mail: Mail[]){
        this._mails = mail;
    }

    get telefono (){
        return this._telefonos;
    }

    set telefono (telefono: Telefono[]){
        this._telefonos = telefono;
    }

    get notas (){
        return this._notas;
    }

    set notas (notas: string){
        this._notas = notas;
    }

    agregardireccion (direccion:Direccion) {
        this._direcciones.push(direccion)
    }

    agregarmail (mail:Mail){
        this._mails.push(mail)
    }

    agregartelefono (telefono: Telefono){
        this._telefonos.push(telefono)
    }
}
