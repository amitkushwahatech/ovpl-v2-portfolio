import React, { useEffect, useRef, useState } from "react";
import Home from "./Home.jsx";
import './SignInSignUp.css';
import { styles } from "../styles";
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        
    <>
            {showHome? <Home/>:
            (show?
                <div>
                    <div className="cardform">
    <h1 className="title"> Hello {localName}</h1>
    <div clas='form'>
      <input type="text"  className="input" placeholder="Email" ref={email} />
      <input type="password" placeholder='   Password' ref={password} className="input"/>
    </div>
    <button className="btn" onClick={handleSignIn}>Log In

    </button>

    {/* <span className='signup'><a href=''>Or SignUp</a></span> */}
  </div>
  <div className="container">
  
  <div className="blob"></div>
  <div className="blob_two"></div>

</div> 
</div>            
              
                :
                <div>
                <div className="cardform">
                <h1 className="title"> Welcome {localName}</h1>
                <div clas='form'>
                  <input  placeholder="Name" type='text' ref={name}  className="input"/>
                  <input placeholder="Email" type='text' ref={email}  className="input" />
                  <input type="password" placeholder='   Password'  className="input" ref={password}/>
                </div>
                <button className="btn" onClick={handleClick}>Sign up
            
                </button>
            
                {/* <span className='signup'><a href=''>Or SignIn</a></span> */}
             
                
                </div>
                <div className="container">
  
                <div className="blob"></div>
                <div className="blob_two"></div>
              </div>
              </div>)
            }
 
 </>
        
        
    );
}
export default SignInSignupWithLocalStorage;
// import React, { useEffect, useRef, useState } from "react";
// import Home from "./Home.jsx";
// import './SignInSignUp.css';
// function SignInSignupWithLocalStorage(){
//    const name=useRef()
//    const email=useRef()
//    const password=useRef()
//    const [showHome,setShowHome]=useState(false)
//    const [show,setShow]=useState(false)
//     const localSignUp=localStorage.getItem("signUp")
//     const localEmail=localStorage.getItem("email")
//     const localPassword=localStorage.getItem("password")
//     const localName=localStorage.getItem("name")
//    useEffect(()=>{
//     if(localSignUp){
//         setShowHome(true)
//     }
//     if(localEmail){
//         setShow(true)
//     }
//    })
//    const handleClick=()=>{
//        if(name.current.value&&email.current.value&&password.current.value)
//       {
//         localStorage.setItem("name",name.current.value)
//         localStorage.setItem("email",email.current.value)
//         localStorage.setItem("password",password.current.value)
//         localStorage.setItem("signUp",email.current.value)
//         alert("Account created successfully!!")
//         window.location.reload()
//       }
//    }

//    const handleSignIn=()=>{
//     if(email.current.value==localEmail&&password.current.value==localPassword){
//         localStorage.setItem("signUp",email.current.value)
//         window.location.reload()
//     }else{
//         alert("Please Enter valid Credential")
//     }
//    }
//     return(
//         <div>
//             {showHome?<Home/>:
//             (show?
//                 <div className="container">
//                         <h1>Hello {localName}</h1>
//                         <div className="input_space">
//                             <input placeholder="Email" type='text' ref={email} />
//                         </div>
//                         <div className="input_space">
//                             <input placeholder="Password" type='password' ref={password} />
//                         </div>
//                         <button onClick={handleSignIn}>Sign In</button>
//                 </div>
//                 :
//                 <div className="container">
//                         <div className="input_space">
//                             <input placeholder="Name" type='text' ref={name} />
//                         </div>
//                         <div className="input_space">
//                             <input placeholder="Email" type='text' ref={email} />
//                         </div>
//                         <div className="input_space">
//                             <input placeholder="Password" type='password' ref={password} />
//                         </div>
//                         <button onClick={handleClick}>Sign Up</button>
//                 </div>)
//             }
            
//         </div>
//     );
// }
// export default SignInSignupWithLocalStorage;