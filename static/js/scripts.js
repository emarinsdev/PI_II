// Função para exibir a seção ativa
function showSection(sectionId) {
    console.log('Mostrando seção:', sectionId);

    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Mostra a seção correspondente ao ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        console.error('Seção não encontrada:', sectionId);
    }
}

// Listener para mudanças no hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    console.log('Hash atualizado:', hash);
    if (hash) showSection(hash);
});

// Mostrar a seção correta ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'home';
    console.log('Página carregada com hash:', hash);
    showSection(hash);
});

// Lógica para a barra de busca
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

// ADICIONANDO GESTOS DE TOQUE PARA DISPOSITIVOS MÓVEIS
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(e) {
        const target = e.target;
        if (target.matches('.section-link')) {
            const sectionId = target.getAttribute('data-section'); // Assume que você tenha um atributo data-section
            showSection(sectionId);
            window.location.hash = sectionId; // Atualiza o hash da URL
        }
    });
}