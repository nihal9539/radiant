import React from 'react'
import "./Items.scss"
import { GoTrophy } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";


import { AiFillStar } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { ImStarHalf } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

const Items = () => {
    return (
        <div className='items_conatainer'>
            <FirstItem />
            <SecondItem />
            <ThirstItem />
            <ForthItem />

        </div>
    )
}

export default Items
const FirstItem = () => {
    return (
        <div className='list_container'>
            <div className='img_container'>
                <div className='best'>
                    <span className='trophy'><GoTrophy size={20} /> <span>Best Choice</span></span>
                    <span className='number'>1</span>
                </div>
                <div className='img'>
                    <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />
                    <p>Builder 1</p>
                </div>
            </div>
            <div className='container_2'>
                <p>
                    <span>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                </p>
                <h4>Main highlights</h4>
                <p className='p_2'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                </p>
                <div className='show_more'>show more <FaChevronDown /></div>
            </div>
            <div className='container_3'>


                <div>
                    <h1>9.8</h1>
                    <p>Exceptional</p>
                    <span>
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                    </span>
                </div>

                <button>view</button>
            </div>


        </div>
    )

}

const SecondItem = () => {
    return (
        <div className='list_container'>
            <div className='img_container'>
                <div className='best'>
                    <span className='trophy'><IoDiamondOutline size={20} /> <span>Best Value</span></span>
                    <span className='number'>2</span>
                </div>
                <div className='img'>
                    <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />
                    <p>Builder 1</p>
                </div>
            </div>
            <div className='container_2'>
                <p>
                    <span>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)                </p>
                <h4>Main highlights</h4>
                <p className='p_2'>
                    [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.                </p>
                <div className='show_more'>show more <FaChevronDown /></div>
            </div>
            <div className='container_3'>


                <div>
                    <h1>9.5</h1>
                    <p>Exceptional</p>
                    <span>
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <ImStarHalf fill='#FFB80F' />
                    </span>
                </div>
                <button>view</button>
            </div>

        </div>
    )

}

const ThirstItem = () => {
    return (

        <div className='list_container'>
            <div className='img_container'>
                <div className='best'>
                    <span className='number'>3</span>
                </div>
                <div className='img'>
                    <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />
                    <p>Builder 1</p>
                </div>
            </div>
            <div className='container_2'>
                <p>
                    <span>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) </p>
                <h4>Main highlights</h4>
                <p className='p_2'>
                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                <div className='show_more'>show more <FaChevronDown /></div>
            </div>
            <div className='container_3'>


                <div>
                    <h1>9.3</h1>
                    <p>Exceptional</p>
                    <span>
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                    </span>
                </div>

                <button>view</button>
            </div>

        </div>
    )
}

const ForthItem = () => {
    return (
        <div className='list_container'>
            <div className='img_container'>
                <div className='best'>
                    <span className='number'>4</span>
                </div>
                <div className='img'>
                    <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />
                    <p>CDK</p>
                </div>
            </div>
            <div className='container_2'>
                <p>
                    <span>CDK Resposive Builder</span>: An extensive library of widgets and apps, and detailed step-by-step guides</p>
                <h4>Main highlights</h4>
                <div className='each_rating'>
                    <p><span>9.9</span>building responsive</p>
                    <p><span>8.9</span>Cool</p>
                    <p><span>8.9</span>Docs</p>
                </div>

                <div className='we_love_it'>
                    <h5>Why we love it</h5>
                    <div className='we_love_it_list'>
                        <p><span><FaCheck /></span>building responsive</p>
                        <p><span><FaCheck /></span>Cool</p>
                        <p><span><FaCheck /></span>Docs</p>
                    </div>
                </div>
                <div className='show_more'>show more</div>
            </div>
            <div className='container_3'>


                <div>
                    <h1>9.3</h1>
                    <p>Exceptional</p>
                    <span>
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                        <AiFillStar fill='#FFB80F' />
                    </span>
                </div>

                <button>view</button>
            </div>

        </div>
    )
}



