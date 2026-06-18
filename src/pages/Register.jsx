import Input from '../components/ui/Input'
import PasswordInput from '../components/ui/PasswordInput'
import CheckBox from '../components/ui/CheckBox'
import Button from '../components/ui/Button'
import {Link } from 'react-router-dom'
import { useState } from 'react'
import { Send } from "lucide-react";
const Register = () => {
const [form,setForm] =useState({
    names:"",
    email:"",
    password:"",
    confirmPassword:"",
    agree: false,
})

const [errors,setErrors] =useState({})
const [isLoading, setIsLoading] =useState(false)


const handleChanges =(e)=>{
    const{name,value,type,checked} =e.target;
    setForm((prev) =>({
        ...prev,[name]:type ==="checked" ? checked:value,
    }))
}

const validate = () => {
  const newErrors = {};

  if (!form.names.trim()) {
    newErrors.names = "Full name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!form.password) {
    newErrors.password = "Password is required";
  }

  if (form.password.length < 8) {
    newErrors.password =
      "Password must be at least 8 characters";
  }

  if (form.password !== form.confirmPassword) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  if (!form.agree) {
    newErrors.agree =
      "You must accept terms and conditions";
  }
 setErrors(newErrors)
 return Object.keys(newErrors).length ===0;
};

const handleSubmit=(e)=>{
    e.preventDefault()

    if(!validate()) return
    setIsLoading(true)

    setTimeout(()=>{
        console.log(form)

        setIsLoading(false)
    },3000)
}

  return (
    <div className="min-h-screen bg-stone-200 items-center flex justify-center">
      <div className="bg-gradient-to-t from-lime-400 via-transparent rounded-xl shadow-2xl w-full p-8 max-w-md  shadow-lime-400">
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-lime-300 to-lime-500 bg-clip-text text-transparent">
            Create Account
          </h1>
          <div className="bg-lime-400/70 p-[0.2px] w-[70%] ml-10 mt-4 shadow-md opacity-50" />
          <p className="text-stone-300 mt-2">Start your journey</p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="w-full items-center justify-between flex gap-2">
            <Input
              label="Full Name"
              name="names"
              placeholder="Ben jean"
              value={form.names}
              onChange={handleChanges}
              error={errors.names}
            />
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="Ben@jean.com"
              value={form.email}
              onChange={handleChanges}
              error={errors.email}
            />
          </div>

          <div className="w-full items-center justify-between flex gap-2">
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChanges}
              error={errors.password}
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChanges}
              error={errors.confirmPassword}
            />
          </div>

          <div className="flex gap-2 items-center text-sm mb-4">
            <CheckBox
              label="I agree the Terms and conditions"
              name="agree"
              checked={form.agree}
              onChange={handleChanges}
            />
          </div>
          <Button type="submit" size="md" variant="success" disabled={isLoading}>
            {isLoading ? (
              "Processing...."
            ) : (
              <span className="items-center justify-center flex gap-2">
                <Send className="w-4 h-4 " />
                Create Account
              </span>
            )}
          </Button>
        </form>
        <div className="text-sm items-center text-center justify-center mt-2">
          <p>
            <span>Already Registered</span>
            <Link to="/" className="ml-4 font-medium text-lime-900 ">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;