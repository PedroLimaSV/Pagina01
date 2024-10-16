// Seleciona o botão pelo ID e adiciona uma ação de clique
document.getElementById("meuBotao").addEventListener("click",function() {
    alert("voce clicou");
});
//butao  da cor//
//selecionar pelo id
const botão = document.getElementById("meuBotao")
// Adiciona um evento de clique ao botão

botao.addEventListener("click", function() {
    // Alterna a classe 'alternativo' no botão
    botao.classList.toggle("alternativo");
});