import React from 'react'

function FormField({ type, name, label,  value, onChange, rows, cols }) {
  return (
    <div>
      <label>
        {label}
        <input 
          type={type}
          name={name}
          value={value}
          rows={rows}
          cols={cols}
          onChange={onChange}
        />
      </label>
    </div>
  )
}


export default FormField