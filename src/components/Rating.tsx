import React from "react";
import { TiStarFullOutline } from "@react-icons/all-files/ti/TiStarFullOutline";
import { Box, Text } from "@mantine/core";
type Props = {
  rating:number
};

const Rating = ({rating}: Props) => {
  return (
    <Box
      sx={{ position: "relative", width: "fit-content", overflow: "hidden" }}
    >
      <TiStarFullOutline color="#DA7A2F" size={70} />
      <Text sx={{ position: "absolute", top: 21, right: "34%" }}>{rating}</Text>
    </Box>
  );
};

export default Rating;
