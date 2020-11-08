# Desafio2omdbapi
Projeto base para testes de api automatizados.
Elaborado com base na [OMDb API](http://www.omdbapi.com/)

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/)<br>
Além disso é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)

### Como executar os testes
Clone este repositório:
```sh
$ git clone https://github.com/mikebatista/Desafio2_omdbapi.git
```
Abra o VSCode, acesse a pasta do projeto e execute o os seguintes comando no terminal para instalar as dependências e iniciar execução dos testes
```sh
$ npm install
$ npm run test
```
Após a execução dos testes, será criado um relatório html, contendo o resultado dos testes, este relatório fica localizado no caminho: pastaDoProjeto/reports/index.html
### Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
 - [Supertest](https://www.npmjs.com/package/supertest) - Fornece uma abstração de alto nível para testar HTTP
 - [Chai](https://www.chaijs.com/) - Biblioteca de asserção BDD / TDD
 - [Mocha](https://mochajs.org/) - Fornece relatórios flexíveis e precisos