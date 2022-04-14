/*EXERCICIOs DE INTERPRETACAO 

1-
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b.", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c.", resultado)

console.log("d.", typeof resultado)

1a. false
1b. false
1c. true
1d. booleano

2- 
let primeiroNumero = prompt ("Digite um numero!")
let segundoNumero = prompt ("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

-- Esta concatenando os numeros ao inves de somar porque nao foi convertido em Number os prompts.Esta

3- Colocaria o Number para converter em numero os prompts e fazer a soma ao inves de concatenar

const primeiroNumero = Number( prompt ("Digite um numero!"))
const segundoNumero = Number( prompt ("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)

////////EXERCICIOS DE CODIGO/////////

1-
let suaIdade =Number( prompt ("Digite sua idade"))
let idadeMelhorAmigo =Number( prompt ("Digite a idade da sua melhor amiga"))

console.log ("Sua idade e maior do que a da sua melhor amiga?", suaIdade > idadeMelhorAmigo)

console.log ( suaIdade - idadeMelhorAmigo)

2-
const primeiroNumero = Number( prompt ("Digite um numero par"))

console.log (primeiroNumero % 2)

let segundoNumero = 4
let terceiroNumero = 28
let quartoNumero = 18

console.log (segundoNumero % 2)
console.log (terceiroNumero % 2)
console.log (quartoNumero % 2)

// Todos deram resto 0 pois nao sobram na divisao
// Se for inserido algum numero impar havera resto e aparecera algum numero diferente de 0

3- 
const idadeEmAnos = Number( prompt ("Digite sua idade"))

console.log (idadeEmAnos / 12)
console.log (idadeEmAnos / 365)
console.log (idadeEmAnos / 8760)


4- 
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

const primeiroNumero = Number( prompt ("Digite um numero"))
const segundoNumero = Number( prompt ("Digite outro numero"))

console.log ( primeiroNumero + segundoNumero)
console.log ( primeiroNumero - segundoNumero)
console.log ( primeiroNumero * segundoNumero)
console.log ( primeiroNumero / segundoNumero)
console.log (segundoNumero / primeiroNumero )

console.log ( primeiroNumero > segundoNumero)
console.log ( primeiroNumero === segundoNumero)
console.log ( primeiroNumero % segundoNumero === 0)
console.log ( segundoNumero % primeiroNumero === 0) */
