import React from 'react'

export default function Home() {
  
  return (
    <>
            <div className="container-fluid home-container" style={{backgroundColor:"#26B69F",height:"100vh"}}>
                <div className="d-flex flex-column justify-content-center align-items-center ">
                    <h1 className="h1" id="name" style={{marginTop:"25vh",color:"#083749",fontWeight:"700",fontSize:"3rem"}}>Hi I'm Uday </h1>
                    <h1 className="h3 mt-md-2 mt-1"> A Web developer in training</h1>


                    <a href="#about" className="btn mt-md-3 mt-3"  style={{borderRadius:"50%",transition:"2 linear"}}><i className="bi bi-arrow-down-circle " id="next"   style={{fontSize:"3.5rem"}}></i></a>
                </div>
            </div>
    </>
  )
}
