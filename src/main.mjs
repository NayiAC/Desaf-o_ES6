//importar las dos clases necesarias
import Cliente from "./cliente.mjs";
import Impuestos from "./impuestos.mjs";

// Creando una instancia de Impuestos 
let impuestos_cliente1 = new Impuestos(750000,150000);

// Probando métodos Setter de la clase Impuestos
impuestos_cliente1.monto_bruto_anual = 850000;
impuestos_cliente1.deducciones = 200000;

// Creando una instancia de la clase Cliente
let cliente1 = new Cliente('Juanin',impuestos_cliente1);

// Probando método Setter de la clase Cliente
cliente1.nombre = 'Tulio';

// Imprimiendo información en consola a través de métodos Getter
console.log(`Nombre Cliente: ${cliente1.nombre}`);
console.log(`Monto bruto anual: ${impuestos_cliente1.monto_bruto_anual}`);
console.log(`Deducciones: ${impuestos_cliente1.deducciones}`);

// Imprimiendo en consola el impuesto calculado con método 
// calcularImpuesto() de la clase Cliente.
console.log(`Impuesto: ${cliente1.calcularImpuesto(impuestos_cliente1.monto_bruto_anual,impuestos_cliente1.deducciones)}`);