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
