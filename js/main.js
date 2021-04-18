function clicou() {
    document.getElementtByld("agradecimento").innerHTML = "< b > Obrigado por Clicar < /b>";
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //innerHTML coloca o que está entre aspas dentro da tag
    /* console.log(document.getElementByld ("agradecimento"));
   // alert("Obrigada por clicar!");  */
}

/*f
function redirecionar() {
    //window.open("https://globallab.org/en/#.YHsxHehKi1s");
    window.location.href("https://globallab.org/en/#.YHsxHehKi1s");
}
*/

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto");
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe mouse aqui";
    elemento.innerHTML = "Passe mouse aqui";
}

function load() {
    alerta("Página Carregada !!!");
}

função funcaoChange(elemento) {
    console.log(elemento.valor);
}

/*var nome = "Clélia Alves";
var idade = 29;
var idade2 = 10;
alert(idade + idade2);
//alert("Bem Vindo " + nome);
alert(nome + " tem " + idade + " anos!");
console.log(nome);
console.log(idade + idade2);
*/

/* FRASES
var frase = " O Japão é o melhor time do mundo";
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));  //replace substitui 
*/

/* EXEMPLO SOBRE ARRAY - LISTA
var lista=["maçã", " pera ", " laranja "];
console.log(lista[1]);
//alert(lista[1]);
lista.push("uva"); //push serve pra acrescentar
console.log(lista);
lista.pop();  // pop serve pra retirar o último elemento da lista
console.log(lista);
console.log(lista.length); //mostra quantidade de elementos na lista.
console.log(lista.reverse); //mostra a ordem da lista de forma invertida.
console.log(lista.toString);
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - ")); */

/* DICIONÁRIO
var fruta = { nome: "maçã", cor: "vermelha" };
console.log(fruta.nome);
alert(fruta.cor); */

/* Transformando dicionário em Array (lista) veja a seguir 
var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
alert(frutas[1].nome); 
*/

/*Condicionais if se else senão

var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de Idade");
} else {
    alert("Menor de Idade");
}
*/

/* Comando WHILE ESTRUTURA DE REPETIÇÃO
var count=0;
while(count<=5);{
    console.log(count);
    count=count+1;
};
*/

/*Comando for ESTRUTURA DE REPETIÇÃO
var count;
for (count 1; count <= 5; count++) {
    alert(count);
};
*/

/* DATA ATUAL comando Date
var d = new Date();
alert (d);
*/

/* COMANDO QUE BUSCA O MES getMonth()+1
var d = new Date();
alert(d.getMonth() + 1);
*/

/* COMANDO QUE BUSCA O MINUTO getMinutes()
var d = new Date();
alert(d.getMinutes());
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão ", " Japão ", " Brasil"));
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar; 
    //se declara a variável validar, se torna local, mas se não declarar a função busca o validar global
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

*/