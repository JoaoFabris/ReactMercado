import ProdutoCard from './ProdutoCard';

const ListaProdutos = ({ produtos }) => {
  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
  const produtosEmPromocao = produtos.filter(p => p.emPromocao).length;

  return (
    <div className="lista-container">
      <header className="lista-header">
        <h1>Catálogo de Produtos</h1>
        <div className="resumo">
          <p>Total de produtos: <strong>{produtos.length}</strong></p>
          <p>Em promoção: <strong>{produtosEmPromocao}</strong></p>
          <p>Preço total do catálogo: <strong>R$ {precoTotal.toFixed(2)}</strong></p>
        </div>
      </header>

      <div className="produtos-grid">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            {...produto}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;