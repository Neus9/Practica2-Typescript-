"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Direccion_1 = require("./Direccion");
const Telefono_1 = require("./Telefono");
const Mail_1 = require("./Mail");
//-----------------------------------------------------------------------
const direccionJose = new Direccion_1.Direccion("Avenida Palmela", 12, 3, "B", 83730, "Jávea", "Alicante");
const segundadireccionJose = new Direccion_1.Direccion("Av. Blasco Ibañez", 56, 8, false, 12345, "Valencia", "valencia");
const mailJose = new Mail_1.Mail("personal", "jperez123@gmail.com");
const mailjosetrabajo = new Mail_1.Mail("trabajo", "joseperez@empresa.com");
const telefonopersonalJose = new Telefono_1.Telefono("personal", 684521475);
const telefonoempresaJose = new Telefono_1.Telefono("empresa", 688545871);
const PersonaJose = new Persona_1.Persona("Jose", "Perez Gonzalez", 31, "34597825B", new Date(1992, 1, 6), "amarillo", "hombre", [direccionJose, segundadireccionJose], [mailJose, mailjosetrabajo], [telefonopersonalJose, telefonoempresaJose], "Trabaja en el departamento de Administración");
//-----------------------------------------------------------------------
const direccionMaria = new Direccion_1.Direccion("Calle Juan Ramón Jimenez", 24, 8, "C", 86548, "Madrid", "Madrid");
const segundadireccionMaria = new Direccion_1.Direccion("Calle Mosen Febrer", 6, false, false, 88754, "Guadix", "Granada");
const mailMariatrabajo = new Mail_1.Mail("trabajo", "mgarcia@empresa.com");
const telefonopersonalMaria = new Telefono_1.Telefono("personal", 687589632);
const telefonofijoMaria = new Telefono_1.Telefono("fijo", 954872566);
const PersonaMaria = new Persona_1.Persona("Maria", "Garcia Lopez", 25, "59782768B", new Date(1997, 2, 25), "rojo", "mujer", [direccionMaria, segundadireccionMaria], [mailMariatrabajo], [telefonopersonalMaria, telefonofijoMaria], "Trabaja en el departamento de Marketing");
//-----------------------------------------------------------------------
const direccionAntonio = new Direccion_1.Direccion("Calle Arquitecto Urteaga", 32, 5, "A", 75952, "sevilla", "Sevilla");
const mailAntonio = new Mail_1.Mail("personal", "aantonio3345@gmail.com");
const mailAntoniotrabajo = new Mail_1.Mail("trabajo", "arodriguez@empresa.com");
const telefonopersonalAntonio = new Telefono_1.Telefono("personal", 687745145);
const telefonoempresaAntonio = new Telefono_1.Telefono("empresa", 689647258);
const PersonaAntonio = new Persona_1.Persona("Antonio", "Rodriguez Fernandez", 56, "85697258Y", new Date(1966, 11, 6), "verde", "hombre", [direccionAntonio], [mailAntonio, mailAntoniotrabajo], [telefonopersonalAntonio, telefonoempresaAntonio], "Trabaja en el departamento de IT");
//----------------------------------------------------------------------
console.log("Contactos Agenda");
console.log(PersonaJose);
console.log(PersonaMaria);
console.log(PersonaAntonio);
//------------------------------------------------------------------------
const Agenda = new Array(PersonaJose, PersonaMaria, PersonaAntonio);
const BuscarDNI = "59782768B";
const Editarpersona = Agenda.find(persona => persona.DNI === BuscarDNI);
//-------------------------------------------------------------------------
const nuevadireccion = new Direccion_1.Direccion("Avenida Jaime 1", 14, 2, "B", 98726, "Elche", "Alicante");
const nuevomail = new Mail_1.Mail("personal", "mmggll987@gmail.com");
const nuevotelefono = new Telefono_1.Telefono("personal", 698547258);
//--------------------------------------------------------------------------------
Editarpersona.agregardireccion(nuevadireccion);
Editarpersona.agregarmail(nuevomail);
Editarpersona.agregartelefono(nuevotelefono);
//--------------------------------------------------------------------------------
console.log("Contactos Agenda MODIFICADOS");
console.log(PersonaJose);
console.log(PersonaMaria);
console.log(PersonaAntonio);
