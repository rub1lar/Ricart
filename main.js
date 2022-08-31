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
    guardarLocalStorage();
  }
}

// ACAC TRAIGO LOS ELEMENTOS DEL LOCAL STORAGE ANTES QUE NADA //
let ArrayRegistrados =
  JSON.parse(localStorage.getItem("registrados en JSON")) || [];
//ACA CREO UNA FUNCION PARA GUARDAR EN EL LOCAL STORE CADA VEZ QUE ALGUIEN SE REGISTRE//
let guardarLocalStorage = () => {
  let nuevoRegistradoEnJASON = JSON.stringify(ArrayRegistrados);
  localStorage.setItem("registrados en JSON", nuevoRegistradoEnJASON);
};

let UsuarioLogeado = null;
// ACA HICE UN if CON UN CONDICIONAL DE QUE EL PASS SEA IGUAL QUE A LA
//CONTRASEÑA INGRESADA POR EL USUARIO

function Loggearse() {
  let usuarioL = document.getElementById("primerImput").value;
  let contraseña = document.getElementById("segundoImput").value;
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
// aca hice una funcion Presupuesto donde elige por medio de botones el tipo de cartel, luego ingresaa en el imput number la cantidad de metros
//que necesita de cartel, si lo campos estan vacios no hace nada, asi como si es menor a 0.
// depende el tipo que elija hace una cuenta diferente por la cantidad de metros ingresada, tambien verifica si esta registrado y le suma un 10 %
//de descuento al precio final

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
let cartelFront = new cartel("cartel front", 8000, true, "lona");
let cartelBack = new cartel("cartel back", 14000, true, "lona");
let Vinilo = new cartel("vinilo", 800, true, "vinilo");

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

document.getElementById("logear").addEventListener("click", Loggearse);
document.getElementById("registrar").addEventListener("click", capturar);

let enterr = document.getElementById("primerImput");
enterr.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    console.log(event.code);
    document.getElementById("segundoImput").focus();
  }
});

let front = false;
let backl = false;
let fro = document.getElementById("front");
fro.addEventListener("click", () => {
  front = true;
  backl = false;
});
document.getElementById("backl").addEventListener("click", () => {
  backl = true;
  front = false;
});

function Presupuesto() {
  let imputNumber = document.getElementById("number").value;
  let resultadoF = imputNumber * cartelFront.precio;
  let resultadoB = imputNumber * cartelBack.precio;
  let descuentoB = resultadoB * 0.9;
  let descuentoF = resultadoF * 0.9;
  if (front == true && UsuarioLogeado && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML +=
      " <tr><td>" +
      "CARTEL FRONT" +
      "</td><td>" +
      imputNumber +
      "</td><td> $" +
      descuentoF +
      "</td></tr> ";
  } else if (front == true && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML +=
      " <tr><td>" +
      "CARTEL FRONT" +
      "</td><td>" +
      imputNumber +
      "</td><td> $" +
      resultadoF +
      "</td></tr> ";
  } else if (
    backl == true &&
    UsuarioLogeado &&
    imputNumber != "" &&
    imputNumber > 0
  ) {
    document.getElementById("cuerpoPresupuesto").innerHTML +=
      " <tr><td>" +
      "CARTEL BACK" +
      "</td><td>" +
      imputNumber +
      "</td><td> $" +
      descuentoB +
      "</td></tr> ";
  } else if (backl == true && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML +=
      " <tr><td>" +
      "CARTEL BACK" +
      "</td><td>" +
      imputNumber +
      "</td><td> $" +
      resultadoB +
      "</td></tr> ";
  }
}
