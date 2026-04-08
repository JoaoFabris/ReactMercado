# 🛍️ ReactMercado — Catálogo de Produtos

Catálogo de produtos interativo desenvolvido em React como atividade acadêmica da **Unyleya**. O projeto aplica conceitos fundamentais da biblioteca na construção de interfaces dinâmicas e reativas, com comunicação assíncrona via API simulada.

---

## ✨ Funcionalidades

- **Listagem dinâmica** — exibe produtos com nome, categoria, preço e imagem
- **Destaque de promoções** — preço original riscado com o valor com desconto aplicado
- **Preço total** — soma automática de todos os produtos do catálogo
- **Cadastro de produtos** — formulário para adicionar novos itens via POST na API
- **Remoção com confirmação** — modal de confirmação antes de deletar via DELETE na API
- **Upload com preview** — imagem em Base64 com visualização em tempo real
- **Validação de formulário** — impede envio com campos obrigatórios vazios
- **Persistência de imagens** — imagens salvas no localStorage e restauradas ao recarregar
- **Filtro por categoria** — filtra produtos pelo select dinâmico
- **Busca por nome** — filtra produtos em tempo real pelo campo de busca

---

## 🧠 Conceitos de React Aplicados

| Conceito | Onde é usado |
|---|---|
| `useState` | Estado do formulário, lista de produtos e controle do modal |
| `useEffect` | Carregamento inicial dos produtos via `fetch` |
| `props` | Comunicação entre todos os componentes |
| `children` | Botão "Adicionar ao carrinho" passado para `ProdutoCard` via `ListaProdutos` |
| `map()` | Renderização da lista de produtos |
| `reduce()` | Cálculo do preço total do catálogo |
| Renderização condicional | Badge de promoção, campo de desconto, modal, preview de imagem |
| Manipulação de eventos | `onChange`, `onSubmit`, `onClick` |
| Componentes funcionais | Todos os 7 componentes do projeto |
| `async/await` | Funções de GET, POST e DELETE na API |
| JSX | Toda a camada de visualização |

---

## 🚀 Tecnologias

- [React](https://react.dev/)
- JavaScript ES6+
- CSS3
- [json-server](https://github.com/typicode/json-server) — API REST fake local

---

## ⚙️ Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14+)
- npm ou yarn
- json-server instalado globalmente

```bash
npm install -g json-server
```

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/catalogo-produtos.git
cd catalogo-produtos

# 2. Instale as dependências
npm install

# 3. Em um terminal, inicie a API fake na porta 3001
json-server --watch public/produtos.json --port 3001

# 4. Em outro terminal, inicie o React na porta 3000
npm start
```

| Serviço | Endereço |
|---|---|
| Aplicação React | http://localhost:3000 |
| API json-server | http://localhost:3001/produtos |

---

## 🌐 Integração com API

O projeto usa o **json-server** como API REST local. Todos os dados são persistidos no arquivo `public/produtos.json`.

| Método | Endpoint | Quando é usado |
|---|---|---|
| `GET` | `/produtos` | Carregamento inicial da lista |
| `POST` | `/produtos` | Cadastro de novo produto |
| `DELETE` | `/produtos/:id` | Remoção de produto |

> **Atenção:** as imagens em Base64 não são enviadas para a API por serem grandes demais. Elas são gerenciadas separadamente pelo localStorage (veja abaixo).

---

## 💾 Como o localStorage Funciona

O localStorage é um espaço de armazenamento do próprio navegador que guarda dados mesmo após fechar a aba. Neste projeto ele é usado **exclusivamente para armazenar as imagens** dos produtos cadastrados pelo formulário, já que imagens em Base64 são muito grandes para trafegar pela API.

### Estrutura salva no localStorage

```json
{
  "10": "data:image/png;base64,iVBORw0KGgo...",
  "11": "data:image/jpeg;base64,/9j/4AAQSkZJ..."
}
```

Cada chave é o `id` do produto retornado pela API. O valor é a string Base64 da imagem.

### Fluxo completo

**Ao adicionar um produto:**
1. O formulário separa a imagem dos dados textuais
2. Os dados textuais (nome, preço, categoria...) são enviados via `POST` para a API
3. A API retorna o produto salvo com o `id` gerado automaticamente
4. A imagem é salva no localStorage usando esse `id` como chave
5. O produto é exibido na lista já com a imagem

**Ao carregar a página (GET):**
1. Os produtos são buscados da API
2. O localStorage é consultado para encontrar a imagem de cada `id`
3. Cada produto recebe sua imagem de volta antes de ser exibido

**Ao remover um produto (DELETE):**
1. O produto é deletado da API
2. A imagem correspondente é removida do localStorage pelo `id`
3. O produto some da lista

Dessa forma a API cuida dos dados e o localStorage cuida das imagens, sem ultrapassar o limite de tamanho da API.

---

## 📁 Estrutura do Projeto

```
catalogo-produtos/
├── public/
│   └── produtos.json         # Banco de dados do json-server
└── src/
    ├── assets/               # Imagens estáticas dos produtos iniciais
    ├── components/
    │   ├── Header.jsx              # Cabeçalho com logo e total de produtos
    │   ├── Footer.jsx              # Rodapé com autor e instituição
    │   ├── FormularioProduto.jsx   # Formulário de cadastro
    │   ├── ListaProdutos.jsx       # Renderiza a grade de produtos
    │   ├── ProdutoCard.jsx         # Card individual de produto
    │   └── ModalConfirmacao.jsx    # Modal de confirmação de remoção
    ├── App.jsx               # Componente raiz — gerencia estado e chamadas à API
    ├── App.css               # Estilos globais
    └── index.js              # Ponto de entrada
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Autor:** Fabris — Unyleya