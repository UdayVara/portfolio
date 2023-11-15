import React from 'react'
import { Tilt } from 'react-tilt'

export default function About() {
        const defaultOptions = {
                reverse: false,  // reverse the tilt direction
                max: 55,     // max tilt rotation (degrees)
                perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
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
                                        <div className="col-md-7 mt-4 mt-md-5 pt-md-3 " style={{ color: "#26B69F", marginTop: "5rem", fontSize: "1.4rem" }} data-aos="fade-down">
                                                <span>
                                                        My name is Uday Vara . I am from Porbandar , Gujarat .This is my portfolio site which i have created Using Bootstrap and React. I am passionate full stack web devloper who enjoys coding.<br /><br />I am always ready and excited to learn new technologies.I have learned Django for creating Dynamic web applications.I also have Knowldege and work experience of MERN stack ( MongoDb,Express JS,React JS,Node JS ).Using MERN stack I have built so many different dynamic web applications.I have very good experience of React and bootstrap which helps in creating fast and responsive web applications.
                                                </span>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
