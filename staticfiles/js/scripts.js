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

// Obtém o elemento da barra de busca
const searchInput = document.getElementById("search-bar");

// Obtém todos os produtos
const produtos = document.querySelectorAll(".vitrine-produtos .produto");

// Lógica para a barra de busca
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    produtos.forEach((produto) => {
        const produtoNome = produto.querySelector("h2").textContent.toLowerCase();
        
        if (produtoNome.includes(searchValue)) {
            produto.style.display = "block"; // Mostra o produto
            
            // Destaque no texto
            const highlightedName = produto.querySelector("h2");
            const originalName = highlightedName.textContent; // Nome original
            highlightedName.innerHTML = originalName.replace(
                new RegExp(`(${searchValue})`, 'gi'),
                (match) => `<span class="highlight">${match}</span>`
            );
        } else {
            produto.style.display = "none"; // Esconde o produto
            // Remove o destaque se não houver correspondência
            produto.querySelector("h2").innerHTML = produto.querySelector("h2").textContent;
        }
    });
});

// Função para mostrar a imagem ampliada
function showLargeImage(src) {
    const largeImageContainer = document.getElementById('largeImageContainer');
    const largeImage = document.getElementById('largeImage');
    largeImage.src = src; 
    largeImageContainer.style.display = 'flex'; 
}

// Função para esconder a imagem ampliada
function hideLargeImage() {
    const largeImageContainer = document.getElementById('largeImageContainer');
    largeImageContainer.style.display = 'none'; 
}

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