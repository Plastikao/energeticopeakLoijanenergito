
//#region 

function setLocalStorage() {
    localStorage.setItem('estoque', 25);
}

var estoqueStorage = localStorage.getItem('estoque');


const energetico = {
    nome: "Monster branco",
    estoque: estoqueStorage,
    tamanho: 250
}
/*
function TrocaEstoque (tag, troca){
    let = NUmEstoque = document.querySelector(tag);
    NUmEstoque.innerHTML = troca;

}

let trocado = document.querySelector('.vendas__button');
*/
    const quant_compra = document.getElementById('vendas__placeholder');


function compra() {
    let _quant_compra = parseInt(quant_compra.value);


    if (energetico.estoque - _quant_compra < 0) {
        alert("Não temos tudo isso");
    }
    
    else if (energetico.estoque - _quant_compra >= 0) {
        energetico.estoque -= _quant_compra;

        localStorage.setItem('estoque', energetico.estoque);

        alert("Você comprou " + _quant_compra + " energéticos.");
    }

    else{ alert("comprou nada")}

    console.log(energetico.estoque)
    mostra= document.querySelector('h3');

mostra.innerHTML = energetico.estoque
quant_compra.value = "";


}


const adiministrado = () => {
            
    let senhaAdministrado = document.getElementById('senhaADM');
  

    if (senhaAdministrado.value === "felpe123") {
window.location.href="adm.html"


    }

    else if (senhaAdministrado.value != "felpe123"){
 
         alert('Senha errada, você não é um adiminstrado!');
    }

  

}
//#endregion

function mostraEstoque() {
    estoqueStorage = localStorage.getItem('estoque');
    
    let estoqueid = document.getElementById('estoque__id');
    estoqueid.innerHTML = estoqueStorage;
}

function volta() {
    window.location.href ="index.html";
   
}