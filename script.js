const abaco = document.getElementById('abaco');
const valorTotalEl = document.getElementById('valor-total');
const desafioNumeroEl = document.getElementById('desafio-numero');
const statusDesafioEl = document.getElementById('status-desafio');
const novoDesafioBtn = document.getElementById('novo-desafio');
const somMovimento = document.getElementById('som-movimento');

let contaAtual = null;

// Função para criar hastes e contas
function criarHastes() {
  const valores = [1, 10, 100, 1000];
  valores.forEach((valor) => {
    const haste = document.createElement('div');
    haste.classList.add('haste');
    haste.setAttribute('data-valor', valor);

    for (let i = 0; i < 5; i++) {
      const conta = document.createElement('div');
      conta.classList.add('conta');
      conta.setAttribute('draggable', 'true');
      haste.appendChild(conta);
    }

    abaco.appendChild(haste);
  });
}

// Função para calcular o valor total
function calcularValorTotal() {
  let total = 0;
  document.querySelectorAll('.haste').forEach((haste) => {
    const valorHaste = parseInt(haste.getAttribute('data-valor'), 10);
    const contasNaHaste = haste.querySelectorAll('.conta').length;
    total += contasNaHaste * valorHaste;
  });
  valorTotalEl.textContent = total;
  verificarDesafio(total);
}

// Eventos de drag-and-drop
document.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('conta')) {
    contaAtual = e.target;
    contaAtual.classList.add('dragging');
    somMovimento.play();
  }
});

document.addEventListener('dragend', () => {
  if (contaAtual) {
    contaAtual.classList.remove('dragging');
    contaAtual = null;
    calcularValorTotal();
  }
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
  const haste = e.target.closest('.haste');
  if (haste && contaAtual) {
    haste.appendChild(contaAtual);
  }
});

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('conta')) {
      contaAtual = e.target;
      contaAtual.classList.add('dragging');
      somMovimento.play();
    }
});
  
document.addEventListener('dragend', () => {
    if (contaAtual) {
      contaAtual.classList.remove('dragging');
      contaAtual = null;
      calcularValorTotal();
    }
});
  
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    const haste = e.target.closest('.haste');
    if (haste && contaAtual) {
      haste.appendChild(contaAtual);
      
      // Criando efeito de partículas
      const particula = document.createElement('div');
      particula.classList.add('particula');
      particula.style.left = `${e.clientX}px`;
      particula.style.top = `${e.clientY}px`;
      document.body.appendChild(particula);
      
      // Remover partícula após animação
      setTimeout(() => {
        particula.remove();
      }, 500); // Tempo da animação
    }
  });
  
// Modo Treino
function gerarDesafio() {
  const numero = Math.floor(Math.random() * 5000) + 1;
  desafioNumeroEl.textContent = numero;
  statusDesafioEl.textContent = 'Ainda não completado';
}

function verificarDesafio(valorAtual) {
  const numeroDesafio = parseInt(desafioNumeroEl.textContent, 10);
  if (valorAtual === numeroDesafio) {
    statusDesafioEl.textContent = 'Parabéns! Desafio completado!';
  }
}

// Novo Desafio
novoDesafioBtn.addEventListener('click', gerarDesafio);

// Inicialização
criarHastes();
calcularValorTotal();
gerarDesafio();
