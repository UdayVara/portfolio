import React from 'react'
import Progressbar from './Progressbar'

export default function Skills() {
  return (
    <>
        
        <div className="container-fluid pt-5" style={{minHeight:"100vh", backgroundColor:"#26B69F"}} id="skills">

        <br />
                    <h1 className="h1 display-5 text-center mt-md-3 mt-2 mb-5" style={{color:"#083749"}}><span style={{fontWeight:"580",fontSize:"2.4rem"}}>My Skills</span></h1>

                    
                <div className="container-md">
                
                    <Progressbar value="75" title="HTML/CSS" />
                    <Progressbar value="75" title="Javascript" />
                    <Progressbar value="80" title="Bootstrap" />
                    <Progressbar value="75" title="React" />
                    <Progressbar value="80" title="MERN" />
                    <Progressbar value="70" title="Python" />
                    <Progressbar value="65" title="Django" />
                    <Progressbar value="65" title="MYSQL" />
                    <br />
                    
                    
            </div>
            </div>
    </>
  )
}
