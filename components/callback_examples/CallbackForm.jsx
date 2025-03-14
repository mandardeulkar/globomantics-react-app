import React from 'react'
import { useState, useCallback } from 'react';
import InputField from './InputField';

const CallbackForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = useCallback((e) => {
        setFirstName(e.target.value);
    }, []); // No dependencies, so it's memoized

    const handleLastNameChange = useCallback((e) => {
        setLastName(e.target.value);
    }, []); // No dependencies, so it's memoized

    return (
        <div>
            <InputField label="First Name" value={firstName} onChange={handleFirstNameChange} />
            <InputField label="Last Name" value={lastName} onChange={handleLastNameChange} />
            <p>
                Full Name: {firstName} {lastName}
            </p>
        </div>
    )
}

export default CallbackForm