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
   appendearAlArray();
   console.log (nuevoRegistrado);
   // si le saco el let se conviert en objeto global y la puedo usar en todos lados //
  alert("listo quedaste registrado como: "+ capturarUsuario + "te enviaremos un email de confirmacion al email: "+capturarEmail); 
 }
  // cada vez que  se registre va a ejecutar la funcion de abajo apendear al array//asi se guarda sino se borra
 let ArrayRegistrados = [];
  //esta funcion va a appendear los registrados con push al array creado arriba
  function appendearAlArray() {
    ArrayRegistrados.push(nuevoRegistrado);

  }
    console.log (ArrayRegistrados);








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

// ACA HICE UN if CON UN CONDICIONAL DE QUE EL PASS SEA IGUAL QUE A LA
//CONTRASEÑA INGRESADA POR EL USUARIO

function Loggearse() {
  let contraseña = document.getElementById("passlogin").value;
  let pass = "contraseña";
  if (contraseña != pass) {
    alert("la contraseña es incorrecta, vuelve a intentar");
  } else alert("contraseña correcta");
}

// aca hice una funcion Presupuesto donde te indica si ingresar 1 o 2 depende el tipo de cartel, luego la cantidad de metros
//que necesita de cartel, tambien que tire error si es otro valor diferente a 1 o 2,
// depende el tipo que elija hace una cuenta diferente por la cantidad de metros ingresada

function Presupuesto() {
  alert(" que tipo de cartel necesita?");
  alert("1- cartel front \n  2- cartel back-light");
  let seleccionCartel = parseInt(
    prompt("ingrese el tipo de cartel que necesita (1) o (2)")
  );
  let primerNumero = parseInt(prompt("ingresa los metros que necesita"));
  while (
    seleccionCartel != 1 &&
    seleccionCartel != 2 ||
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
  if (seleccionCartel == 1 && seleccionCartel!="") {
    let resultado = primerNumero * cartelFront.precio;
    alert("el precio total aproximado es: $ " + resultado);
  } else if (seleccionCartel ==2  && seleccionCartel!=""){
    let resultado = primerNumero * cartelBack.precio;
    alert("el precio total aproximado es: $ " + resultado);
  }else ( alert ("Error \n disculpe las molestias \n  vuelva a intentarlo nuevamente"))
}
