let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
}

// El codigo anterior incluye:
// - .document.getElementById ('length'): Esta parte del código recupera un elemento HTML por su ID, buscando específicamente un elemento con el ID "longitud".
// - .value: Después de acceder al elemento HTML, .value se utiliza para recuperar el valor ingresado en el campo de entrada asociado con ese elemento. Por ejemplo, si un usuario ingresa '5' en el campo de entrada de longitud, .value recupera la cadena '5'.
// - parseFloat(…): convierte el valor de cadena recuperado del campo de entrada en un número de punto flotante. Esta conversión garantiza que la entrada, normalmente texto introducido por el usuario, se trate como un número y pueda utilizarse en operaciones matemáticas.
// - length and width: Finalmente, los números de punto flotante obtenidos (que representan los valores de largo y ancho ingresados ​​por el usuario) se almacenan en las variables largo y ancho, respectivamente. Estas variables se utilizarán para cálculos adicionales, como determinar el área de un rectángulo en este contexto.

// Una vez que se completa el cálculo del área del rectángulo y se almacena dentro de la variable denominada área, el código proporcionado implica presentar o mostrar este resultado en la interfaz de usuario. Incluya el código dado dentro de la función después del cálculo del área.

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

// El codigo anterior incluye:
// - document.getElementById ('result'): Esta parte del código recupera un elemento HTML por su ID. Específicamente, se dirige a un elemento con el ID "resultado".
// - .innerText = The area of the rectangle is: ${area};: Una vez que se accede al elemento, .innerText se utiliza para modificar el contenido del texto dentro de ese elemento HTML.
// - 
// Las comillas invertidas y la notación ${} permiten la inclusión de variables de JavaScript dentro de una cadena (usando literales de plantilla). 