import React from 'react'
import UpcomingSlider from './subComponents/UpcomingSlider'

//Images
import img1 from "../../images/card1.png"
import img2 from "../../images/card2.png"
import img3 from "../../images/card3.png"
import img4 from "../../images/card4.png"

const Upcoming = () => {
  return (
    <div className='upcoming'>
        <div className='upcoming-head'>
        <h1 className='upcoming-title'>Upcoming Shows</h1>
        <h5 className='upcoming-view'>View All</h5>
        </div>
        <hr className='hr'/>
        <div className='upcoming-slider-slider'>
        <UpcomingSlider className="upcoming-show" name="Benny Dayal" tag ="Folk" img={img1} />
        <UpcomingSlider className="upcoming-show" name="Vijay Yesudas" tag ="Bollywood" img={img2} />
        <UpcomingSlider className="upcoming-show" name="Andrea jeremiah" tag ="Folk" img={img3} />
        <UpcomingSlider className="upcoming-show" name="Shilpa Rao" tag ="Folk" img={img4} />
    </div>
    </div>
  )
}

export default Upcoming