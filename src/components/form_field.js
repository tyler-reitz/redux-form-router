import React from 'react'

const FormField = (
  { 
    label, 
    meta: { 
      error,
      touched
    }, 
    input 
  },
  ...field
) => (
  <div className={'form-group ' + (touched && error ? 'has-danger' : '')}>
    <label>{label}</label>
    <input 
      {...input} 
      className="form-control" 
      type="text" 
    />
    <div className="text-help">
      {touched ? error : ''}
    </div>
  </div>
)

export default FormField
