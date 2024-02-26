import React from 'react'
import "./BestWebsiteBuilder.scss"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { GoInfo } from "react-icons/go";
import Items from '../Items/Items';
import RelatedDeals from '../RelatedDeals/RelatedDeals';
import SignUp from '../SignUp/SignUp';

const BestWebsiteBuilder = () => {


    return (
        <div className='best_containers' id='builders'>
            <h1 >Best Website builders in the US</h1>
            <div>
                <hr />
                <div className='update'>
                    <IoIosCheckmarkCircleOutline size={15} />
                    <span>Last Updated - February 22, 2020    </span>
                    <GoInfo size={15} />
                    <span>Advertising Disclosure</span>
                </div>
                <hr />
            </div>
            <div className='items'>
                <ul>
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>

            </div>
            <div className='link'>
                <span>Home</span>
                <IoIosArrowForward />
                <span>Hosting for all</span>
                <IoIosArrowForward />
                <span>Hosting</span>
                <IoIosArrowForward />
                <span>Hosting6</span>
                <IoIosArrowForward />
                <span>Hosting5</span>

            </div>

            <Items />
            <RelatedDeals/>
            <SignUp/>


        </div>
    )
}

export default BestWebsiteBuilder
