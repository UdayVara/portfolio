import React from 'react'
import { Tilt } from 'react-tilt'

export default function About() {
        const defaultOptions = {
                reverse: false,  // reverse the tilt direction
                max: 65,     // max tilt rotation (degrees)
                perspective: 900,   // Transform perspective, the lower the more extreme the tilt gets.
                scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
                speed: 900,   // Speed of the enter/exit transition
                transition: true,   // Set a transition on enter/exit.
                axis: null,   // What axis should be disabled. Can be X or Y.
                reset: true,    // If the tilt effect has to be reset on exit.
                easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        }
        return (
                <>
                        <div className="container-fluid pb-5 pb-md-0" style={{ minHeight: "100vh", backgroundColor: "#083749" }} id="about">
                                <br /><br /><br />

                                <div className="row">
                                        <h1 className="h2 mt-2 mb-4 mb-md-0 text-center" style={{ color: "#26B69F" }}><span style={{ borderBottom: "2px solid #26B69F", fontSize: "2.4rem" }}>About me</span></h1>

                                        <div className="col-md-5" data-aos="zoom-in-up">
                                                <Tilt options={defaultOptions} >
                                                        <img src="me.png" alt="" className='img-fluid' />
                                                </Tilt>
                                        </div>
                                        <div className="col-md-7 mt-4 mt-md-5 pt-md-3 text-align-justify" style={{ color: "#26B69F", marginTop: "5rem", fontSize: "1.4rem",textAlign:"justify" }} data-aos="fade-down">
                                                <span>
                                                Welcome to my corner of the digital universe! I'm a fervent full-stack web developer driven by an insatiable passion for coding.React, with its component-based architecture, seamlessly integrates with Tailwind CSS, providing a perfect blend of functionality and style. Meanwhile, the backend technologies, from Node.js and Express.js to databases like MongoDB and Supabase, form a robust foundation for scalable solutions.<br /><br />The dynamic nature of web development fuels my curiosity, and I am always eager to embrace new technologies, ensuring that I stay at the forefront of industry trends.  This journey is not just about code; it's about creating immersive and impactful web solutions that resonate with users. Join me and  Let's build the future of the web together!      
                                                </span>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
