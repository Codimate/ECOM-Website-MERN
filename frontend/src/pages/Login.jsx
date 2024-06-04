import { useState } from "react";

const Login = () => {

  
    const [ state, setState ] = useState("login")
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      email : ""
    })

    const changeHolder = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login function ", formData)
        let responseData;
        await fetch ('http://localhost:4000/login',{
          method:"POST",
          headers:{
            Accept: 'application/formData',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }).then((response)=> response.json()).then((data)=> responseData=data)
  
        if(responseData.success){
          localStorage.setItem('auth-token', responseData.token)
          window.location.replace('/')
        }
        else{
          alert(responseData.errors)
        }
    }
  
    const Signup = async () => {
      console.log("Signup ", formData);
      let responseData;
      await fetch ('http://localhost:4000/signup',{
        method:"POST",
        headers:{
          Accept: 'application/formData',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then((response)=> response.json()).then((data)=> responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace('/')
      }
      else{
        alert(responseData.errors)
      }
      
    }

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up"?<input name="username" value={formData.username} onChange={changeHolder} type="text" placeholder="Your Name"  className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>: ""}
          <input type="email" name="email" value={formData.email} onChange={changeHolder} placeholder="Email Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
          <input type="password" name="password" value={formData.password} onChange={changeHolder} placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        </div>
        <button onClick={ () => { state === "Login"? login(): Signup()}} className="btn_dark_rounded my-5  w-full !rounded-md">Continue</button>
        
        {state === "Sign Up"?  <p className="text-black font-bold">Already Have an account? <span onClick={()=> {setState("Login")}} className="text-cyan-500 underline cursor-pointer">Login</span></p>
         :  <p className="text-black font-bold">Create an account? <span  onClick={()=> {setState("Sign Up")}} className="text-cyan-500 underline cursor-pointer">Click here</span></p>}
       
       
        <div className="flexCenter mt-6 gap-3"> 
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
