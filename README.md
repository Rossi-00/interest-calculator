# Cálculo de Juros Simples

## Visão Geral

Este é um projeto simples em JavaScript que calcula os juros de uma dívida com base no número de dias de atraso. A aplicação pede ao usuário o valor da dívida e os dias de atraso, e então calcula os juros e o valor total a ser pago.

## Funcionalidades

- Calcula os juros com base no número de dias de atraso.
- Exibe o valor original da dívida, o número de dias de atraso, a taxa de juros e o valor total a ser pago.

## Pré-requisitos

- **Node.js** deve estar instalado na sua máquina para rodar o código.

- O pacote **readline-sync** é usado para receber entradas do usuário no terminal.

## Como Rodar

### 1. Clone o Repositório

Clone o projeto para sua máquina:

```bash
git clone https://github.com/rossi-00/interest-calculator.git
```

### 2. Instale as Dependências

Dentro da pasta do projeto, instale o pacote necessário:

```bash
npm install readline-sync
```

### 3. Execute o Projeto

Para rodar o programa, use o comando:

```bash
node app.js
```

### 4. Interaja com a Aplicação

O programa vai pedir para você informar:
- O valor da dívida.
- Quantos dias de atraso a dívida tem.

Depois, ele vai calcular os juros e mostrar o valor total a ser pago.

## Exemplo de Uso

```bash
Aplicação de Juros: 

Informe o valor devido: R$ 1000
Informe quantos dias se passaram desde o vencimento do boleto: 20

Valor original da dívida: R$ 1000
Dias atrasados: 20
Taxa de Juros: 10%
Valor total com juros: R$ 1100
```

Se a dívida não estiver atrasada, o programa vai dizer:

```bash
Você está em dia!
```

## Como Funciona

1. O programa pede para o usuário informar o valor da dívida.
2. Depois, ele pergunta quantos dias se passaram desde o vencimento.
3. Se a dívida estiver atrasada por mais de 15 dias, ele aplica uma taxa de juros de 10%. Se for 15 dias ou menos, a taxa é de 5%.
4. O programa mostra o valor total, incluindo os juros.

---

### Observações

Este é um projeto simples, ideal para aprender conceitos básicos de JavaScript e como interagir com o usuário no terminal. 
