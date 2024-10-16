// Função para mostrar a seção correta
function showSection(sectionId) {
    console.log('showSection chamada com ID:', sectionId); // Log para depuração
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        console.error('Seção com ID', sectionId, 'não encontrada');
    }
}

// Função para garantir que a seção certa seja mostrada com base no hash da URL
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    console.log('hashchange evento, hash:', hash); // Log para depuração
    if (hash) {
        showSection(hash);
    }
});

// Mostrar a seção correta com base no hash ao carregar a página
window.onload = function() {
    const hash = window.location.hash.substring(1) || 'home';
    console.log('window.onload evento, hash:', hash); // Log para depuração
    showSection(hash);
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("#search-bar");  // Assumindo que você tenha uma barra de busca
    const produtos = document.querySelectorAll(".produto");

    searchInput.addEventListener("input", function() {
        const searchValue = searchInput.value.toLowerCase();

        produtos.forEach(function(produto) {
            const produtoNome = produto.querySelector("h2").textContent.toLowerCase();
            
            if (produtoNome.includes(searchValue)) {
                produto.style.display = "block";  // Mostra o produto se ele corresponder à pesquisa
            } else {
                produto.style.display = "none";  // Oculta o produto se não corresponder
            }
        });
    });
});

// ACESSIBILIDADE

document.addEventListener('DOMContentLoaded', () => {
    const accessibilityButton = document.getElementById('accessibilityButton');
    const controls = document.getElementById('controls');
    const increaseTextButton = document.getElementById('increaseText');
    const decreaseTextButton = document.getElementById('decreaseText');
    const toggleContrastButton = document.getElementById('toggleContrast');

    let fontSize = 16; // Tamanho inicial da fonte

    // Exibir/ocultar controles ao clicar no botão de acessibilidade
    accessibilityButton.addEventListener('click', () => {
        controls.style.display = controls.style.display === 'none' || controls.style.display === ''
            ? 'block'
            : 'none';
    });

    // Aumentar tamanho da fonte
    increaseTextButton.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
    });

    // Diminuir tamanho da fonte
    decreaseTextButton.addEventListener('click', () => {
        if (fontSize > 12) { // Limite mínimo de 12px
            fontSize -= 2;
            document.body.style.fontSize = `${fontSize}px`;
        }
    });

    // Alternar contraste alto
    toggleContrastButton.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
});