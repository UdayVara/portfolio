import React from 'react'
import Progressbar from './Progressbar'

export default function Skills() {
  return (
    <>
        
        <div className="container-fluid pt-5" style={{minHeight:"100vh", backgroundColor:"#26B69F"}} id="skills">

        <br />
                    <h1 className="h1 display-5 text-center mt-md-3 mt-2 mb-5" style={{color:"#083749"}}><span style={{fontWeight:"580",fontSize:"2.4rem"}}>My Skills</span></h1>

                    
                <div className="container-md">
                
                    <Progressbar value="80" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" title="HTML" />
                    <Progressbar value="65" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title="CSS" />
                    <Progressbar value="75" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="Javascript" />
                    <Progressbar value="85" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap" />
                    <Progressbar value="75" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
                    <Progressbar value="55" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" title="Redux" />
                    <Progressbar value="70" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" title="Next JS" />
                    <Progressbar value="80" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" title="MERN" />
                    <Progressbar value="65" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" />
                    <Progressbar value="60" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" title="MySQL" />
                    <Progressbar value="65" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" title="Django" />
                    <h4 className="my-4 ms-md-2 ms-0 ms-lg-4 mx-xl-5 ps-md-5  text-start fs-1">Dev Tools :- </h4>

                    <Progressbar value="50" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                    <Progressbar value="60" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title="Github" />
                    <Progressbar value="60" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" title="NPM" />
                    <Progressbar value="70" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" title="Chrome" />
                    <Progressbar value="80" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VSCode" />
                    
                    <br />
                    
                    
            </div>
            </div>
    </>
  )
}
