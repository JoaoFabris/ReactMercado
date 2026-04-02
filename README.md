# 🛍️ ReactMercado — Catálogo de Produtos

Catálogo de produtos interativo desenvolvido em React como atividade acadêmica da **Unyleya**. O projeto aplica conceitos fundamentais da biblioteca na construção de interfaces dinâmicas e reativas.

---

## ✨ Funcionalidades

- **Listagem dinâmica** — exibe produtos com nome, categoria, preço e imagem
- **Destaque de promoções** — preço original riscado com o valor com desconto aplicado
- **Preço total** — soma automática de todos os produtos do catálogo
- **Cadastro de produtos** — formulário para adicionar novos itens dinamicamente
- **Upload com preview** — imagem em Base64 com visualização em tempo real
- **Validação de formulário** — impede envio com campos obrigatórios vazios

---

## 🧠 Conceitos de React Aplicados

| Conceito | Onde é usado |
|---|---|
| `useState` | Estado do formulário e lista de produtos |
| `props` | Comunicação entre `App`, `ListaProdutos` e `ProdutoCard` |
| `map()` | Renderização da lista de produtos |
| `reduce()` | Cálculo do preço total |
| Renderização condicional | Badge de promoção, campo de desconto, preview de imagem |
| Manipulação de eventos | `onChange`, `onSubmit`, `onClick` |
| Componentes funcionais | `ProdutoCard`, `ListaProdutos`, `FormularioProduto` |
| JSX | Toda a camada de visualização |

---

## 🚀 Tecnologias

- [React](https://react.dev/) 
- JavaScript ES6+
- CSS3

---

## ⚙️ Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14+)
- npm ou yarn

### Passos
```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/catalogo-produtos.git
cd catalogo-produtos

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`.

---

## 📁 Estrutura do Projeto
```
src/
├── assets/               # Imagens dos produtos (png)
├── components/
│   ├── FormularioProduto.jsx   # Formulário de cadastro
│   ├── ListaProdutos.jsx       # Renderiza a lista
│   └── ProdutoCard.jsx         # Card individual de produto
├── data/
│   └── produtos.js       # Dados mockados iniciais
├── App.jsx               # Componente raiz
└── index.js              # Ponto de entrada
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Autor:** Fabris — Unyleya