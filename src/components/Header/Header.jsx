import React, { useState } from 'react'
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { PiTextAlignJustifyBold } from "react-icons/pi";



const Header = () => {
    const [open,setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen(!open)
    }
    return (
        <div className={`${open ? "head_container_open" : "head_container"}`}>
           
            <div className='search_div'><div className='search'><IoSearch size={20} /><input type="text" name="" id="" /></div></div>
           
            <div className='head_items'>
                <ul>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Website Builders</a></li>
                    <li><a href="">Today's deals</a></li>
                </ul>

            </div>
            <div className='option'>
                <PiTextAlignJustifyBold color='white' onClick={handleOpen} size={30} />
            </div>

          
        </div>
    )
}

export default Header
