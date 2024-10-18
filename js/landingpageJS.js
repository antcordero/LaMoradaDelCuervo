/**********************************************************/
/*          Script for La Morada del Cuervo website       */
/*          author: Antonio Cordero Molina                */
/*          version: 2.0                                  */
/*          comments: class project 2023-24               */
/**********************************************************/

function validacion(){

    // Señal de Error
    let correcto = true;
    
    // Comprobación nombre y apellidos
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let provincia = document.getElementById('provincia').value;
    let terminos = document.getElementById('terminos');
    
    // NOMBRE
    if (nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/i.test(nombre)) {
        document.getElementById('nombreHelp').style.visibility="hidden";
        document.getElementById('nombre').style.borderColor="red"
        
        correcto = false;
    }
  
    // APELLIDOS
    if (apellidos=="" || /^\s+$/.test(apellidos) || /[0-9]/.test(apellidos) || !/[a-zñ']{2,}/i.test(apellidos)) {
        document.getElementById('apellidosHelp').style.visibility="hidden";
        document.getElementById('apellidos').style.borderColor="red"

        correcto = false;
    }
  
    // EMAIL
    if (email=="" || ! /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
        document.getElementById('emailHelp').style.visibility="hidden";
        document.getElementById('email').style.borderColor="red"   

        correcto = false;
    }
  
    // PROVINCIAS
    if (provincia=="0") {
        document.getElementById('provinciaHelp').style.visibility="hidden";
        document.getElementById('provincia').style.borderColor="red"   

        correcto = false;
    }
  
    // GÉNEROS


    // TÉRMINOS
    if (! terminos.checked) {
        document.getElementById('terminosHelp').style.visibility="hidden";
        document.getElementById('terminos').style.borderColor="red"   

        correcto = false;
    }
  
    return correcto;
  
}
  
function resetear(id) {
    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="lightgray";
}