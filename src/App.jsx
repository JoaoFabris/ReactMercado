import { useState } from 'react';
import { produtos as produtosIniciais } from './data/produtos';
import ListaProdutos from './components/ListaProdutos';
import FormularioProduto from './components/FormularioProduto'
import './App.css';

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const adicionarProduto = (novoProduto) => {
    const produtoComId = {
      ...novoProduto,
      id: Math.max(...produtos.map(p => p.id), 0) + 1
    };
    setProdutos([...produtos, produtoComId]);
    setMostrarFormulario(false);
  };

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

      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;