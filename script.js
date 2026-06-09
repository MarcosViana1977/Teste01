// Seleciona o botão que o usuário vai clicar
const botao = document.getElementById('mudarCorBtn');

// Função para gerar uma cor aleatória em formato Hexadecimal
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Escuta o clique no botão para mudar a cor do fundo
botao.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
});

   
