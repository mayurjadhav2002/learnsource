
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import React, { useState, useEffect } from "react";

import './App.css';
import Softwares from "./Components/Software Coupons/Softwares"
import View from "./Components/Software Coupons/View"
import Internships from "./Components/Blogs/Internships"
import Home from "./Home";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Company/Disclaimer";
import Udemy from "./Components/More/Udemy";
import AItools from "./Components/More/AItools";
import Errors from "./Components/Company/Errors";
import Offline from "./Components/Miscellaneous/Offline";
import About from "./Components/Company/About";
import Contact from "./Components/Company/Contact";
import Terms from "./Components/Company/Terms";
import Policy from "./Components/Company/Policy";
import Write from "./Components/Company/Write";
import Contribution from "./Components/Company/Contribution";
import Blog from "./Components/Blogs/Blog";
import Login from "./Components/Admin/Login";
import Signup from "./Components/Admin/Signup";

function App() {


  const [isOnline, setIsOnline] = useState(navigator.onLine);
  	useEffect(() => {
    	function onlineHandler() {
      		setIsOnline(true);
    	}
    	function offlineHandler() {
      		setIsOnline(false);
    	}
	
    	window.addEventListener("online", onlineHandler);
    	window.addEventListener("offline", offlineHandler);

	
    	return () => {
      		window.removeEventListener("online", onlineHandler);
      		window.removeEventListener("offline", offlineHandler);
    	};
  	}, []);
  return (
    <div >
   

    <Navbar/>
    {isOnline ? (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Errors />} />

      <Route path="/software-discounts" element={<Softwares />} />

      <Route path="/blogs" element={<Internships />} />
      <Route path="/blogs/:id/:slug" element={<Blog />} />

      <Route path="software-discounts/view/:id/:slug" element={<View />} />
      <Route path="/udemy-coupons-free-courses" element={<Udemy />} />
      <Route path="/ai-tools" element={<AItools />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/about-us" element={<About />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/apply-for-writer" element={<Write />} />
      <Route path="/User/Login" element={<Login />} />
      <Route path="/User/register" element={<Signup />} />

      <Route path="/open-source-contribution" element={<Contribution />} />


    </Routes>
    ) : (
     <Offline/>
    )}
  
    
<Footer/>

    </div>
  );
}

export default App;
