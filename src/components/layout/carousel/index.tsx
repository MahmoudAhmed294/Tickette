import { Box, Group, Title, Button } from "@mantine/core";
import React from "react";
import Carousel from "./Carousel";

type Props = {};

const Index = (props: Props) => {
  return (
    <Box mt={100}>
      <Group position="apart" align="baseline">
        <Title order={4} >
          Movies in egypt
        </Title>
        <Group>
          <Button.Group>
            <Button variant="filled"size="md" sx={{borderRadius:"8px 8px 0 0 !important"}}> Online Booking</Button>
            <Button variant="outline"size="md" sx={{borderRadius:"8px 8px 0 0 !important"}}>Viewing Now</Button>
            <Button variant="outline"size="md" sx={{borderRadius:"8px 8px 0 0 !important"}}>Coming Soon</Button>
          </Button.Group>
        </Group>
      </Group>
      <Box sx={{ border: "1px solid", borderRadius: "16px 0 16px 16px", padding: 32 , overflow:"hidden"}}>
        <Carousel />
      </Box>
    </Box>
  );
};

export default Index;
