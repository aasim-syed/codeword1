import React from 'react'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import "../App.css"
const Logos = () => {
  return (
    <>
      <div style={{ display: 'flex',alignItems:'center',  flexDirection: 'row',  justifyContent: 'space-between'}} className="git"><FaGithub/></div>
      <div className="link"><FaLinkedinIn/></div>
      
    </>
  )
}

export default Logos
