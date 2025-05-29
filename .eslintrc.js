// .eslintrc.js
module.exports = {
  env: {
    commonjs: true, // Permite módulos CommonJS (require/module.exports)
    es2021: true,   // Suporte para recursos do ES2021
    node: true,     // Variáveis globais do Node.js (ex: process)
    mocha: true,    // Variáveis globais do Mocha (ex: describe, it)
  },
  extends: [
    'eslint:recommended',   // Regras recomendadas pelo ESLint
    'plugin:mocha/recommended', // Regras recomendadas para Mocha
  ],
  plugins: [
    'mocha', // Habilita o plugin do Mocha
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Permite o parsing das últimas features do ECMAScript
  },
  rules: {
    // Você pode adicionar ou sobrescrever regras aqui
    // Exemplo:
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Avisa sobre variáveis não usadas, ignorando argumentos que começam com _
    'indent': ['error', 2], // Força indentação de 2 espaços
    'linebreak-style': ['error', 'unix'], // Força estilo de quebra de linha Unix
    'quotes': ['error', 'single'], // Força uso de aspas simples
    'semi': ['error', 'always'], // Força ponto e vírgula no final das declarações
    'mocha/no-exclusive-tests': 'error', // Proíbe .only nos testes
    'mocha/no-skipped-tests': 'warn',    // Avisa sobre .skip nos testes
    'no-console': 'off', // Permite o uso de console.log (útil para debug em testes, mas pode ser 'warn' ou 'error' em produção)
  },
};