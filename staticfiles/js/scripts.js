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