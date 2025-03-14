import React from 'react'
import { memo } from 'react';

const InputField = memo(({ label, value, onChange }) => {

    console.log(`InputField ${label} rendered`); // Log for demonstration

    return (
        <div>
            <div>
                <label>{label}: </label>
                <input type="text" value={value} onChange={onChange} />
            </div>
        </div>
    )
});

export default InputField