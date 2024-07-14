import { Link, useNavigate } from "react-router-dom"
import "./Login.modules.css"
import { useState } from "react"
import Swal from "sweetalert2"

let obj = {
  email : "",
  password : ""
}

function Login() {

  const [state,setState] = useState(obj)

   let navigateLink = useNavigate()

   const handleChange = (e)=>{
    setState({...state,[e.target.name]:e.target.value})
    // console.log(state);
   }
   const handleClick = (e)=>{
    e.preventDefault()
    // console.log(state);
    if(state.email)
    {
      fetch(`http://localhost:3000/user?email=${state.email}`)
      .then((res)=>res.json())
      .then((res)=>{
        if(res[0].password == state.password)
        { 
          Swal.fire({
            icon: "success",
            title: "Login Successfull...",
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem("isLogin",true)
          navigateLink("/product")
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Failed",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
      
   }

  return (
    <div className="form-container">
        <div className="form">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Registered Email Address" onChange={handleChange} required/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Registered Password" onChange={handleChange} required/>
            <i className="fa fa-eye" id="eye-icon" onClick="togglePassword()"></i>
            <input type="checkbox" className="term" id="terms" name="terms" required/>
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
            <button type="submit" onClick={handleClick}>Login</button>
            <Link to="/signup"><a>Doesnt have an account? <span>Sign
            up</span></a></Link>
        </div>
        <div className="image-container">
            <img src="https://cdn-lite.ip2location.com/img/sign-up.png"/>
        </div>
    </div>
  )
}

export default Login