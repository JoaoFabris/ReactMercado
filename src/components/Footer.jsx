const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-texto">
        © {ano} ReactMercado — Desenvolvido com React por <strong>Fabris</strong>
      </p>
      <p className="footer-sub">Atividade acadêmica · Unyleya</p>
    </footer>
  );
};

export default Footer;