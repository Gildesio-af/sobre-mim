// Função para definir o tema no HTML
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Atualizar ícones do botão
    const sunIcon = document.querySelector('.icon-sun');
    const moonIcon = document.querySelector('.icon-moon');
    
    if (theme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Função para obter o tema salvo ou usar o tema do sistema
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // Se não houver tema salvo, verifica a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Inicializar o tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const theme = getPreferredTheme();
    setTheme(theme);
});

// Adicionar evento ao botão de alternância
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Também permite alternar com a tecla 't' (opcional)
document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
});