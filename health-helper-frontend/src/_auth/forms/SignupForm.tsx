import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/form.css";
import "../../css/button.css";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required().min(6),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^\w\s]/, "Password must contain at least one special character"),
});

export const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        data
      );

      if (!response.data.success) {
        throw new Error(`Error: ${response.data.message}`); // Handle non-success responses appropriately
      }

      console.log("Signup successful:", response.data); // Handle success response (if applicable)
      navigate("/verify"); // Redirect
    } catch (error) {
      console.error("Signup error:", error); // Handle errors effectively
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-container_inner'>
        <div>
          <h2 className='text-3xl font-semibold text-gray-900'>Sign up</h2>
          <p className='text-gray-500'>Create your new account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='form-group'>
            <label>Username*</label>
            <input {...register("username")} />
            <p className='text-red-500'>{errors.username?.message}</p>
          </div>
          <div className='form-group'>
            <label>Email*</label>
            <input {...register("email")} />
            <p className='text-red-500'>{errors.email?.message}</p>
          </div>
          <div className='form-group pb-3'>
            <label>Password*</label>
            <input {...register("password")} type='password' />
            <p className='text-red-500'>{errors.password?.message}</p>
          </div>
          <button type='submit' className='button-primary' disabled={isLoading}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
