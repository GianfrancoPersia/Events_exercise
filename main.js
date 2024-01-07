// 1-
const $button = document.getElementById("button")
const $cuadrado = document.getElementById("cuadrado")

$button.addEventListener("click", changeFunction)

function changeFunction() {
    if ($cuadrado.classList.contains("bg-sky-300")) {
        $cuadrado.classList.remove("bg-sky-300")
        $cuadrado.classList.add("bg-red-300")
        $cuadrado.textContent = "Rojo"
    } else if ($cuadrado.classList.contains("bg-red-300")) {
        $cuadrado.classList.remove("bg-red-300")
        $cuadrado.textContent = ""
    } else {
        $cuadrado.classList.add("bg-sky-300")
        $cuadrado.textContent = "Azul"
    }
}



// 2-
const $button_2 = document.getElementById("button_2")
const $cuadrado_2 = document.getElementById("cuadrado_2")
const $inputText = document.getElementById("inputText")

$inputText.addEventListener("input", (evento) => {
    const mostrarEvento = evento.target.value
    $cuadrado_2.textContent = mostrarEvento
    console.log(mostrarEvento)

})

$button_2.addEventListener("click", () => {
    $cuadrado_2.textContent = ""
    $inputText.value = ""
})



// 3-
const $button_3 = document.getElementById("button_3")
const estatura = document.getElementById("inputTextEstatura")
const peso = document.getElementById("inputTextPeso")
const resultado = document.getElementById("resultadoImc")

$button_3.addEventListener("click", () => {
    const imcResultado = calcularIMC()
    mostrarResultado(imcResultado)
})



function calcularIMC() {
    if (peso.value == "" || estatura.value == "") {
        alert("faltan datos")
    }
    const imc = Number(peso.value) / Number(estatura.value / 100) ** 2
    const imcFixed = imc.toFixed(2)
    return imcFixed
}

function mostrarResultado(imcFixed){
    resultado.innerHTML = crearCardIMC(imcFixed)
}

function crearCardIMC(imcFixed) {

    return `
        <div class="w-80 bg-zinc-200 rounded-lg m-4 flex flex-col justify-center p-5">
            <p class="text-xl">Resultado</p>
            <p>su indice de masa corporal es</p>
            <input type="text" value=${imcFixed} class="border-2 border-black ">
        </div>
    `
}



// 4-
const $button_4 = document.getElementById("button_4")
const monedaLocal = document.getElementById("montoLocal")
const $dolares = document.getElementById("dolares")
const $delete = document.getElementById("delete_4")

$button_4.addEventListener("click",()=>{
    const conversionResultado = convertirMoneda()
    mostrarResultadoDolares(conversionResultado)
})

function convertirMoneda (){
    if (monedaLocal.value == "") {
        alert("faltan datos")
    }
    const conversionDolares = Number(monedaLocal.value) / 500
    return conversionDolares
}


function mostrarResultadoDolares(conversionDolares){
    $dolares.innerHTML = `
        <p class="text-xl">Monto en dólares</p>
        <p>sin comas ni puntos</p>
        <input type="text" value="${conversionDolares}" id="montoDolares" class="w-full border-2 border-black">    
    `
}

$delete.addEventListener("click",()=>{
    if (monedaLocal ==""){
        alert("campus vacio")
    }
    monedaLocal.value=""
})


