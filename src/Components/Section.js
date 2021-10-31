import React from 'react'
import '../App.css';

import {FaGithub,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
const Section = () => {
  return (
      <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
    </head>
    <section>
    <img className="spfy" src="./spfy.png"></img>
      <img className="mg" src="./mg.png"></img>
      <img className="woo" src="./woo.png"></img>
      <img className="wrdp" src="./wrdp.png"></img>
      <img className="cd" src="./cd.png"></img>
      <h1 style={{color:'darkblue'}} className="text"> We are an independent creative collective based in New Delhi, India. We collaborate with companies, brands and startups across all digital platforms, focusing on eCommerce and retail experience.</h1>
      
     
    </section>
    <div style={{background:'black'}}>
    <FaGithub className="git"style={{paddingTop:'3px',
    marginLeft:'30vh',
    transform:'scale(2)',
    background:'black',
    color:'chartreuse',}}/>
     <FaLinkedinIn style={{paddingTop:'3px',
    marginLeft:'34vh',
    transform:'scale(2)',
    color:'chartreuse',
    background:'black'}}/>
    <FaInstagram style={{paddingTop:'3px',
    marginLeft:'33vh',
    transform:'scale(2)',
    color:'chartreuse',
    background:'black'}}/>
    </div>
    </>
  )
}

export default Section
