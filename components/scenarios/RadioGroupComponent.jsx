
import React from "react";
import { useState } from "react";

const RadioGroupComponent = () => {

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
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleChange}
                    />
                    Option 1
                </label>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleChange}
                    />
                    Option 2
                </label>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleChange}
                    />
                    Option 3
                </label>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RadioGroupComponent;