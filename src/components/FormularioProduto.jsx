import { useState } from 'react';

function FormularioProduto({ onAdicionar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Eletrônicos');
  const [emPromocao, setEmPromocao] = useState(false);
  const [desconto, setDesconto] = useState(0);
  const [imagem, setImagem] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione um arquivo PNG ou JPG.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !categoria || !imagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    onAdicionar({ nome, preco: parseFloat(preco), categoria, emPromocao, desconto: parseFloat(desconto), imagem });
    setNome('');
    setPreco('');
    setCategoria('Eletrônicos');
    setEmPromocao(false);
    setDesconto(0);
    setImagem('');
  };

  return (
    <form className="formulario-produto" onSubmit={handleSubmit}>
      <h2>Cadastrar Novo Produto</h2>

      <div className="form-grupo">
        <label htmlFor="nome">Nome do Produto:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Mouse Wireless"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="preco">Preço (R$):</label>
        <input
          type="number"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="0.00"
          step="0.01"
          min="0"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="categoria">Categoria:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Áudio">Áudio</option>
          <option value="Acessórios">Acessórios</option>
        </select>
      </div>

      <div className="form-grupo">
        <label htmlFor="imagem">Imagem:</label>
        <input
          type="file"
          id="imagem"
          accept="image/png,image/jpeg"
          onChange={handleImageChange}
        />
      </div>

      <div className="form-grupo checkbox">
        <label htmlFor="emPromocao">
          <input
            type="checkbox"
            id="emPromocao"
            checked={emPromocao}
            onChange={(e) => setEmPromocao(e.target.checked)}
          />
          Em promoção?
        </label>
      </div>

      {emPromocao && (
        <div className="form-grupo">
          <label htmlFor="desconto">Desconto (%):</label>
          <input
            id="desconto"
            value={desconto}
            onChange={(e) => setDesconto(e.target.value)}
            min="0"
            max="100"
          />
        </div>
      )}

      <button type="submit" className="btn-adicionar">
        ✓ Adicionar Produto
      </button>
    </form>
  );
}

export default FormularioProduto;