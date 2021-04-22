var nombre_planetas = Array("Tierra", "Marte")
let distancias = [3,4,5,"67"]
const tamano = [102, 201, 893]
const planetas = []
const planeta = {
    nombre : "Tierra", 
    tamano : 30000000, 
    distanciaAlaTierra : 0, 
    distanciaAlSol : 1899999999, 
    minerales : ["mineral 1", "mineral 2", "mineral 3"]
}

planetas.push(planeta)
planetas.push({nombre : "Marte", tamano : 80000, distanciaAlaTierra : 6737333333})

let resta = (n1, n2) => n1 - n2
    
nombre_planetas[2] = "Jupiter"

console.log(nombre_planetas[10])
console.log(distancias)
console.log(tamano)

console.log("=====PLANETAS======")
console.log(planetas)
console.log(planeta)

console.log("======WHILE ======")
let i = 0
while (i <= 2) {
    console.log(nombre_planetas[i])
    i = i + 1
}

console.log("======FOR======")
for (let j = 0; j < distancias.length; j++) {
    console.log(distancias[j])
}

console.log("======FOR IN ======")
for (const key in nombre_planetas) {
  console.log(nombre_planetas[key])
}

for (const key in distancias) {
    if(distancias[key] === 5){
        console.log("Se encontro distancia 5")
    }
}

console.log("=====FOR OF=====")
for (const planeta of nombre_planetas) {
    console.log(planeta)
}


console.log("=====forEach=====")
let resultado = nombre_planetas.forEach((planeta) => console.log("El planeta es : " + planeta))
    
console.log(resultado)
    
console.log("=====map=====")
let resultado_map = nombre_planetas.map((planeta, index) => "El tamaño de " + planeta + " es " + tamano[index]
)
console.log(resultado_map)

console.log("=====filter=====")
let resultado_filter = tamano.filter((t) => {
    return t % 2 == 0
})
console.log(resultado_filter)
    
console.log("=====find=====")
let resultado_find = planetas.find(({nombre, distanciaAlaTierra}) => nombre.toLocaleLowerCase() == "marte")
console.log(resultado_find)

console.log("=====findIndex=====")
let resultado_findIndex = nombre_planetas.findIndex((p) => p.toLocaleUpperCase() == "MARTE" )
console.log(resultado_findIndex)

console.log("=====includes=====")
let resultado_includes = nombre_planetas.includes("Tierra", 0)
console.log(resultado_includes)
//nombre_planetas.forEach
//console.log(sumar(12, 3))
//console.log(resta(20, 10))

if( 1 === 1){
    const mifuncion = () => 8*8  
  //  console.log(mifuncion())
}

