import React, { useState } from 'react'
import DisplayComponent from './DisplayComponent'

const MixedFormComponent = () => {

    const [formData, setFormData] = useState({
        username: '',
        useraddress: '',
        usergender: '',
        useragreement: false
    });
    const [errors, setErrors] = useState({});
    const [showDisplay, setShowDisplay] = useState(false); // Add state to control display


    const handleChange = (e) => {
        console.log(e.target);
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        let tempErrors = {};

        if (!formData.username) {
            tempErrors.usernameerror = 'Name is required';
        }

        if (!formData.useraddress) {
            tempErrors.useraddresserror = "User Address is required";
        }

        if (!formData.usergender) {
            tempErrors.usergendererror = "User gender is required";
        }

        if (!formData.useragreement) {
            tempErrors.useraggrementerror = "User agrement is required";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setShowDisplay(true);
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <>
            {
                showDisplay ? (<DisplayComponent data={formData} onBack={() => setShowDisplay(false)} />) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>User Name :</label>
                            <input type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.usernameerror && <p style={{ color: 'red' }}>{errors.usernameerror}</p>}
                        </div>

                        <div>
                            <label>User address :</label>
                            <textarea
                                name='useraddress'
                                value={formData.useraddress}
                                onChange={handleChange}
                            />
                            {errors.useraddresserror && <p style={{ color: 'red' }}>{errors.useraddresserror}</p>}
                        </div>

                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="usergender"
                                    value="male"
                                    checked={formData.usergender === 'male'}
                                    onChange={handleChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="usergender"
                                    value="female"
                                    checked={formData.usergender === 'female'}
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                            {errors.usergendererror && <p style={{ color: 'red' }}>{errors.usergendererror}</p>}
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="useragreement"
                                    checked={formData.useragreement}
                                    onChange={handleChange}
                                />
                                Agree to terms
                            </label>
                            {errors.useraggrementerror && <p style={{ color: 'red' }}>{errors.useraggrementerror}</p>}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </>
    )
}

export default MixedFormComponent