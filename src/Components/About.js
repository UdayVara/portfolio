import React from 'react'


export default function About() {
        return (
                <>
                        <div className="container-fluid pb-5 pb-md-0" style={{ minHeight: "100vh", backgroundColor: "#083749" }} id="about">
                                <br /><br /><br />

                                <div className="row">
                                        <h1 className="h2 mt-2 mb-4 mb-md-0 text-center" style={{ color: "#26B69F" }}><span style={{ borderBottom: "2px solid #26B69F", fontSize: "2.4rem" }}>About me</span></h1>

                                        <div className="col-md-5" data-aos="zoom-in-up">
                                                <img src="me.png" alt="" className='img-fluid' />
                                        </div>
                                        <div className="col-md-7 mt-4 mt-md-5 pt-md-3 " style={{ color: "#26B69F", marginTop: "5rem", fontSize: "1.4rem" }} data-aos="fade-down">
                                                <span>
                                                        My name is Uday Vara . I am from Porbandar , Gujrat .This is my portfolio site which i have created Using Bootstrap and React. I am passionate full stack web devloper who enjoys coding.<br /><br />I am always ready and excited to learn new technologies.I have learned Django for creating Dynamic web applications.I also have Knowldege and work experience of MERN stack ( MongoDb,Express JS,React JS,Node JS ).Using MERN stack I have built so many different dynamic web applications.I have very good experience of React and bootstrap which helps in creating fast and responsive web applications.
                                                </span>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
