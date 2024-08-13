"use strict";

var _cliente = require("./cliente.mjs");
var _impuestos = require("./impuestos.mjs");
//crear instancia impuesto
var impuesto1 = new _impuestos.Impuestos(1000000, 80000);
//pasa estos datos al segundo parametro de cliente
var cliente1 = new _cliente.Cliente('Tulio Triviño', impuesto1);
var impuesto2 = new _impuestos.Impuestos(2000000, 160000);
var cliente2 = new _cliente.Cliente('Juan Carlos Bodoque', impuesto2);

//-- mostrar en HTML y consola
var infoCliente = document.getElementById("info");
infoCliente.innerHTML = "\n  <p>El impuesto a pagar por ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto(), "</p>\n  <p>El impuesto a pagar por ").concat(cliente2.nombre, " es ").concat(cliente2.calcularImpuesto(), "</p>\n");
console.log("El impuesto a pagar por ".concat(cliente1.nombre, " es ").concat(cliente1.calcularImpuesto()));
console.log("El impuesto a pagar por ".concat(cliente2.nombre, " es ").concat(cliente2.calcularImpuesto()));