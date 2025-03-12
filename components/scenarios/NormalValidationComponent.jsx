import { useState } from "react";

const NormalValidationComponent = () => {

    const [formData, setFormData] = useState({
        username: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        } else {
            console.log("Form has errors")
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.username) {
            tempErrors.errorname = "Name is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name : </label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.errorname && <p style={{ color: 'red' }}>{errors.errorname}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NormalValidationComponent;