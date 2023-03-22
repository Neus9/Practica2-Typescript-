"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, DNI, cumpleaños, colorFavorito, sexo, direcciones, mails, telefono, notas) {
        this._nombre = nombre;
        this._apellido = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefono;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get DNI() {
        return this._DNI;
    }
    set DNI(DNI) {
        this._DNI = DNI;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get direccion() {
        return this._direcciones;
    }
    set direccion(direccion) {
        this._direcciones = direccion;
    }
    get mail() {
        return this._mails;
    }
    set mail(mail) {
        this._mails = mail;
    }
    get telefono() {
        return this._telefonos;
    }
    set telefono(telefono) {
        this._telefonos = telefono;
    }
    get notas() {
        return this._notas;
    }
    set notas(notas) {
        this._notas = notas;
    }
    agregardireccion(direccion) {
        this._direcciones.push(direccion);
    }
    agregarmail(mail) {
        this._mails.push(mail);
    }
    agregartelefono(telefono) {
        this._telefonos.push(telefono);
    }
}
exports.Persona = Persona;
