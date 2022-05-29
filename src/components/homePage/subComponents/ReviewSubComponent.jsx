import React from "react";

//MUI card
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const ReviewSubComponent = (props) => {
  return (
    <div className="review-card">
      <Card
        style={{
          background: "#111229",
          color: "#FFFFFF",
          border: "2px solid #E5AF56",
          borderRight: "8px solid #5293E8",
          borderTop: "8px solid #5293E8",
          borderRadius: "8%",
        }}
        sx={{ width: 340 }}
      >
        <CardHeader
          className="review-card-subheading"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={props.img} />
            </Avatar>
          }
            title={<Typography style={{ color: "#FFFFFF" }} >{props.name}</Typography>}
          subheader={<Typography style={{ color: "#E5C558" }}>{props.tag}</Typography>}
        />
        <CardContent>
          <Typography
            className="review-card-des"
            style={{ color: "#FFFFFF" }}
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSubComponent;
