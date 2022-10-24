# Simulador de Partidas de Futebol
Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web inspirada em um simulador de partidas de futebol.

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

# Endereço de Deploy - GitHub Pages
https://suzindev.github.io/frontend/

# Protótipo
https://www.figma.com/file/WlqIHhrwulvruQbT0oskVg/SimuladorPartidasFutebol?node-id=0%3A1

# Checklist
 - [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
 - [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
 - [ ] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
 - [X] Construir páginas web com o conceito de componentes.
 - [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
 - [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
 - [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
 - [X] Mapear componentes à rotas no módulo de rotas.
 - [X] Criar navegação entre páginas por meio de rotas.
 - [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
 - [X] Validar campos do formulário com REGEX e apresentar os erros.
 - [X] Desabilitar o botão de submit enquanto o formulário está inválido.
 - [X] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
 - [X] Cadastrar uma entidade usando uma API (JSON Server ou Firebase).
 - [X] Apresentar uma lista de dados com a diretiva estrutural ngFor.
 - [X] Usar a diretiva ngIf
 - [X] Formatar a apresentação de dados com Pipes.
 - [X] Build e deploy da aplicação.

# Manual de Execução
- Clonar o repositório com git clone
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) na pasta backend com o seguinte comando... json-server --watch db.json
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular na pasta frontend com o seguinte comando... ng serve
