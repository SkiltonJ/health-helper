import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../css/form.css";
import "../../css/button.css";

type Input = {
  verificationCode: string;
};

export const VerificationCode = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/verify",
        data
      );
      if (!response.data.success) {
        throw new Error(`Error: ${response.data.message}`);
      }

      console.log("Signup successful:");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-container_inner'>
        <div>
          <h2 className='text-3xl font-semibold text-gray-900'>
            Welcome username! So glad to have you!
          </h2>
          <p className='text-gray-500'>We sent a code to email address</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='form-group'>
            <label>Verification Code</label>
            <input {...register("verificationCode")} />
            <p className='text-red-500'>{errors.verificationCode?.message}</p>
          </div>
          <div className='button-primary mt-4'>
            <input type='submit' value='Verify' className='cursor-pointer' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
