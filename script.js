const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

var questao1 = () =>{
    var text = valorInput("questao01").split("");
    var textInversor = [];
    text.forEach((letra) => {
        textInversor.unshift(letra);
    });
    var imprimir = document.getElementById("imprimir01");
    imprimir.textContent = textInversor.join("");
}

var questao2 = () =>{
    var text = valorInput("questao02").split("");
    var Newtext = [];
    var vogal = ['a', 'e', 'i', 'o', 'u'];
    text.forEach((letra) => {
        if(vogal.indexOf(letra.toLowerCase()) != -1)
            Newtext.push("<strong>"+letra+"</strong>");
        else
            Newtext.push(letra);
    });
    var imprimir = document.getElementById("imprimir02");
    imprimir.innerHTML = Newtext.join("");
}

var questao3 = () =>{
    var palavras = valorInput("questao03").trim().split(" ");
    var contarPalavras = [];
    var palavraArray = [];
    var palavrasLimpas = palavras.map(function(palavra){
        return palavra.replace(/[.,\/#!$%\^&\*{};:=()\-_`~\[\]]/g,"").replace(/ {2,}/g," ");
    });
    palavraArray["palavra"] = palavrasLimpas[0];
    palavraArray["qtde"] = 1;
    contarPalavras.push(palavraArray);

    let jaTem;
    var i;
    var j;
    for(i = 1 ; i < palavrasLimpas.length; i=i+1){
        jaTem = false;
        for(j = 0; j < contarPalavras.length ; j=j+1){
            if(palavrasLimpas[i] == contarPalavras[j]["palavra"]){
                contarPalavras[j]["qtde"] += 1;
                jaTem = true;
            }
        }
        if(!jaTem){
            palavraArray = [];
            palavraArray["palavra"] = palavrasLimpas[i];
            palavraArray["qtde"] = 1;
            contarPalavras.push(palavraArray);
        }
    }
    var impressao = document.getElementById("imprimir03");
    var linha;
    var celulaPalavraObj;
    var celulaQtdeObj;
    var palavraTexto;
    var qtdeTexto;
    impressao.innerHTML = "";

    contarPalavras.forEach((palavra) =>{
        celulaPalavraObj = document.createElement("td");
        celulaQtdeObj = document.createElement("td");
        linha = document.createElement("tr");
        palavraTexto = document.createTextNode(palavra["palavra"]);
        qtdeTexto = document.createTextNode(palavra["qtde"]);
        celulaPalavraObj.appendChild(palavraTexto);
        celulaQtdeObj.appendChild(qtdeTexto);
        linha.appendChild(celulaPalavraObj);
        linha.appendChild(celulaQtdeObj);
        impressao.appendChild(linha);

    });
}

var questao4 = () =>{
    var palavra = valorInput("questao04").trim().split(" ");
    var contarPalavra = [];
    var palavraArray = [];
    var palavraLimpo = palavra.map(function(palavra){
        return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g,"").replace(/ {2,}/g," ");
    });
    palavraArray["palavra"] = palavraLimpo[0];
    palavraArray["quantidade"] = 1;
    contarPalavra.push(palavraArray);

    let w;
    var i;
    var j;
    for(i = 1 ; i < palavraLimpo.length; i=i+1){
        w = false;
        for(j = 0; j < contarPalavra.length ; j=j+1){
            if(palavraLimpo[i] == contarPalavra[j]["palavra"]){
                contarPalavra[j]["quantidade"] += 1;
                w = true;
            }
        }
        if(!w){
            palavraArray = [];
            palavraArray["palavra"] = palavraLimpo[i];
            palavraArray["quantidade"] = 1;
            contarPalavra.push(palavraArray);
        }
    }
    var imprimir = document.getElementById("imprimir04");
    let posPalavraMaiorOcor = 0;

    for(i = 0; i < contarPalavra.length; i++){
        if(contarPalavra[i]["quantidade"] > contarPalavra[posPalavraMaiorOcor]["quantidade"]){
            posPalavraMaiorOcor = i;
        }
    }
    imprimir.innerHTML = "A palavra <strong>" + contarPalavra[posPalavraMaiorOcor]["palavra"] + "</strong> ocorreu " + contarPalavra[posPalavraMaiorOcor]["quantidade"] + " vezes";
}

var questao5 = () => {
    var text = valorInput("questao05");
    var procurar = valorInput("procurar05");
    var substituir = valorInput("substituir05");

    const regex = new RegExp(procurar, "gi");
    var novotext = text.replace(regex, substituir);
    var imprimir = document.getElementById("imprimir05");
    imprimir.innerHTML = novotext;

}

var questao6 = () =>{
    var data = new Date(valorInput("questao06"));
    var diferencaDias = calcularDatas(data, new Date());

    var imprimir = document.getElementById("imprimir06");
    imprimir.innerHTML = diferencaDias + " dias decorridos desde " + document.getElementById("questao06").value;

}



var questao7 = () =>{
    var value = valorInput("questao07");
    let data = value.split('-');

    var dataObj = new Date();
    dataObj.setDate(data[2]);
    dataObj.setMonth(data[1] - 1);
    dataObj.setYear(data[0]);

    var dataEmtext = dataObj.getDate() + " de " + meses[dataObj.getMonth()] + " de " + dataObj.getFullYear();

    var imprimir = document.getElementById("imprimir07");
    imprimir.innerHTML = dataEmtext;
}

var questao8 = () =>{
    var data1 = new Date(valorInput("data08.1"));
    var data2 = new Date(valorInput("data08.2"));
    var diferencaDias;
    if(data1 < data2)
        diferencaDias = calcularDatas(data1, data2) + 1;
    else
        diferencaDias = calcularDatas(data2, data1) + 1;

    var qtdSemanas = parseInt(diferencaDias / 7);
    var imprimir = document.getElementById("imprimir08");
    imprimir.innerHTML = qtdSemanas + " semanas entre estas datas ";

}

var questao9 = () =>{
    var text = valorInput("questao09");
    let regtext =  /^[a-zA-Z]*$/;
    let regtextNumero = /^[a-zA-Z0-9]*$/;
    let regtextNumeroCaractere = /^[a-zA-Z0-9@#!$%&,-=+.<>;:]*$/;

    let resposta;
    if(regtext.test(text))
        resposta = "<span style='color:red;'>fraca</span>";
    else if (regtextNumero.test(text))
        resposta = "<span style='color:orange;'>moderada</span>";
    else if (regtextNumeroCaractere.test(text))
        resposta = "<span style='color:green;'>forte</span>";

    var imprimir = document.getElementById("imprimir09");
    imprimir.innerHTML = resposta;
}

var questao10 = () => {
    var text = valorInput("questao10").split("");

    var tenis = ["T", "E", "N", "I", "S"];
    var polar = ["P", "O", "L", "A", "R"];

    let regMaiuscula = /^[A-Z]*$/;

    var posicaoLetraEncontrada;
    var novaLetra;
    var ehMaiuscula;
    var novotext = [];

    text.forEach((letra) => {
        posicaoLetraEncontrada = null;
        if(tenis.indexOf(letra.toUpperCase()) != -1){
            posicaoLetraEncontrada = tenis.indexOf(letra.toUpperCase());
            novaLetra = polar[posicaoLetraEncontrada];
        } else if(polar.indexOf(letra.toUpperCase()) != -1){
            posicaoLetraEncontrada = polar.indexOf(letra.toUpperCase());
            novaLetra = tenis[posicaoLetraEncontrada];
        }

        if(posicaoLetraEncontrada != null){
            ehMaiuscula = regMaiuscula.test(letra);
            novaLetra = !ehMaiuscula ? novaLetra.toLowerCase() : novaLetra;
            novotext.push(novaLetra);
        } else
            novotext.push(letra);
    });


    var imprimir = document.getElementById("imprimir10");
    imprimir.innerHTML = novotext.join("");
}

window.onload = function(){
    addExecutar("executar01", questao1);
    addExecutar("executar02", questao2);
    addExecutar("executar03", questao3);
    addExecutar("executar04", questao4);
    addExecutar("executar05", questao5);
    addExecutar("executar06", questao6);
    addExecutar("executar07", questao7);
    addExecutar("executar08", questao8);
    addExecutar("executar09", questao9);
    addExecutar("executar10", questao10);

}

function addExecutar(id, callback){
    var botao = document.getElementById(id);
    botao.addEventListener("click", callback);
}

function valorInput(id){
    return document.getElementById(id).value;
}

function calcularDatas(dataAnterior, dataPosterior){
    return Math.round((dataPosterior - dataAnterior)/ (1000 * 60 * 60 * 24)) - 1;
}