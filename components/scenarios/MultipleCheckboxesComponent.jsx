
import React, { useState } from 'react'

const MultipleCheckboxesComponent = () => {

    const fruits = ['Apple', 'Orange', 'Banana'];
    const [selected, setSelected] = useState([]);

    const handleToggle = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Options:', selected);
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                fruits.map((fruit) => (
                    <label key={fruit}>
                        <input type='checkbox'
                            checked={selected.includes(fruit)}
                            onChange={() => handleToggle(fruit)}
                        />
                        {fruit}
                    </label>
                ))
            }
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MultipleCheckboxesComponent