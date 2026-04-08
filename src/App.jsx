import { useState, useEffect } from 'react';
import ListaProdutos from './components/ListaProdutos';
import FormularioProduto from './components/FormularioProduto';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalConfirmacao from './components/ModalConfirmacao';
import './App.css';

const API_URL = 'http://localhost:3001/produtos';
const IMAGENS_KEY = 'catalogo_imagens'; // chave no localStorage só para imagens

// Retorna o mapa de imagens salvo no localStorage { id: base64 }
const getImagensStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(IMAGENS_KEY)) || {};
  } catch {
    return {};
  }
};

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [buscar, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [produtoParaRemover, setProdutoParaRemover] = useState(null);

  // GET — carrega produtos da API e injeta as imagens do localStorage
  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error('Erro ao carregar produtos');
        const dados = await resposta.json();

        // Junta cada produto com sua imagem salva localmente
        const imagens = getImagensStorage();
        const dadosComImagem = dados.map(p => ({
          ...p,
          imagem: imagens[p.id] || p.imagem
        }));

        setProdutos(dadosComImagem);
      } catch (erro) {
        console.error('Falha ao carregar produtos:', erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  // POST — envia só os dados textuais para a API, salva imagem base64 no localStorage
  const adicionarProduto = async (novoProduto) => {
    try {
      const { imagem, ...dadosSemImagem } = novoProduto; // separa imagem dos dados

      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosSemImagem) // envia sem a imagem
      });
      if (!resposta.ok) throw new Error('Erro ao adicionar produto');

      const produtoSalvo = await resposta.json(); // json-server retorna com id gerado

      // Salva a imagem base64 no localStorage vinculada ao id
      if (imagem) {
        const imagens = getImagensStorage();
        imagens[produtoSalvo.id] = imagem;
        localStorage.setItem(IMAGENS_KEY, JSON.stringify(imagens));
      }

      // Adiciona ao estado já com a imagem
      setProdutos(prev => [...prev, { ...produtoSalvo, imagem }]);
      setMostrarFormulario(false);
    } catch (erro) {
      console.error('Falha ao adicionar produto:', erro);
    }
  };

  const solicitarRemocao = (id) => {
    const produto = produtos.find(p => p.id === id);
    setProdutoParaRemover(produto);
  };

  // DELETE — remove da API e limpa a imagem do localStorage
  const confirmarRemocao = async () => {
    try {
      const resposta = await fetch(`${API_URL}/${produtoParaRemover.id}`, {
        method: 'DELETE'
      });
      if (!resposta.ok) throw new Error('Erro ao remover produto');

      // Remove a imagem do localStorage junto
      const imagens = getImagensStorage();
      delete imagens[produtoParaRemover.id];
      localStorage.setItem(IMAGENS_KEY, JSON.stringify(imagens));

      setProdutos(prev => prev.filter(p => p.id !== produtoParaRemover.id));
      setProdutoParaRemover(null);
    } catch (erro) {
      console.error('Falha ao remover produto:', erro);
    }
  };

  const cancelarRemocao = () => {
    setProdutoParaRemover(null);
  };

  const categorias = [...new Set(produtos.map(p => p.categoria))];

  const produtosFiltrados = produtos
    .filter(p => p.nome.toLowerCase().includes(buscar.toLowerCase()))
    .filter(p => !filtro || p.categoria === filtro);

  return (
    <div className="app">
      <Header totalProdutos={produtos.length} />

      <main className="main-content">
        <button
          className="btn-novo-produto"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? '✕ Cancelar' : '+ Novo Produto'}
        </button>

        {mostrarFormulario && (
          <FormularioProduto onAdicionar={adicionarProduto} />
        )}

        <div className="filtros-container">
          <div className="input-wrapper">
            <input
              className="input-search"
              type="search"
              placeholder=" Buscar por nome..."
              value={buscar}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <select
            className="select-filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categorias.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <ListaProdutos
          produtos={produtosFiltrados}
          onRemover={solicitarRemocao}
          carregando={carregando}
        />
      </main>

      <Footer />

      {produtoParaRemover && (
        <ModalConfirmacao
          nomeProduto={produtoParaRemover.nome}
          onConfirmar={confirmarRemocao}
          onCancelar={cancelarRemocao}
        />
      )}
    </div>
  );
}

export default App;