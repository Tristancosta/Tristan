import React from 'react'

function Field ({value, name, type, label, onChange}) {
    return (
        <div>
            <label>
                {label}:
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
            </label>
        </div>  
    )
}

export default Field;