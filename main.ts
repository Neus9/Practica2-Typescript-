import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

//-----------------------------------------------------------------------
const direccionJose = new Direccion (
    "Avenida Palmela",
    12,
    3,
    "B",
    83730,
    "Jávea",
    "Alicante"
)

const segundadireccionJose = new Direccion (
    "Av. Blasco Ibañez",
    56,
    8,
    false,
    12345,
    "Valencia",
    "valencia"
)

const mailJose = new Mail (
    "personal",
    "jperez123@gmail.com"
)

const mailjosetrabajo = new Mail (
    "trabajo",
    "joseperez@empresa.com"
)

const telefonopersonalJose = new Telefono (
    "personal",
    684521475
)

const telefonoempresaJose = new Telefono (
    "empresa",
    688545871
)

const PersonaJose = new Persona (
    "Jose",
    "Perez Gonzalez",
    31,
    "34597825B",
    new Date (1992,1,6),
    "amarillo",
    "hombre",
    [direccionJose,segundadireccionJose],
    [mailJose,mailjosetrabajo],
    [telefonopersonalJose,telefonoempresaJose],
    "Trabaja en el departamento de Administración"
  
)
//-----------------------------------------------------------------------
const direccionMaria = new Direccion (
    "Calle Juan Ramón Jimenez",
    24,
    8,
    "C",
    86548,
    "Madrid",
    "Madrid"
)

const segundadireccionMaria = new Direccion (
    "Calle Mosen Febrer",
    6,
    false,
    false,
    88754,
    "Guadix",
    "Granada"
)


const mailMariatrabajo = new Mail (
    "trabajo",
    "mgarcia@empresa.com"
)

const telefonopersonalMaria = new Telefono (
    "personal",
    687589632
)

const telefonofijoMaria = new Telefono (
    "fijo",
    954872566
)

const PersonaMaria = new Persona (
    "Maria",
    "Garcia Lopez",
    25,
    "59782768B",
    new Date (1997,2,25),
    "rojo",
    "mujer",
    [direccionMaria,segundadireccionMaria],
    [mailMariatrabajo],
    [telefonopersonalMaria,telefonofijoMaria],
    "Trabaja en el departamento de Marketing"
  
)


//-----------------------------------------------------------------------
const direccionAntonio = new Direccion (
    "Calle Arquitecto Urteaga",
    32,
    5,
    "A",
    75952,
    "sevilla",
    "Sevilla"
)

const mailAntonio = new Mail (
    "personal",
    "aantonio3345@gmail.com"
)

const mailAntoniotrabajo = new Mail (
    "trabajo",
    "arodriguez@empresa.com"
)

const telefonopersonalAntonio = new Telefono (
    "personal",
    687745145
)

const telefonoempresaAntonio = new Telefono (
    "empresa",
    689647258
)

const PersonaAntonio = new Persona (
    "Antonio",
    "Rodriguez Fernandez",
    56,
    "85697258Y",
    new Date (1966,11,6),
    "verde",
    "hombre",
    [direccionAntonio],
    [mailAntonio, mailAntoniotrabajo],
    [telefonopersonalAntonio, telefonoempresaAntonio],
    "Trabaja en el departamento de IT"
)

//----------------------------------------------------------------------

console.log ("Contactos Agenda");
console.log (PersonaJose);
console.log (PersonaMaria);
console.log (PersonaAntonio);

//------------------------------------------------------------------------

const Agenda : Array<Persona> = new Array (PersonaJose, PersonaMaria, PersonaAntonio)

const BuscarDNI : string = "59782768B"

const Editarpersona: Persona = Agenda.find(persona => persona.DNI === BuscarDNI) as Persona;

//-------------------------------------------------------------------------

const nuevadireccion = new Direccion (
    "Avenida Jaime 1",
    14,
    2,
    "B",
    98726,
    "Elche",
    "Alicante"
)

const nuevomail = new Mail (
    "personal",
    "mmggll987@gmail.com"
)

const nuevotelefono = new Telefono (
    "personal",
    698547258
)

//--------------------------------------------------------------------------------

Editarpersona.agregardireccion(nuevadireccion);
Editarpersona.agregarmail(nuevomail);
Editarpersona.agregartelefono(nuevotelefono);

//--------------------------------------------------------------------------------

console.log ("Contactos Agenda MODIFICADOS");
console.log (PersonaJose);
console.log (PersonaMaria);
console.log (PersonaAntonio);