import React from 'react'
import { useNavigate } from "react-router-dom"

function Header() {
    let navigate = useNavigate()
  return (
    <div className='header'>
        <img className='logo'  onClick={() => {navigate("/")}} src='https://i.ibb.co/LzSC7NL/CCA5-CC6-F-EB66-4516-BF95-B365-DAEF0606-1-201-a-removebg-preview.png'/>
    </div>
  )
}

export default Header