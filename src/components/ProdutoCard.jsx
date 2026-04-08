const ProdutoCard = ({ id, nome, preco, categoria, emPromocao, desconto, imagem, onRemover, children }) => {
  const precoFinal = emPromocao ? preco * (1 - desconto / 100) : preco;

  return (
    <div className="produto-card">
      {emPromocao && <div className="badge-promocao">PROMOÇÃO</div>}

      <img src={imagem} alt={nome} className="produto-imagem" />

      <h3>{nome}</h3>
      <p className="categoria">{categoria}</p>

      <div className="preco-container">
        {emPromocao ? (
          <>
            <span className="preco-original">R$ {preco.toFixed(2)}</span>
            <span className="preco-desconto">R$ {precoFinal.toFixed(2)}</span>
            <span className="desconto-percentual">-{desconto}%</span>
          </>
        ) : (
          <span className="preco">R$ {preco.toFixed(2)}</span>
        )}
      </div>

      {children}

      <button
        className="btn-remover"
        onClick={() => onRemover(id)}
      >
        🗑 Remover
      </button>
    </div>
  );
};

export default ProdutoCard;