export function evalObjetForm(objForm) {
  for (let prop in objForm) {
    if (
      objForm[prop] === '' ||
      objForm[prop] === null ||
      objForm[prop] === undefined
    ) {
      return false;
      break;
    }
    if (prop === 'email' || prop === 'correo') {
      if (!validarCorreo(objForm[prop])) {
        console.log('email', prop);
        return false;
        break;
      }
    } else {
      if (!validarCaracteres(objForm[prop])) {
        console.log('caracter', prop);
        return false;
        break;
      }
    }
  }
  return true;
}

//funcion para validar caracteres especiales
export function validarCaracteres(dato) {
  const car = /[$%&|<>]/;
  return !car.test(dato);
}

//funcion para validar correo
export function validarCorreo(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//funcion para validar numeros 
export function validarSoloNumeros(dato) {
  const car = /^([0-9])*$/;
  return car.test(dato);
}

// funcion URL
export function evalURL(url){
  let regx =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gm
  return regx.test(url)
}