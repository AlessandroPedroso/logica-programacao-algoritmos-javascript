function mostrarOla() {
    //obtém o conteudo do campo (com id=) nome
    let nome = document.getElementById("nome").value;

    //exibe no parágrafo (resposta): "olá " e o nome informado
    document.getElementById("resposta").textContent = "Ola " + nome;
}

//cria uma referência ao botao (com id=) mostrar
let mostrar = document.getElementById("mostrar");

//registra para o botão "mostrar" um ouvinte para o evento click,
//que ao ser clicado irá chamar a fução mostrarOla
mostrar.addEventListener("click",mostrarOla)