function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Função para garantir que a seção certa seja mostrada com base no hash da URL
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    }
});

// Mostrar a seção correta com base no hash ao carregar a página
window.onload = function() {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
}