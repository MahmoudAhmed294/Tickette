import { BackgroundImage, Box, Container, Overlay } from "@mantine/core";
import Footer from "../../components/layout/footer";
import React from "react";
import { Outlet } from "react-router-dom";
import bg from "../../assets/images/bgAuth.jpg";

type Props = {};

const Index = (props: Props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <BackgroundImage src={bg} sx={{ height: "100%" }}>
        <Overlay opacity={0.6} color="#560697" />
        <Container size="md">
          <Outlet />
        </Container>
        <Footer auth/>
      </BackgroundImage>
    </Box>
  );
};

export default Index;
