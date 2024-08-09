// Importa Impuestos 
"./impuestos.mjs";

 class Cliente{
    contructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = [impuesto];
    }

    // Getter
    get nombre(){
        return this._nombre;
    }
    
    // Setter
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    // Getter
    get impuestos(){
        return this._impuestos;
    }

    //Setter
    set impuestos(impuesto) {
        this._impuesto.push(impuesto)
    }

    // Método de cálculo
    calcularImpuesto() {
        let totalImpuestos=0;
        this._impuestos.forEach(impuesto=>{
            totalImpuestos+=((impuesto.montoBrutoAnual - impuesto.deducciones) / 100) * 21})
        return totalImpuestos
    }
}

export default  Cliente;