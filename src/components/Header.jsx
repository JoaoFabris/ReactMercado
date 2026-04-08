const Header = ({ totalProdutos }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <div>
          <h1 className="header-titulo">ReactMercado</h1>
          <p className="header-subtitulo">Os melhores produtos em um só lugar</p>
        </div>
      </div>
      <div className="header-info">
        <span className="header-badge">{totalProdutos} produtos no catálogo</span>
      </div>
    </header>
  );
};
 
export default Header;
 