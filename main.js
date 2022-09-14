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
      timer: 4000,
    });
    console.log(nuevoRegistrado);
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
  if (UsuarioLogeado && usuarioL != "" && contraseña != "") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Contraseña Correcta",
      showConfirmButton: true,
      timer: 4000,
    });
  } else if (UsuarioLogeado == false || (usuarioL != "" && contraseña != "")) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Contraseña Incorrecta",
      timer: 2000,
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
let bk = document.getElementById("backl");
fro.addEventListener("click", () => {
  fro.style.backgroundColor = "green";
  bk.style.backgroundColor = "";

  front = true;
  backl = false;
});
bk.addEventListener("click", () => {
  fro.style.backgroundColor = "";
  bk.style.backgroundColor = "green";

  backl = true;
  front = false;
});

// aca hice una funcion Presupuesto donde elige por medio de botones el tipo de cartel, luego ingresaa en el imput number la cantidad de metros
//que necesita de cartel, si lo campos estan vacios no hace nada, asi como si es menor a 0.
// depende el tipo que elija hace una cuenta diferente por la cantidad de metros ingresada, tambien verifica si esta registrado y le suma un 10 %
//de descuento al precio final
let arrayFinal = [];
function Presupuesto() {
  let presufinish= document.getElementById(`presuFinal`);

  let imputNumber = document.getElementById("number").value;
  let resultadoF = imputNumber * cartelFront.precio;
  let resultadoB = imputNumber * cartelBack.precio;
  let descuentoB = resultadoB * 0.9;
  let descuentoF = resultadoF * 0.9;
  if (front == true && UsuarioLogeado && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
<tr><td>
<p>CARTEL FRONT</p>
</td>
<td>
<p>${imputNumber}</p>
</td>
<td>
<p>${descuentoF}</p>
</td>
<td> <button  onclick ="deletear(this);"> borrar</button> </td>
</tr>
`;

    arrayFinal.push(descuentoF);

    const resultado = arrayFinal.reduce((acc, item) => {
      return (acc = acc + item);
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "El Total De Tu Presupuesto Para Cartel Front Es: $ " + descuentoF,
      showConfirmButton: true,
      timer: 6000,
    });

/*     document.removeChild(presufinish);/*  

   /*  presufinish.replaceChild(`<p>${resultado}</p>`,presufinish.children[0]); */
    presufinish.innerHTML += `<p>${resultado}</p>`; 
    


  } else if (front == true && imputNumber != "" && imputNumber > 0) {
 document.getElementById("cuerpoPresupuesto").innerHTML += `
    
<tr><td>
<p>CARTEL FRONT</p>
</td>
<td>
<p>${imputNumber}</p>
</td>
<td>
<p>${resultadoF}</p>
</td>
<td> <button  onclick ="deletear(this);"> borrar</button> </td>
</tr>
`;
    arrayFinal.push(resultadoF);
    
    const resultado = arrayFinal.reduce((acc, item) => {
      acc = parseInt(acc) + parseInt(item);
      return acc;
    });
    
  /*   pres.replaceChild(resultado,press.children[0]); */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El Total De Tu Presupuesto Para Cartel Front Es: $ " + resultadoF,
      showConfirmButton: true,
      timer: 6000,
    });

/* 
    presufinish.children[0].replaceWith(resultado); */
/*     document.removeChild(presufinish); */
    /* presufinish.replaceChild(`<p>${resultado}</p>`,presufinish.children[0]); */
   let y= presufinish.innerHTML += `<p>${resultado}</p>`;
  } else if (
    backl == true &&
    UsuarioLogeado &&
    imputNumber != "" &&
    imputNumber > 0
  ) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
    <tr><td>
    <p>CARTEL BACK-LIGHT</p>
    </td>
    <td>
    <p>${imputNumber}</p>
    </td>
    <td>
    <p>${descuentoB}</p>
    </td>
    <td> <button  onclick ="deletear(this);"> borrar</button> </td>
    </tr>
    `;
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "El Total De Tu Presupuesto Para Cartel Back Light Es: $ " + descuentoB,
      showConfirmButton: true,
      timer: 6000,
    });
  } else if (backl == true && imputNumber != "" && imputNumber > 0) {
    document.getElementById("cuerpoPresupuesto").innerHTML += `
    <tr><td>
    <p>CARTEL BACK-LIGHT</p>
    </td>
    <td>
    <p>${imputNumber}</p>
    </td>
    <td>
    <p>${resultadoB}</p>
    </td>
    <td> <button  onclick ="deletear(this);"> borrar</button> </td>
    </tr>
    `;

    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "El Total De Tu Presupuesto Para Cartel Back Light Es: $ " + resultadoB,
      showConfirmButton: true,
      timer: 6000,
    });
  }

/*   presufinish.remove("p"[1]); */

}

function del(el) {
  const item = el.parentElement;
  item.remove();
}


function deletear(el) {
  const item = el.parentElement.parentElement;
  item.remove();

}

/* const resultado = arrayFinal.reduce((acc , item ) => {
return acc = acc + item;
})
 */
