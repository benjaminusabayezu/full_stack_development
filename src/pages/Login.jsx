
import Loader from "../components/ui/Loader";
import Input from '../components/ui/Input'
import Alert from "../components/ui/Alert";
import CheckBox from '../components/ui/CheckBox'
import PasswordInput from "../components/ui/PasswordInput";
import Button from '../components/ui/Button'
import {Link } from 'react-router-dom'
import { useState } from "react";
import Register from "./Register";
import {Send} from 'lucide-react'
const Login = () => {
const [isLoading,setIsLoading]=useState(false)
const [form,setForm] =useState({
    email:"",
    password:"",
});
//validation
const [errors,setErrors] =useState({})

const validation =(e) =>{
    const newErrors ={}

    if(!form.email.trim()){
        newErrors.email ="Please E-mail is required"
    }
    if(!form.password.trim()){
        newErrors.password="This Password is mandantory"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length ===0
}

const handleChanges =(e) =>{
    setForm({...form,[e.target.name]:e.target.value,})
}

const handleSubmit =(e)=>{
    e.preventDefault();

    if (!validation()) return;
    setIsLoading(true)
    setTimeout(()=>{
        console.log(form)
        setIsLoading(false)
    },3000)
}

  return (
    <div className="min-h-screen flex bg-stone-200 items-center justify-center">
      <div
        className="bg-gradient-to-t from-yellow-400 via-transparent rounded-xl shadow-2xl shadow-yellow-300 
        w-full p-8 max-w-md"
      >
        
        <div className="mb-2">
          <h1
            className="text-5xl font-bold bg-gradient-to-t  to-yellow-500
                bg-clip-text text-transparent"
          >
            Welcome Back
          </h1>
          <div className="bg-yellow-400/70 p-[0.2px] w-[70%] ml-10 mt-4 shadow-md opacity-50" />
        </div>
        {/* ............................. */}
        <form className="space-y-4 p-4" onSubmit={handleSubmit}>
          <p className="text-stone-800">Sign in to continue.</p>
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChanges}
            placeholder="Your email"
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Your Password"
            onChange={handleChanges}
            value={form.password}
            error={errors.password}
          />

          <div className="flex items-center justify-between text-sm py-2">
            <CheckBox label="Remember Me" />
            <button className="text-yellow-600 underline cursor-pointer">
              Reset the Password
            </button>
          </div>

          <Button size="md" type="submit" disabled={isLoading}>
           {isLoading ? "Processing..." : <span className="items-center justify-center flex gap-2">
            <Send  className="w-4 h-4"/>
            Sign in
            </span>}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            <span>Don't have an account?</span>
            <Link to="/register" className="ml-3 font-medium text-yellow-700">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;