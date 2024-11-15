import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Password: ", password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="md:border-2 md:border-emerald-600 rounded-xl md:p-20">
            <form onSubmit={(e) => {submitHandler(e)}} className="flex flex-col  items-center justify-center">
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className="border-2 placeholder:text-gray-400 bg-transparent outline-none text-white text-xl border-emerald-600 py-4 px-5 rounded-full" type="email" placeholder="Enter your email"/>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className="border-2 placeholder:text-gray-400 bg-transparent outline-none text-white text-xl border-emerald-600 my-3 py-4 px-5 rounded-full" type="password" placeholder="Enter your password"/>
                <button className="mt-5 w-full placeholder:text-white  outline-none text-white text-xl bg-emerald-600 py-4 px-5 rounded-full">Log in</button>
            </form>
        </div>
    </div>
  )
}
