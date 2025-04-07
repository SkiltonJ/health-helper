import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../css/form.css";
import "../../css/button.css";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
  };
  return (
    <div className='form-container'>
      <div className='form-container_inner'>
        <div>
          <h2 className='text-3xl font-semibold'>Sign in</h2>
          <p className='text-gray-500'>Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='form-group'>
            <label>Email</label>
            <input {...register("email")} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input {...register("password")} type='password' />
          </div>
          <div className='button-primary mt-4'>
            <input type='submit' value='Login' className='cursor-pointer' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
