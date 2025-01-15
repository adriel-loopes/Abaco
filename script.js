const abaco = document.getElementById('abaco');
const numHastes = 10; // Número de hastes
const numContasPorHaste = 5; // Número de contas por haste

for (let i = 0; i < numHastes; i++) {
  const haste = document.createElement('div');
  haste.classList.add('haste');

  // Adiciona contas em cada haste
  for (let j = 0; j < numContasPorHaste; j++) {
    const conta = document.createElement('div');
    conta.classList.add('conta');
    conta.setAttribute('draggable', 'true');
    haste.appendChild(conta);
  }

  abaco.appendChild(haste);
}
