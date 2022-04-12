/* EXERCICIOS DE INTERPRETACAO

 1- 
 let a=10
 let b=10
console.log(b)
 b=5
console.log(a,b)

Sera impresso no console: 
    10
    10 5 

//2-
let a=10
let b=20
c=a  - 10
b=c  - 10
a=b  - 10
console.log(a,b,c)

Sera impresso no console:
    10 10 10

//3-
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Sugiro: 
    p = horasDia e t= salarioDia, entao {t/p} = {salarioDia/horasDia} */

// EXERCICIOS DE ESCRITA DE CODIGO

//1 a-
//let nome

//1 b -

//let idade

// 1 c-
//console.log( typeof nome, typeof idade )

//1 d- 
//As variaveis foram definidas como undefined undefined, pois nao foi atribuido um valor a elas.

//1 e-
//console.log (prompt ("qual eh o seu nome?"))
//console.log (prompt ("qual eh a sua idade?"))

//let Nome = "Julia"
//let Idade = 28

//1 f-
//console.log (typeof Nome, typeof Idade)
// Foi impresso: string number. Foi impresso isso, pois foram atribuidos em nome um valor escrito e em idade um valor em numero.

//1 g-*/
//const nome = prompt("Qual o seu nome?")
//const idade = prompt("Qual sua idade?")
//console.log ("Ola", nome, "voce tem", idade,"anos")

//2 a-
//console.log (prompt ("Voce esta bem hoje?"))
//console.log (prompt ("Voce esta animada com o curso?"))
//console.log (prompt ("Voce vai ser programadora?"))

//2 b-
//let sim = true
//let nao = false
//let medio = false

// 3
let numero = 28
let letra = "J"

numero = letra.toString(28)
letra = Number(28)
console.log (numero,letra)