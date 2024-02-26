import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'

const Item = () => {
  return (
    <div className='list_container'>
                <div className='img_container'>
                    <div className='best'>
                        <span className='number'>3</span>
                    </div>
                    <div className='img'>
                        <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />
                        <p>CDK</p>
                    </div>
                </div>
                <div className='container_2'>
                    <p>
                        <span>CDK Resposive Builder</span>: An extensive library of widgets and apps, and detailed step-by-step guides                    </p>
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

export default Item
