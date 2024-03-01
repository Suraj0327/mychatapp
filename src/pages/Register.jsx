import { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/Signal-Logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({
        username: "",
        email: "", // Removed the space to make it consistent with other fields
        password: "",
        confirmPassword: "", // Corrected to match the casing in the state
    });
    const taostOptions={
    
            position:"bottom-right",
            autoClose:8000,
            pauseOnHover:true,
            draggable:true,
            theme:"dark",
    
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(handleValidation()){
            const { password, confirmPassword, username, email } = values;
            const {data}=await axios.post()
        }
        // Assuming you want to call validation here
        
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
          
            toast.error("Password and confirm password do not match.",taostOptions);

            return false;

             // Corrected typo in "password"
        }
        else if(username.length<2){
            toast.error("username should be greater than or equal to 2 character.",taostOptions);
            return false;
        }
        else if(password.length<8){
            toast.error("password should be minimum of 8 characters",taostOptions);
            return false;
        }
        else if(email===""){
            toast.error("email is required",taostOptions);
            return false;
        }
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={logo} alt="logo" />
                        <h1>Converso</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
                    <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder="ConfirmPassword" name="confirmPassword" onChange={(e) => handleChange(e)} /> {/* Corrected name attribute */}
                    <button type="submit">Create User</button>
                    <span>
                        already have an account ?<Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
};

const FormContainer = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem; // Corrected typo
        padding: 3rem 5rem; // Corrected typo
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff; // Corrected typo and added #
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0; // Corrected hex code
                outline: none;
            }
        }
        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem; // Corrected typo
            font-size: 1rem;
            text-transform: uppercase;
            transition: background-color 0.5s ease-in-out; // Specified property to transition
            &:hover {
                background-color: #4e0eff;
            }
        }
        span {
            color: white;
            text-transform: uppercase;
        }
        a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
    }
`;

export default Register;
