/// funcion para capturar datos ingresados cuando se registran con una clase Registrado que es el objeto de los registrados////
function capturar() {
  class Registrado {
    constructor(usuario, nombre, email, contraseña) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.contraseña = contraseña;
    }
  }
  /// aca con el value traigo el valor que ponen en el input//
  let capturarUsuario = document.getElementById("user").value;
  let capturarNombre = document.getElementById("name").value;
  let capturarEmail = document.getElementById("lname").value;
  let capturarContraseña = document.getElementById("pass").value;
  nuevoRegistrado = new Registrado(
    capturarUsuario,
    capturarNombre,
    capturarEmail,
    capturarContraseña
  );
  if (
    capturarUsuario != "" &&
    capturarNombre != "" &&
    capturarEmail != "" &&
    capturarContraseña != ""
  ) {
    console.log(nuevoRegistrado);
    document.getElementById("regis").innerHTML +=
      "<h3>Listo!" +
      capturarNombre +
      " Quedaste Registrado Como : " +
      capturarUsuario +
      " te llegara un email de confirmacion a " +
      capturarEmail;
    ArrayRegistrados.push(nuevoRegistrado);
  }
}
let ArrayRegistrados = [];
let UsuarioLogeado = null;
// ACA HICE UN if CON¿ UN CONDICIONAL DE QUE EL PASS SEA IGUAL QUE A LA
//CONTRASEÑA INGRESADA POR EL USUARIO

function Loggearse() {
  let usuarioL = document.getElementById("userlogin").value;
  let contraseña = document.getElementById("passlogin").value;
  UsuarioLogeado = ArrayRegistrados.find(
    (registro) =>
      registro.usuario == usuarioL && registro.contraseña == contraseña
  );
  //si el usuario y la contraseña son iguales a los de uno del objeto del array devolver true//
  if (UsuarioLogeado) {
    document.getElementById("logeo").innerHTML += "La Contraseña Es correcta";
  } else {
    document.getElementById("logeo").innerHTML +=
      "Contraseña incorrecta, intente nuevamente";
  }
}
// aca hice una funcion Presupuesto donde te indica si ingresar 1 o 2 depende el tipo de cartel, luego la cantidad de metros
//que necesita de cartel, tambien que tire error si es otro valor diferente a 1 o 2,
// depende el tipo que elija hace una cuenta diferente por la cantidad de metros ingresada

//hago clase para los objetos, que seran 3 tipos
//diferentes de carteles, front- back-ligth y vinilo.
class cartel {
  constructor(nombre, precio, stock, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
  }
}
//creo los objetos//
let cartelFront = new cartel("cartel front", 3000, true, "lona");
let cartelBack = new cartel("cartel back", 4000, true, "lona");
let Vinilo = new cartel("vinilo", 8500, true, "vinilo");

//creo array //
const carteles = [];
/// agrego con push cartelFront, cartelBack, Vinilo//
carteles.push(cartelFront);
carteles.push(cartelBack);
carteles.push(Vinilo);
console.log(carteles);
/// filtro del array creado los carteles que son de lona//
let cartelesDeLona = carteles.filter((cartel) => cartel.categoria == "lona");
console.log(cartelesDeLona);

function Presupuesto() {
  let carte = "";
  alert(" que tipo de cartel necesita?");
  alert("1- cartel front \n  2- cartel back-light");
  let seleccionCartel = parseInt(
    prompt("ingrese el tipo de cartel que necesita (1) o (2)")
  );
  let primerNumero = parseInt(prompt("ingresa los metros que necesita"));
  while (
    (seleccionCartel != 1 && seleccionCartel != 2) ||
    seleccionCartel == "" ||
    primerNumero < 0 ||
    primerNumero == ""
  ) {
    alert("error, seleccione una opcion valida");
    alert("1- cartel front \n  2- cartel back-light");
    seleccionCartel = parseInt(
      prompt("ingrese el tipo de cartel que necesita (1) o (2)")
    );
    primerNumero = parseInt(prompt("ingresa los metros que necesita"));
  }
  if (seleccionCartel == 1 && seleccionCartel != "") {
    carte = "Front";
    let resultado = primerNumero * cartelFront.precio;
    if (UsuarioLogeado) {
      resultado = resultado * 0.9;
      document.getElementById("cuerpoPresupuesto").innerHTML +=
        " <tr><td>" +
        carte +
        "</td><td>" +
        primerNumero +
        "</td><td> $" +
        resultado +
        "</td></tr> ";
    } else {
      resultado = primerNumero * cartelFront.precio;
      document.getElementById("cuerpoPresupuesto").innerHTML +=
        " <tr><td>" +
        carte +
        "</td><td>" +
        primerNumero +
        "</td><td> $" +
        resultado +
        "</td></tr> ";
    }
  }

  if (seleccionCartel == 2 && seleccionCartel != "") {
    carte = "Back-Ligth";
    let resultado = primerNumero * cartelBack.precio;
    if (UsuarioLogeado) {
      resultado = resultado * 0.9;
      document.getElementById("cuerpoPresupuesto").innerHTML +=
        " <tr><td>" +
        carte +
        "</td><td>" +
        primerNumero +
        "</td><td> $" +
        resultado +
        "</td></tr> ";
    } else {
      document.getElementById("cuerpoPresupuesto").innerHTML +=
        " <tr><td>" +
        carte +
        "</td><td>" +
        primerNumero +
        "</td><td> $" +
        resultado +
        "</td></tr> ";
    }
  }
}
