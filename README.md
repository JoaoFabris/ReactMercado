🛍️ Catálogo de Produtos em ReactEste projeto é um catálogo de produtos interativo desenvolvido em React, focado na aplicação de conceitos fundamentais da biblioteca para a construção de interfaces dinâmicas e reativas. Ele serve como uma atividade acadêmica para demonstrar o domínio de componentes, gerenciamento de estado, renderização condicional e manipulação de dados.✨ Funcionalidades PrincipaisO catálogo oferece as seguintes funcionalidades:
Listagem Dinâmica de Produtos: Exibe uma lista de produtos com seus nomes, categorias, preços e imagens.
Destaque de Promoções: Produtos em promoção são visualmente destacados, exibindo o preço original riscado e o preço com desconto.
Cálculo de Preço Total: Apresenta o valor total de todos os produtos listados no catálogo.
Formulário de Cadastro de Produtos: Permite adicionar novos produtos ao catálogo dinamicamente.
Upload e Preview de Imagem: O formulário inclui um campo para upload de imagem, com preview em tempo real e armazenamento em Base64 para exibição imediata.
Validação de Formulário: Garante que os campos essenciais sejam preenchidos antes do cadastro.
🚀 Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
JavaScript (ES6+): Linguagem de programação principal.
CSS3: Para estilização e responsividade da aplicação.
⚙️ Pré-requisitos e InstalaçãoPara rodar este projeto em sua máquina, você precisará ter o Node.js e o npm (Node Package Manager) ou Yarn instalados.
Clone o repositório:
bash1234567891011    git clone https://github.com/seu-usuario/catalogo-produtos.git
    
2.  **Navegue até a pasta do projeto:**
```bash
    cd catalogo-produtos
    
3.  **Instale as dependências:**
```bash
    npm install
    # ou
    yarn install💡 Como Usar
Inicie o servidor de desenvolvimento:
bash123    npm start
    # ou
    yarn startO aplicativo será aberto automaticamente no seu navegador padrão em `http://localhost:3000`.

Visualize o Catálogo: A página inicial exibirá a lista de produtos pré-definidos.


Adicione Novos Produtos:

Clique no botão "+ Novo Produto".
Preencha os campos do formulário (Nome, Preço, Categoria, Imagem, Promoção e Desconto).
A imagem selecionada será exibida em um preview.
Clique em "✓ Adicionar Produto" para incluir o item no catálogo.


📁 Estrutura de PastasA estrutura do projeto segue as convenções do React para organização de componentes e dados:catalogo-produtos/
├── public/                     # Arquivos estáticos (index.html, favicon, etc.)
├── src/
│   ├── assets/                 # Imagens estáticas dos produtos
│   │   ├── cadeira.png
│   │   ├── gpu.png
│   │   └── ...
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── FormularioProduto.jsx # Formulário para adicionar produtos
│   │   ├── ListaProdutos.jsx     # Componente que renderiza a lista de produtos
│   │   └── ProdutoCard.jsx       # Componente individual de cada produto
│   ├── data/                   # Dados mockados (lista inicial de produtos)
│   │   └── produtos.js
│   ├── App.css                 # Estilos globais da aplicação
│   ├── App.jsx                 # Componente principal da aplicação
│   ├── index.js                # Ponto de entrada da aplicação
│   └── ... (outros arquivos do CRA)
├── .gitignore
├── package.json                # Dependências e scripts do projeto
└── README.md                   # Este arquivo🧠 Conceitos de React AplicadosEste projeto demonstra a aplicação dos seguintes conceitos de React:
Componentes: Modularização da UI em partes reutilizáveis (ProdutoCard, ListaProdutos, FormularioProduto).
JSX: Sintaxe que permite escrever HTML dentro do JavaScript.
Hooks (useState): Gerenciamento de estado local em componentes funcionais (ex: formData no formulário, produtos no App.jsx).
map() para Renderização de Listas: Iteração sobre arrays para renderizar múltiplos componentes (produtos.map(...)).
reduce() para Agregação de Dados: Cálculo do preço total do catálogo.
Props: Comunicação de dados entre componentes (ex: nome, preco passados para ProdutoCard).
Conditional Rendering: Exibição de elementos com base em condições (ex: badge de promoção, formulário de desconto, preview de imagem).
Manipulação de Eventos: Captura de interações do usuário (ex: onChange, onSubmit, onClick).
Import/Export de Módulos: Organização do código em módulos JavaScript.
📸 Capturas de Tela (Visuals)(Aqui você pode inserir capturas de tela do seu projeto para ilustrar as funcionalidades. Por exemplo:)

Catálogo de Produtos:

Uma visão geral da listagem de produtos com imagens e destaques de promoção.


Formulário de Cadastro:

O formulário de adição de produtos com o campo de upload de imagem e preview.

📄 LicençaEste projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.🧑‍💻 AutorFabris
