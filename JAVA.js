// Seleção dos elementos do DOM
const button = document.getElementById('interactive-btn');
const outputBox = document.getElementById('output-message');

let clickCount = 0;

// Evento de clique para mudar o estado e o visual da página
button.addEventListener('click', () => {
    clickCount++;
    
    // Atualiza o texto da caixa
    outputBox.textContent = `Você interagiu com a página ${clickCount} vez(es)!`;
    
    // Adiciona uma classe para mudar a cor via CSS
    outputBox.classList.add('active');
});
