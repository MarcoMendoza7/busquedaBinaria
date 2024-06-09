
const BINARIO = document.querySelector("#busquedaBinario")
BINARIO.addEventListener("submit", reset)
function reset(evt){
    evt.preventDefault();
}

function arregloBinario (){
    let n = parseInt (prompt("Número de Elementos"));
    let a = Array(n);
    for (let c = 0; c < n; c++){
        a[c] = parseInt(prompt("Ingrese Elemento " + (c+1)));
        console.log(a[c])
    }
    console.log("****Lista Original****");
    imprimir(a);
    elementoBuscadoBinario(a);
}

function imprimir(a){
    for (let c in a){
        console.log(a[c]);
        let imprimir = document.getElementById("resultadoB");
        imprimir.textContent = `ARREGLO: ${a}`;
    }
}

function elementoBuscadoBinario(a){   
    a.sort((a, b) => a - b);
    const valorABuscar = parseInt(prompt(" Ingrese el número que desea buscar en el arreglo"));
    let inicio = 0;
    let fin = a.length - 1;
    let encontrado = false;
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (a[medio] === valorABuscar) {
            let imprimirR = document.getElementById("resultadoBi");
            imprimirR.textContent = `EL NUMERO: ${valorABuscar} ESTA EN LA POSICIÓN ${medio} DEL ARREGLO.`;
            encontrado = true;
            break;
        } else if (a[medio] < valorABuscar) {
            inicio = medio + 1; 
        } else {
            fin = medio - 1; 
        }
    }
    if (!encontrado) {
        let imprimirRR = document.getElementById("resultadoBi");
        imprimirRR.textContent = `EL NÚMERO ${valorABuscar} NO SE ENCONTRÓ EN EL ARREGLO.`;
    }
}

