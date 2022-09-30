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
  let resetea = document.getElementById("resetearformu");


  nuevoRegistrado = new Registrado(
    capturarUsuario,
    capturarNombre,
    capturarEmail,
    capturarContraseña
  );

  let valido = validarCorreo(capturarEmail);
  let nombValido = nombreT(capturarNombre);
  UsuarioNoDisponible = ArrayRegistrados.find(
    ///
    (registro) => registro.usuario == capturarUsuario
  );
  if (UsuarioNoDisponible) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El Nombre De Usuario Ya Fue Usado, Prueba Otro ",
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 4000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });

  } else if (
    capturarUsuario != "" &&
    nombValido == true &&
    valido == true &&
    capturarContraseña != ""
  ) {
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "Listo!  " +
        capturarNombre +
        " Quedaste registrado como: " +
        capturarUsuario +
        " te llegara un email de confirmacion a:  " +
        capturarEmail,
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 4000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
    console.log(nuevoRegistrado);
    ArrayRegistrados.push(nuevoRegistrado);
    guardarLocalStorage();
    resetea.reset();
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
function Deslogearse() {
  (document.getElementById("regitre").innerHTML = ` 
   <h2 class="mt-4"> Login </h2>
   <form class="formu">
            <h2 class="mt-4"> Login </h2>
            <input id="primerImput" type="text" placeholder="Usuario">
            <input id="segundoImput" type="password" placeholder="Contraseña">
          </form>
  <button id="logear">Iniciar Sesion</button>
  <h3 id="logeo"></h3> 
  `),
    document.getElementById("logear").addEventListener("click", Loggearse);
  UsuarioLogeado = false;
}
// ACA HICE UN if CON UN CONDICIONAL DE QUE EL PASS SEA IGUAL QUE A LA
//CONTRASEÑA INGRESADA POR EL USUARIO
//FUNCION PARA LOGGERASE//
function Loggearse() {
  let usuarioL = document.getElementById("primerImput").value;
  let contraseña = document.getElementById("segundoImput").value;
  UsuarioLogeado = ArrayRegistrados.find(
    (registro) =>
      registro.usuario == usuarioL && registro.contraseña == contraseña
  );
  if (UsuarioLogeado && usuarioL != "" && contraseña != "") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Contraseña Correcta",
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 4000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
    document.getElementById(
      "regitre"
    ).innerHTML = ` <p class="sesionIniciada">INICIASTE SESION COMO: ${usuarioL} </p> <button onclick = "Deslogearse();"> Salir de la sesion </button>
    `;
  } else if (UsuarioLogeado == false || (usuarioL != "" && contraseña != "")) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Contraseña Incorrecta",
      timer: 4000,
      confirmButtonColor: "#386dbd",
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
  }
}

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
carteles.push(cartelFront, cartelBack, Vinilo);
console.log(carteles);
/// filtro del array creado los carteles que son de lona//
let cartelesDeLona = carteles.filter((cartel) => cartel.categoria == "lona");
console.log(cartelesDeLona);

document.getElementById("registrar").addEventListener("click", capturar);
document.getElementById("logear").addEventListener("click", Loggearse);

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
let bk = document.getElementById("backl");
fro.addEventListener("click", () => {
  fro.style.backgroundColor = "blue";
  bk.style.backgroundColor = "";

  front = true;
  backl = false;
});
bk.addEventListener("click", () => {
  fro.style.backgroundColor = "";
  bk.style.backgroundColor = "blue";

  backl = true;
  front = false;
});

// aca hice una funcion Presupuesto donde elige por medio de botones el tipo de cartel, luego ingresaa en el imput number la cantidad de metros
//que necesita de cartel, si lo campos estan vacios no hace nada, asi como si es menor a 0.
// depende el tipo que elija hace una cuenta diferente por la cantidad de metros ingresada, tambien verifica si esta registrado y le suma un 10 %
//de descuento al precio final
let arrayFinal = [];
let total = null;

function Presupuesto() {
  let presufinish = document.getElementById(`presuFinal`);
  let imputNumber = document.getElementById("number").value;
  let resultadoF = imputNumber * cartelFront.precio;
  let resultadoB = imputNumber * cartelBack.precio;
  let descuentoB = resultadoB * 0.9;
  let descuentoF = resultadoF * 0.9;
  if (front == true && UsuarioLogeado && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
<tr ><td>
<p >CARTEL FRONT</p>
</td>
<td>
<p>${imputNumber}</p>
</td>
<td>
<p>${descuentoF}</p>
</td>
</tr>
`;

    arrayFinal.push(descuentoF);

    const resultado = arrayFinal.reduce((acc, item) => {
      return (acc = acc + item);
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title:
        '<spam class ="parrafo">El Total De Tu Presupuesto Para Cartel Front Es: $' +
        descuentoF +
        "</spam>",
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 6000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });

    presufinish.innerHTML += `<p id ="pres" > $${resultado} </p>`;

    presufinish.removeChild(presufinish.getElementsByTagName("p")[0]);
  } else if (front == true && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
    
<tr><td>
<p  >CARTEL FRONT</p>
</td>
<td>
<p>${imputNumber}</p>
</td>
<td>
<p>${resultadoF}</p>
</td>
</tr>
`;
    arrayFinal.push(resultadoF);

    const resultado = arrayFinal.reduce((acc, item) => {
      acc = parseInt(acc) + parseInt(item);
      return acc;
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "El Total De Tu Presupuesto Para Cartel Front Es: $ " + resultadoF,
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 6000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });

    presufinish.innerHTML += `<p id ="pres" > $${resultado} </p>`;
    total = total + resultado;

    presufinish.removeChild(presufinish.getElementsByTagName("p")[0]);
  } else if (
    backl == true &&
    UsuarioLogeado &&
    imputNumber != "" &&
    imputNumber > 0
  ) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
    <tr ><td>
    <p >CARTEL BACK-LIGHT </p>
    </td>
    <td>
    <p>${imputNumber}</p>
    </td>
    <td>
    <p>${descuentoB}</p>
    </td>
    </tr>
    `;

    arrayFinal.push(descuentoB);

    const resultado = arrayFinal.reduce((acc, item) => {
      return (acc = acc + item);
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "El Total De Tu Presupuesto Para Cartel Back Light Es: $ " + descuentoB,
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 6000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
    presufinish.innerHTML += `<p id ="pres" > $${resultado} </p>`;
    total = total + resultado;

    presufinish.removeChild(presufinish.getElementsByTagName("p")[0]); // ESTE ES EL QUE FUNCIONA///////////////
  } else if (backl == true && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
    <tr ><td>
    <p >CARTEL BACK-LIGHT </p>
    </td>
    <td>
    <p>${imputNumber}</p>
    </td>
    <td>
    <p>${resultadoB}</p>
    </td>
    </tr>
    `;

    arrayFinal.push(resultadoB);

    const resultado = arrayFinal.reduce((acc, item) => {
      return (acc = acc + item);
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "El Total De Tu Presupuesto Para Cartel Back Light Es: $ " + resultadoB,
      showConfirmButton: true,
      confirmButtonColor: "#386dbd",
      timer: 6000,
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
    presufinish.innerHTML += `<p id ="pres" > $${resultado} </p>`;
    total = total + resultado;

    presufinish.removeChild(presufinish.getElementsByTagName("p")[0]); // ESTE ES EL QUE FUNCIONA///////////////
  }
}
//funcion reiniciar//
function reiniciar() {
  document.getElementById("total0").addEventListener("click", () => {
    document.getElementById("presuFinal").innerHTML = "<p>$0</p>";
    document.getElementById("cuerpoPresupuesto").innerHTML = "";
    total = 0;
    arrayFinal = [];
  });
}
//validar correo//
function validarCorreo(correo) {
  let expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let esValido = expReg.test(correo);
  if (esValido != true) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Los Datos ingresados no son validos",
      showConfirmButton: true,
      timer: 3000,
      confirmButtonColor: "#386dbd",
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
  }
  return esValido;
}
//validar nombre//
function nombreT(nomb) {
  let expReg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let esValido = expReg.test(nomb);
  if (esValido != true) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El nombre  ingresado no es valido",
      showConfirmButton: true,
      timer: 3000,
      confirmButtonColor: "#386dbd",
      background: "#009ddd",
      customClass: {
        title: "titulo",
      },
    });
  }
  return esValido;
}
