import {Cliente} from './cliente.mjs';
import {Impuestos} from './impuestos.mjs';

//crear instancia impuesto
const impuesto1 = new Impuestos(1000000, 80000);
//pasa estos datos al segundo parametro de cliente
const cliente1 = new Cliente('Tulio Triviño', impuesto1);

const impuesto2 = new Impuestos(2000000, 160000);
const cliente2 = new Cliente('Juan Carlos Bodoque', impuesto2);


//-- mostrar en HTML y consola
let infoCliente = document.getElementById("info")
infoCliente.innerHTML = `
  <p>El impuesto a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}</p>
  <p>El impuesto a pagar por ${cliente2.nombre} es ${cliente2.calcularImpuesto()}</p>
`
console.log(`El impuesto a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`)
console.log(`El impuesto a pagar por ${cliente2.nombre} es ${cliente2.calcularImpuesto()}`)