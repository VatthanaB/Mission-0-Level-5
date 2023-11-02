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
  const [picSize, setpicSize] = useState(160);
  const [text, setText] = useState(props.text);
  const [textFontSize, setTextFontSize] = useState(14);

  // Update card properties based on screen size (responsive) using useScreenSize custom hook
  const screenSize = useScreenSize();

  // use Effect to update card properties from MUI based on screen size 🔥
  useEffect(() => {
    if (screenSize.width < 350) {
      setpicSize(150);
      setText(props.text.split(" ").slice(0, 10).join(" ") + "...");
      setTextFontSize(10);
    } else if (screenSize.width < 450) {
      //   props.text only 20 first words then ...
      setText(props.text.split(" ").slice(0, 10).join(" ") + "...");
      setTextFontSize(14);
    } else if (screenSize.width < 769) {
      setpicSize(200);

      setText(props.text.split(" ").slice(0, 25).join(" ") + "...");
      setTextFontSize(14);
    } else {
      setpicSize(160);
      setText(props.text.split(" ").slice(0, 35).join(" ") + "...");
      setTextFontSize(14);
    }
  }, [screenSize]);

  return (
    <Card sx={{ maxWidth: "80%" }}>
      <CardMedia
        // dynamic card rendering based on props & screen size 🔥
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
          // dynamic card rendering based on screen size 🔥
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
