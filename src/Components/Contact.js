import React from 'react'

export default function Contact() {
  return (
    <>
            <div className="container-fluid" id="Contact" style={{minHeight:"100vh",backgroundColor:"#26B69F"}}>
                    <br /><br /><br />
                    <br />
                    <h1 className="h1 text-center mt-md-5" style={{fontSize:"2.4rem"}}>Contact me : </h1>
                    <br />
                    <div className="container mt-md-3 d-flex flex-row justify-content-between" style={{maxWidth:"25rem"}}>
                                    <a href="https://github.com/UdayVara" className="text-decoration-none" style={{color:"#083749"}} target={"_blank"}><i className="bi bi-github fs-2"   ></i></a>
                                    <a href="https://www.instagram.com/uday_vara/" target={"_blank"}><i className="bi bi-instagram fs-2"  style={{color:"#083749"}}></i></a>
                                    <a href="https://www.facebook.com/uday.vara.98" target={"_blank"}><i className="bi bi-facebook fs-2"  style={{color:"#083749"}}></i></a>
                                    <a href="https://twitter.com/varaudayd" target={"_blank"}><i className="bi bi-twitter fs-2"  style={{color:"#083749"}}></i></a>
                                    <a href="https://www.linkedin.com/in/uday-vara-16b2a21b6/" target={"_blank"}><i className="bi bi-linkedin fs-2" style={{color:"#083749"}} ></i></a>
                    </div>
            </div>
    </>
  )
}
