// Seleciona todos os links da barra de navegação
const navLinks = document.querySelectorAll('nav ul li a');

// Função para adicionar e remover classe de enfatização
function enfatizarLink() {
    this.classList.add('enfatizado'); // Adiciona classe para enfatizar o link
}

function removerEnfatizacao() {
    this.classList.remove('enfatizado'); // Remove classe para remover enfatização do link
}

// Adiciona eventos para cada link na barra de navegação
navLinks.forEach(link => {
    link.addEventListener('mouseenter', enfatizarLink);
    link.addEventListener('mouseleave', removerEnfatizacao);

    // Adiciona evento de foco para suportar navegação por teclado
    link.addEventListener('focus', enfatizarLink);
    link.addEventListener('blur', removerEnfatizacao);
});