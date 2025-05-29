# Projeto de Automação de Testes de API com PactumJS para Automation Exercise

Este projeto contém uma suíte de testes automatizados para a API do [Automation Exercise](https://automationexercise.com/api_testing), utilizando PactumJS, Mocha, Chai e Joi.

### Documentação da API

A documentação da API do Automation Exercise pode ser encontrada em:
[https://automationexercise.com/api_testing](https://automationexercise.com/api_testing)

## Visão Geral

O objetivo deste projeto é demonstrar a criação de testes de API robustos, cobrindo:

*   **Testes Funcionais:** Verificando a lógica de negócios e o comportamento dos endpoints.
*   **Testes de Contrato:** Garantindo que a estrutura (schema) das requisições e respostas da API permaneça consistente.

## Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução JavaScript.
*   **npm:** Gerenciador de pacotes Node.js.
*   **PactumJS:** Framework de teste de API para Node.js.
*   **Mocha:** Framework de teste JavaScript para executar os testes.
*   **Chai:** Biblioteca de asserção (usada internamente pelo PactumJS, mas bom conhecer).
*   **Joi:** Biblioteca para validação de schemas de objetos (contratos).
*   **Mochawesome:** Gerador de relatórios HTML para os resultados dos testes Mocha.

## Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 16.x, 18.x ou superior recomendada)
*   npm (geralmente instalado com o Node.js)

## Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/pricaimiTech/qa.automationexercise-api.pactumjs.git
    cd qa.automationexercise-api.pactumjs
    ```

2.  **Instale as dependências:**
    Execute o seguinte comando na raiz do projeto para instalar todas as dependências listadas no `package.json`:
    ```bash
    npm install
    ```

3.  **Configuração da URL Base (se necessário):**
    A URL base da API (`https://automationexercise.com/api`) é configurada no arquivo `test/helpers/testSetup.js`. Modifique-o se necessário.

## Estrutura do Projeto
```bash
├── data/
│ ├── user.data.js # Funções para gerar dados de teste 
├── helpers/     # Arquivos de utilidades e configuração 
│ │ │ └── expectedMessageResponses.js # Objetos com respostas esperadas 
│ │ │ └── testSetup # Configurações globais para os testes (ex: baseURL) 
├── report/     # pasta para armazenar o report
├── schemas/ # Schemas Joi para validação de contrato 
│ ├── category/ 
│ │ ├── categorySchema.js 
│ ├── generals/ 
│ │ ├── expectMessageSchema.js 
│ ├── product/ 
│ │ ├── productSchema.js 
├── test/ 
│ ├── contract/ # Testes de contrato 
│ │ ├── products/ 
│ │ │ └── getAllProducts.test.js 
│ │ └── userAccount/ 
│ │ │  └── deleteUserAccount.test.js # Exemplo 
│ ├── functional/ # Testes funcionais 
│ │ └── userAccount/ 
│ │ │   ├──  deleteUserAccount.test.js 
│ │ │   ├──  postCreateUserAccount.test.js 
├── mochawesome-report/ # Relatórios HTML gerados pelo Mochawesome 
├── .gitignore # Arquivos e pastas a serem ignorados pelo Git 
├── package-lock.json # Lockfile das dependências 
├── package.json # Metadados do projeto e dependências 
└── README.md # Este arquivo
```

## Executando os Testes

Os seguintes scripts NPM estão configurados no `package.json` para executar os testes:

*   **Executar todos os testes (funcionais e de contrato):**
    ```bash
    npm test:all
    ```

*   **Executar apenas os testes funcionais:**
    ```bash
    npm run test:functional
    ```

*   **Executar apenas os testes de contrato:**
    ```bash
    npm run test:contract
    ```

*   **Executar todos os testes e gerar o relatório HTML:**
    ```bash
    npm run test:report
    ```
    Após a execução, o relatório HTML estará disponível na pasta `mochawesome-report/`. Abra o arquivo `mochawesome.html` em um navegador para visualizar.

## Detalhes dos Testes Implementados

### Testes Funcionais

Localizados em `test/functional/`:

*   **Criação de Conta de Usuário (`createUserAccount.test.js`):**
    *   Testa a criação bem-sucedida de um novo usuário.
    *   Testa a tentativa de criação de um usuário com um e-mail já existente.
*   **Deleção de Conta de Usuário (`deleteUserAccount.test.js`):**
    *   Testa a deleção bem-sucedida de uma conta com credenciais válidas (inclui verificação de que o login falha após a deleção).
    *   Testa a tentativa de deleção com senha incorreta. //TO-DO
    *   Testa a tentativa de deleção de um usuário inexistente. //TO-DO

### Testes de Contrato

Localizados em `test/contract/`:

*   **Lista de Todos os Produtos (`getAllProducts.test.js`):**
    *   Valida se a estrutura e os tipos de dados da resposta da API `/productsList` correspondem ao schema Joi definido em `schemas/product/productSchema.js`.
*   **Deleção de Conta (`deleteUserAccount.test.js` - exemplo):**
    *   Valida se a estrutura da resposta da API `/deleteAccount` (em caso de sucesso) corresponde ao schema Joi definido em `schemas/generals/expectMessageSchema.js`.




