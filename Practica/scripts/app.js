function calculadora (){

const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const operador = document.querySelector('input[name="operador"]:checked');

if(!operador){
    Swal.fire("Error", "Debes seleccionar un operador", "error");
}else if (!num1 || !num2){
    Swal.fire("Error","Faltan valores por ingresar", "error");
}else{
    switch(operador.id){
        case 'suma':
            result = num1 + num2;
        break
        case 'resta':
            result = num1 - num2;
        break
        case 'multiplicacion':
            result = num1 * num2;
        break
        case 'division':
            result = num1 / num2;
        break
    }

    Swal.fire("El resultado es: ", "" + result, "succes");
}
}