import React from 'react'


import ReviewSlider from './subComponents/ReviewSlider';

//MUI icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Review = () => {
  return (
    <div className='reviews'>
        <div className='review-heading'>
        <h1 className='review-head'>Reviews</h1>
        <div className='review-button'>1/12 <ArrowBackIcon style={{marginLeft:"5px"}} /><ArrowForwardIcon  style={{marginLeft:"5px"}} /></div>
        </div>
        <hr className='review-hr' />
        <ReviewSlider />
    </div>
  )
}

export default Review