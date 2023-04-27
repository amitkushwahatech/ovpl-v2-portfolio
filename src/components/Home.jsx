import React from "react";
import './SignInSignUp.css';
import { StarsCanvas } from "./canvas";
import Footer from "./Footer";
import Contact from "./Contact";
import Feedbacks from "./Feedbacks";
import Works from "./Works";
import Experience from "./Experience";
import Timeline from "./Timeline";
import Tech from "./Tech";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            
        
            <div className='relative z-0 bg-primary'>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      <div className='relative z-0'>   
    <About />
      <Tech />
      <Timeline/>
    <Works />
        <Feedbacks />
       
          <Contact />
         <Footer/>
          <StarsCanvas />
         </div>
      </div> 
      {/* </div> */}
      <div className="flex bg-primary " style={{padding:"30px",marginBottom:"80px",position:"relative"}}>
            <p style={{background:"none",padding:"0.1em"}}>Welcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logoutbtn">LogOut</button>
            <button onClick={deleteAccount} className="deletebtn">Delete</button> 
            </div>
        </div>
    );
}
export default Home;
