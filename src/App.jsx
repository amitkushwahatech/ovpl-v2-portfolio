import { BrowserRouter, Routes, Route } from "react-router-dom";



import SignInSignupWithLocalStorage from "./components/SignInSignupWithLocalStorage";



const App = () => {
  return (
    <BrowserRouter>
      
          <SignInSignupWithLocalStorage/>
    
    </BrowserRouter>
  );
}

export default App;



// import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import Timeline from "./components/Timeline";
// import Footer from "./components/Footer";

// import SignInSignupWithLocalStorage from "./components/SignInSignupWithLocalStorage";


// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* <div className='relative z-0 bg-primary'>
//         {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar />
//           <Hero />
//         </div> */}
//     {/* <StarsCanvas /> */}
//      {/* <div className='relative z-0'>    */}
//     {/* <About />
//       <Tech />
//       <Timeline/> */}
//       {/* <Experience /> */}
//     {/* <Works />
//         <Feedbacks /> */}
       
//           {/* <Contact /> */}
//          {/* <Footer/> */}
//           {/* <StarsCanvas /> */}
//         {/* </div>
//       </div> */} 

//       {/* <SignInSignupWithLocalStorage/> */}

    
//     </BrowserRouter>
//   );
// }

// export default App;
