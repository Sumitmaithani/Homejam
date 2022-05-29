import React, {useState} from 'react';

//MUI Card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//MUI Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';


const UpcomingSlider = (props) => {
  const [book, setBook] = useState(false);
  function handleClick () {
    setBook(!book);
  }
  return (
    <div >
        <Card style={{background: "#111229", boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.25)", borderRadius: "8px", marginRight:"50px",borderTopRadius: "8px", borderRight: "8px solid #234C97", borderTop: "8px solid #234C97"}} sx={{ width: 268 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="230"
        image={props.img}
      />
      <CardContent>
        <button className='upcoming-tag'>{props.tag}</button>
        <Typography className='upcoming-heading' gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <div className='upcoming-card-button'>
        <Button size="small">More Info <ArrowForwardIcon className='upcoming-icon1' /></Button>
        <Button style={{color:"grey"}} size="small">| {book ? <BookmarkOutlinedIcon onClick={handleClick} className='upcoming-icon2' /> : <BookmarkBorderOutlinedIcon onClick={handleClick} className='upcoming-icon2' />}</Button>
      </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default UpcomingSlider