import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScreenSize from "../hooks/useScreenSize";

export default function MediaCard(props) {
  const [cardWidth, setcardWidth] = useState(450);
  const [picSize, setpicSize] = useState(160);
  const [text, setText] = useState(props.text);
  const [textFontSize, setTextFontSize] = useState(14);
  const [titleFontSize, setTitleFontSize] = useState("h5");

  const screenSize = useScreenSize();
  useEffect(() => {
    if (screenSize.width < 350) {
      setcardWidth(300);
      setpicSize(150);
      setText(props.text.split(" ").slice(0, 10).join(" ") + "...");
      setTextFontSize(10);
    } else if (screenSize.width < 450) {
      setcardWidth(300);
      //   props.text only 20 first words then ...
      setText(props.text.split(" ").slice(0, 10).join(" ") + "...");
      setTextFontSize(14);
    } else if (screenSize.width < 769) {
      setpicSize(200);
      setcardWidth(500);
      setText(props.text.split(" ").slice(0, 25).join(" ") + "...");
      setTextFontSize(14);
    } else {
      setcardWidth(450);
      setpicSize(160);
      setText(props.text.split(" ").slice(0, 35).join(" ") + "...");
      setTextFontSize(14);
    }
  }, [screenSize]);

  //   const picSize = isTablet ? 140 : 160;
  //   const cardWidth = isTablet ? 600 : 400;

  return (
    <Card sx={{ maxWidth: "80%" }}>
      <CardMedia
        sx={{ height: picSize }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {props.title}
        </Typography>
        <Typography
          fontSize={textFontSize}
          variant="body2"
          color="text.secondary"
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Share</Button>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  );
}
