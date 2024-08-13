class Cliente {
    #nombre
    #impuesto
    constructor (nombre, impuesto) {
      this.#nombre = nombre
      this.#impuesto = impuesto
    }
  
    get nombre() {
      return this.#nombre
    }
  
    set nombre(nuevoNombre) {
      return this.#nombre = nuevoNombre
    }
  
    get impuesto() {
      return this.#impuesto
    }
  
    set impuesto(nuevoImpuesto) {
      return this.#impuesto = nuevoImpuesto
    }
  
    calcularImpuesto() {
      //desestructuracion de datos creado en la instancia new Impuesto
      //que se guardaron en Cliente como propiedad impuesto
      const { montoBrutoAnual, deducciones } = this.#impuesto;
      //cálculo
      return (montoBrutoAnual - deducciones) * 0.21;
    }
  }
  
  export {
    Cliente
  }