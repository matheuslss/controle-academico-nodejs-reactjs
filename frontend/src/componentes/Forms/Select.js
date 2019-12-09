import React from 'react';

export default function CustomSelect(props) {

  const { id, label, valor, opcoes, onChange } = props;

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={id}>{label}</label>
      </div>
      <select className="custom-select" 
        id={id}
        value={valor}
        onChange={onChange} >
        <option defaultValue='Selecione' >Selecione...</option>
        {opcoes.map((op, key) => (
          <option key={key} value={op.valor}>{op.label}</option>
        ))}
      </select>
    </div>
    )
  }
