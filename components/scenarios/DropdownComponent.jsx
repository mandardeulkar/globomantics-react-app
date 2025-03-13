import React from 'react'
import { useState } from "react";

const DropdownComponent = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        setError(''); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedOption) {
            setError('Please select an option');
        } else {
            console.log('Selected option:', selectedOption);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="options">Select an option:</label>
                <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default DropdownComponent;