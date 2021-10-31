import React from 'react'
import '../App.css';
import styled from "styled-components";
import Services from '../Services';
import { Link } from "next/link";

const Navbar = () => {
  return (
      <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
    </head>
    <Nav>
        
      <Ul className="ul">
          <Li style={{color:'chartreuse'}}className="ul" ><a to="Services" >About Us</a></Li>
          <Li style={{color:'chartreuse'}}><a style={{color:'chartreuse'}} href="Services">Services</a></Li>
        <Li><a style={{color:'chartreuse'}} href="">Blog</a></Li>
        <Li><a style={{color:'chartreuse'}} href="">Help!</a></Li>
        
      </Ul>
    </Nav>
    </>
  )
}

export default Navbar

const Ul = styled.ul`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
flex-wrap: wrap;
margin-top:40px;
padding-top:10px;
padding-bottom:30px;
text-decoration: overline;

list-style:none;
font-family:Inter;
font-size:25px;
color:white;
background: #16BFFD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #CB3066, #16BFFD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #CB3066, #16BFFD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
const Li = styled.li`
color:green;
font-family:Inter;
text-decoration: none;
margin-left:40px;
@media (max-width:600px){
    flex-direction:column;
}
:hover{
    color:green;
    transform: scale(1.1);
    transition: 0.5s;
    border-radius:8px;
    padding:12px;
     box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;
}
`;
const Nav = styled.nav`
top:0px;
margin-top:-38px;
color:white;
`;
