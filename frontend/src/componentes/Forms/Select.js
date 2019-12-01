import React from 'react';

export default function CustomSelect(props) {

  const { id, label, valor, opcoes, onChange } = props;

  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for={id}>{label}</label>
      </div>
      <select class="custom-select" 
        id={id}
        value={valor}
        onChange={onChange} >
        <option selected>Selecione...</option>
        {opcoes.map((op, key) => (
          <option key={key} value={op.valor}>{op.label}</option>
        ))}
      </select>
    </div>
    )
  }
