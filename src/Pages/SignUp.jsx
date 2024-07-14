import { Link, useNavigate } from "react-router-dom"
import "./SignUp.modules.css"
import { useState } from "react"
import Swal from 'sweetalert2'

let obj = {
  name: "",
  email: "",
  password: ""
}

function SignUp() {

  const [state, setState] = useState(obj)

  let navigateLink = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleClick = async(e) => {
    e.preventDefault();
    
    if (state.name === "" || state.email === "" || state.password === "") {
      Swal.fire("Please fill all fields correctly.");
    }
    else{
      try{

        const response = await fetch(`http://localhost:3000/user?email=${state.email}`)
        const user = await response.json();
  
        if(user.length > 0)
        {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Already Exist...",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
        else{
          await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.error('Error:', err);
            });
    
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Signup Successfully...",
              showConfirmButton: false,
              timer: 1500
            });
            setState({
              name: "",
              email: "",
              password: ""
            });
            navigateLink("/login");
        }
  
        
      }catch(err){
        console.log(err);
      }
    }

    
  }

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Sign Up</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Your Fullname" value={state.name} required onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email Address" value={state.email} required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Set Password" value={state.password} required onChange={handleChange} />
          <i className="fa fa-eye" id="eye-icon"></i>
          <input type="checkbox" className="term" id="terms" name="terms" required />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <button type="submit" onClick={handleClick}>Create Account</button>
          <Link to="/login">Already have an account? <span>Login</span></Link>
        </div>
        <div className="image-container">
          <img src="https://cdn-lite.ip2location.com/img/sign-up.png" alt="Sign up illustration" />
        </div>
      </div>
    </>
  )
}

export default SignUp
