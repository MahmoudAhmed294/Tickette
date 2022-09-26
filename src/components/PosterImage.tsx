import { Box, Paper } from "@mantine/core";
import React from "react";
import Rating from "./Rating";

type Props = {
    image:any
    rating?:number
};

const PosterImage = ({image ,rating}: Props) => {
  return (
    <Paper
      p="md"
      radius="md"
      sx={{
        height:"100%",
        backgroundImage: `url(${image})`,
        maxHeight: "400px",
        width: "100%",
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
{
  rating && (
    <Box sx={{position:"absolute" , right:16 , top:16}}>
    <Rating rating={rating} />
    </Box>
  )
}
    </Paper>
  );
};

export default PosterImage;
