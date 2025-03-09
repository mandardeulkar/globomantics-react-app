import React, { useState } from "react";

const InputTextAreaComponent = () => {

    const [obj, setObj] = useState({
        username:"",
        useraddress:""
    });

    const handlerChange = (e) => {
        setObj({...obj, [e.target.name]: e.target.value});
    }

    const submitMethod = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", obj);
    }

    return(
        <div>
            <form onSubmit={submitMethod}>
                <div>
                    <label>Name :</label>
                    <input  name="username" value={obj.username} onChange={handlerChange}></input>
                </div>
                <div>
                    <label>USer Address : </label>
                    <textarea name="useraddress" value={obj.useraddress} onChange={handlerChange} ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <pre>{JSON.stringify(obj, null, 2)}</pre>
        </div>
    );
};

export default InputTextAreaComponent;