import React from 'react'
import Review from './Review'
import HeroComponent from './subComponents/HeroComponent'
import Upcoming from './Upcoming'

const Main = () => {
  return (
    <div>
        <HeroComponent />
        <Upcoming />
        <Review />
    </div>
  )
}

export default Main