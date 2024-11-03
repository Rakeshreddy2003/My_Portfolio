import React from 'react';
import Lottie from "lottie-react";
import gitlogo from "../../assets/github.json";
import instalogo from "../../assets/instagram-2.json";
import linkedInLogo from "../../assets/linkedin-2.json";

// Functional component to display social media icons with Lottie animations
function Social() {
  return (
    <div className="home__social">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/rakeshreddy-sarikonda" 
         className="home__social-icon" 
         target="_blank" 
         rel="noopener noreferrer">
        <Lottie animationData={linkedInLogo} className="socialmedia" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/Rakeshreddy2003" 
         className="home__social-icon" 
         target="_blank" 
         rel="noopener noreferrer">
        <Lottie animationData={gitlogo} className="socialmedia socialmedia-git" />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/rakesh_reddy_2003" 
         className="home__social-icon" 
         target="_blank" 
         rel="noopener noreferrer">
        <Lottie animationData={instalogo} className="socialmedia" />
      </a>
    </div>
  );
}

export default Social;
