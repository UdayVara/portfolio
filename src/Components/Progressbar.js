import React from 'react'
import Slider from '@mui/material/Slider';
export default function Progressbar(props) {
  return (
    <>
      <div className="row my-2" style={{ color: "#083749" }}>
        <div className="offset-md-2 col-md-2 fs-3 me-md-4" style={{ fontWeight: "600" }}>{props.title}</div>
        <div className="col-md-6 p-2">
          {/* <progress className="m-1 fs-5 w-100 rounded-pill " value={props.value} max={100} >hello this is</progress> */}
          <Slider
        aria-label="Always Visible"
        defaultValue={parseInt(props.value)}
        valueLabelDisplay="on"
        step={10}
        marks={[10,20,30,40,50,60,70,80,90,100]}
        // min={10}
        // max={100}
        disabled
        color="secondary"
        style={{color:'#083749',height:"12px"}}
      />
          </div>
        
      </div>
      
    </>
  )
}
