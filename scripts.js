let inputResultado = document.getElementById("inputDisplayResultado");

let calculo = {
    primeiroValor: 0,
    segundoValor: 0,
    conta: function(){},
}

window.addEventListener("load", function() {
    atribuirEvento();
})

function atribuirEvento(){
    var i;
    for (i = 0; i < 10; i++){
        document.getElementById("bt"+i).addEventListener("click", inserirNumero)
    }
    for (i = 10; i < 22; i++){
        document.getElementById("bt"+i).addEventListener("click", operacoes)
    }
    document.getElementById("bt-1").addEventListener("click", inserirPonto)
    document.getElementById("bt-2").addEventListener("click", operacoes)

}

function inserirNumero(){
    if(inputResultado.value.includes(".")){
        inputResultado.value += event.target.value;
    }else if (inputResultado.value == "" || inputResultado.value == 0){
        inputResultado.value = event.target.value;
    }else{
        inputResultado.value += event.target.value;
    }
}

function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

function operacoes(){
    if (event.target.value == "c"){
        inputResultado.value = "";
    }
    if (event.target.value == "+"){
        calculo.primeiroValor = inputResultado.value
        inputResultado.value = ""
        calculo.conta = soma
    }
    if (event.target.value == "-"){
        calculo.primeiroValor = inputResultado.value
        inputResultado.value = ""
        calculo.conta = menos
    }
    if (event.target.value == "*"){
        calculo.primeiroValor = inputResultado.value
        inputResultado.value = ""
        calculo.conta = mult
    }
    if (event.target.value == "/"){
        calculo.primeiroValor = inputResultado.value
        inputResultado.value = ""
        calculo.conta = divide
    }
    if (event.target.value == "q"){
        calculo.primeiroValor = inputResultado.value
        calculo.conta = quadrado 
        inputResultado.value = calculo.conta(Number(calculo.primeiroValor))
        calculo.primeiroValor = 0
        calculo.segundoValor = 0
        calculo.conta = null
    }
    if (event.target.value == "!"){
        calculo.primeiroValor = inputResultado.value
        calculo.conta = fatorial 
        inputResultado.value = calculo.conta(Number(calculo.primeiroValor))
        calculo.primeiroValor = 0
        calculo.segundoValor = 0
        calculo.conta = null
    }
    if (event.target.value == "q2"){
        calculo.primeiroValor = inputResultado.value
        inputResultado.value = ""
        calculo.conta = quadrado2
    }
    if (event.target.value == "+-"){
        if ((inputResultado.value === "" || isNaN(inputResultado.value))){
        }else{
            inputResultado.value *= -1 
        }
    }
    if (event.target.value == "PI"){
        inputResultado.value = Math.PI
    }
    if (event.target.value == "RQ"){
        calculo.primeiroValor = inputResultado.value
        calculo.conta = raizQuadrada 
        inputResultado.value = calculo.conta(Number(calculo.primeiroValor))
        calculo.primeiroValor = 0
        calculo.segundoValor = 0
        calculo.conta = null
    }
    if (event.target.value == "RQy"){
        calculo.primeiroValor = inputResultado.value
        calculo.conta = raiz
        inputResultado.value = calculo.conta(Number(calculo.primeiroValor))
        calculo.primeiroValor = 0
        calculo.segundoValor = 0
        calculo.conta = null
    }
    if (event.target.value == "="){
        calculo.segundoValor = inputResultado.value
        inputResultado.value = calculo.conta(Number(calculo.primeiroValor), Number(calculo.segundoValor))
        calculo.primeiroValor = 0
        calculo.segundoValor = 0
        calculo.conta = null
    }
}

function soma(a, b){
    return a + b;
}

function menos(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function divide(a, b){
    if (b == 0){
        return alert("Nunca dividirás por zero!")
    }
    return a / b;
}

function quadrado(a){
    return a * a
}

function quadrado2(a, b){
    return a ** b
}

function fatorial(a){

    var fat = 1;
    var i;

    if (a < 0){
        return alert("Número igual ou maior que zero para o fatorial")
    }else{
        for(i = 1; i <= a; i++){
            fat *= i;
        }
    }
    return fat
}

function raizQuadrada(a){
    return Math.sqrt(a)
}

function raiz(a){
    return Math.cbrt(a)
}
