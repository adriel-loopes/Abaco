# Ábaco Interativo

![screenshot](./c2ac884d-91b7-463e-b717-680c7ecd116f.png)

Um projeto simples e didático de um ábaco interativo desenvolvido com HTML, CSS e JavaScript. Ideal para fins educacionais e para quem está aprendendo sobre lógica de programação e manipulação do DOM.

---

## 💡 Funcionalidades

- Representação visual de um ábaco com colunas de contas.
- Cálculo automático do valor total com base na posição das contas.
- Modo Treino: um número-alvo é sorteado aleatoriamente, e o usuário deve ajustar o ábaco para igualar esse valor.
- Feedback visual com status de "completado" ou "ainda não completado".

---

## 🧠 Como Funciona

Cada coluna do ábaco representa uma casa decimal (milhares, centenas, dezenas, unidades, etc). O usuário pode arrastar ou clicar para mover as contas e formar o número desejado.

Exemplo:
- Se há 5 contas ativadas na coluna das unidades de milhar, isso representa o número 5000.
- O valor total exibido é a soma das contas ativadas por coluna.

---

## 🎮 Modo Treino

Ao clicar em **"Novo Desafio"**, um número aleatório é gerado como objetivo. O usuário precisa manipular o ábaco até alcançar esse valor. O status abaixo informa se o número foi atingido corretamente.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** — Estrutura do projeto
- **CSS3** — Estilização visual
- **JavaScript (Vanilla)** — Lógica de funcionamento e interatividade

---

## 🛠️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/abaco-interativo.git
