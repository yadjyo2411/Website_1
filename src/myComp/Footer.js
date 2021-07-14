import React from 'react'

<footer className="css"></footer>
export const Footer = () => {
    let footerStyle ={
        top: "550vh",
        border: "2px solid red",
        position: "absolute",
        width: "100%" ,
        
    }
    
    return (
        
        
        <footer className="bg-dark text-light py-3" style=
        {footerStyle}>       
            
        <center><p>
        Copyright &copy, Foodie.com</p></center>
            
        </footer>
    )
}