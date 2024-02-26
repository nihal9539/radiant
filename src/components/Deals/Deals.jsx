import React from 'react'
import "./Deals.scss"
const Deals = () => {
  return (
    <div className='row'>
    <div className='container_1'>
        <div className='img'>
            <img width={200} src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image" />

        </div>
        <div className='offers'>
            <span>20% Off</span>
            <span>Limited time</span>
        </div>
        <h2>Webbuilder 1</h2>
        <div>
            Computer  Modern clasic with wix support
        </div>
        <div className='cash'>
            <h2>$39.96</h2>
            <p>$49.96</p>
            <p>(20% Off)</p>
        </div>
       <div className='button'>
         <button >View Deal</button>
       </div>
    </div>
</div>
  )
}

export default Deals
