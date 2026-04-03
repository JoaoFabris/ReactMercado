import { useState } from 'react';
import { produtos as produtosIniciais } from './data/produtos';
import ListaProdutos from './components/ListaProdutos';
import FormularioProduto from './components/FormularioProduto'
import './App.css';

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtro, setFiltro] = useState(false)
  const [buscar, setBusca] = useState('')

  const adicionarProduto = (novoProduto) => {
    const produtoComId = {
      ...novoProduto,
      id: Math.max(...produtos.map(p => p.id), 0) + 1
    };
    setProdutos([...produtos, produtoComId]);
    setMostrarFormulario(false);
  };

  const categorias = produtos.map(e => e.categoria)
  console.log(categorias);

  const produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(buscar.toLowerCase()))

  return (
    <div className="app">
      <button
        className="btn-novo-produto"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? '✕ Cancelar' : '+ Novo Produto'}
      </button>

      {mostrarFormulario && (
        <FormularioProduto onAdicionar={adicionarProduto} />
      )}
      <input className='input-search' type="search" placeholder='Buscar por nome' value={buscar} onChange={(e) => setBusca(e.target.value)} />
      <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        {categorias.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <ListaProdutos produtos={produtosFiltrados} />
    </div>
  );
}

export default App;