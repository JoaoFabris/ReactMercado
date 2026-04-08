const ModalConfirmacao = ({ nomeProduto, onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-titulo">Remover produto?</h3>
        <p className="modal-texto">
          Tem certeza que deseja remover <strong>{nomeProduto}</strong> do catálogo?
        </p>
        <div className="modal-acoes">
          <button className="btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="btn-confirmar" onClick={onConfirmar}>
            Sim, remover
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default ModalConfirmacao;
 