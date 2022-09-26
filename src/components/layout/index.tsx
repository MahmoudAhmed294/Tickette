import React from "react";
import Header from "./header";
import Footer from "./footer";
import Carousel from "./carousel";
import { Container } from "@mantine/core";
import { Outlet, useMatches, useMatch } from "react-router-dom";

type Props = {};

const Index = (props: Props) => {
  // const match = useMatches();
  const matchLoginUrl = useMatch("login")?.pathname;
  const matchSignUpUrl = useMatch("signUp")?.pathname;
  const matchCinemaDetailsUrl = useMatch("cinemaDetails")?.pathname;

  console.log(matchLoginUrl);

  return (
    <>
      <Header />
      {(matchLoginUrl === "/login" || matchSignUpUrl === "/signUp") && (
        <Outlet />
      )}

      <Container size="xl">
        {matchLoginUrl !== "/login" && matchSignUpUrl !== "/signUp" && (
          <>
            <Outlet />
            {
matchCinemaDetailsUrl !== '/cinemaDetails' &&(

  <Carousel />
  )
            }
          </>
        )}
      </Container>
      {matchLoginUrl !== "/login" && matchSignUpUrl !== "/signUp" && (
        <>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
