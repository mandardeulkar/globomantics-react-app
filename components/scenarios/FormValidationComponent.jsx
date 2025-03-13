
import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidationComponent = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm( {mode: "onBlur"} );

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username",{
                required: "Username is required", validate: (value) => value.length>6 || "Username must be at least 6 characters long"
                })} placeholder='Enter your username' />
            {errors.username && <p>{errors.username.message}</p>}

            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormValidationComponent