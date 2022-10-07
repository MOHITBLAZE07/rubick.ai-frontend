import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <NavLink to= '/' style={{display:"grid",placeItems:"center",width:"100%",height:"50%"}}>
        <img src={process.env.PUBLIC_URL+"/favicon.png"} style={{borderRadius: '25px'}} alt='logo' />
        <h1 style={{fontSize:"2rem",fontWeight:"bold",marginTop:"8px",color:"#3265fa"}}>Rubick.ai</h1>
    </NavLink>
  )
}
