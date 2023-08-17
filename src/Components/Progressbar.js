import React from 'react'
import Slider from '@mui/material/Slider';
export default function Progressbar(props) {
  return (
    <>
      <div className="row my-2 align-items-center" style={{ color: "#083749" }}>
        <div className="offset-md-1 col-md-3 fs-3 me-md-4" style={{ fontWeight: "600" }}>
          <div className="d-flex align-items-center">
            <div className="">{props.title}   </div>
            <img src={props.image} className="ms-1 img-fluid" style={{height:"2.6rem"}} /> 
          </div>
        </div>
        <div className="col-md-6 p-2">
          {/* <progress className="m-1 fs-5 w-100 rounded-pill " value={props.value} max={100} >hello this is</progress> */}
          <Slider
        aria-label="Always Visible"
        defaultValue={parseInt(props.value)}
        valueLabelDisplay="on"
        disabled
        color="secondary"
        style={{color:'#083749',height:"12px"}}
      />
          </div>
        
      </div>
      
    </>
  )
}
