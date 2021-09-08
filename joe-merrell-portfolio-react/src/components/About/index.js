import React from 'react';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import selfie from '../../assets/images/selfie.png';


function About() {
  return (
    <section className="container-fluid mt-5">
      <h5 id="about" className="text-head container-fluid">About me</h5>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
          <p className="basic px-2">Born in Seattle, Washington, I'm a Los Angeles-based artist and web developer. My education includes degrees in philosophy, art(film), as well as a certificate in full-stack web development earned at UCLA's Coding Bootcamp. My web-related technical skills include:</p>
            <ul className="basic">
                <li>JavaScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
            </ul>
            <p className="basic px-2">In addition to coding, I have experience in digital media using a range of software packages including:</p>
            <ul className="basic">
                <li>Cinema4D (cg modeling & animation)</li>
                <li>AfterEffects</li>
                <li>Photoshop/Illustrator</li>
                <li>Premier Pro/Final Cut Pro</li>
                <li>Unreal (gaming/3d Interactive)</li>
            </ul>
            <p className="basic px-2">More detailed information can be found at the Resume link above. Artist website and social media links below:</p>
            </div>
            <div className="col-lg-auto"></div>
            <div className="col col-lg-2"></div>
        </div>

      </div>

    </section>
  );
}

export default About;