import React, { useState } from 'react'
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { PiTextAlignJustifyBold } from "react-icons/pi";
import { Link } from 'react-scroll';



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
                    <li><a href=""><Link onClick={()=>setOpen(false)}>Categories</Link></a></li>
                    <li><a href=""> <Link to='builders' onClick={()=>setOpen(false)} smooth={true}>Website Builders</Link> </a></li>
                    <li><a ><Link onClick={()=>setOpen(false)} to='deals' smooth={true} href="">Today's deals</Link></a></li>
                </ul>

            </div>
            <div className='option'>
                <PiTextAlignJustifyBold color='white' onClick={handleOpen} size={30} />
            </div>

          
        </div>
    )
}

export default Header
