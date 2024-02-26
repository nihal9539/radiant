import React from 'react'
import "./RelatedDeals.scss"
import Deals from '../Deals/Deals'

const RelatedDeals = () => {
    return (
        <div className='RelatedDeals_container' id='deals'>

            <h2 className='heading'>Related deals you might like for</h2>

            <div className="items">

                <Deals/>
                <Deals/>
                <Deals/>
            </div>
        </div>
    )
}

export default RelatedDeals
