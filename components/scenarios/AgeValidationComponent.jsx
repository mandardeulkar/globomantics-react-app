
import React from 'react'
import { useForm } from 'react-hook-form'

const AgeValidationComponent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const validateUserAge = (value) => {
        if (isNaN(value)) {
            return "Age must be number";
        } else {
            return true; //validation passes
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("userage", {
                valueAsNumber: true,    //only consider number
                min: {
                    value: 18,
                    message: "Age must be greater than 18"
                },
                max: {
                    value: 120,
                    message: "Age must not be greater than 120"
                },
                validate: validateUserAge   //redirect to function
            })} />
            {errors.userage && <p>{errors.userage.message}</p>}

            <button type='submit'>Age Submit Button</button>

        </form>
    )
}

export default AgeValidationComponent