import {
  BackgroundImage,
  Box,
  Center,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import bg from "../assets/images/ticket.svg";
import img from "../assets/images/poster2.jpg";
import QRCode from "react-qr-code";

type Props = {};

const Ticket = (props: Props) => {
  return (
    <BackgroundImage
      src={bg}
      sx={{
        borderRadius: 8,
        width: "100%",
        position: "relative",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
      }}
      mt={40}
    >
      <Box>
        <Box sx={{ height: "200px", width: "100%" }}>
          <BackgroundImage src={img} sx={{ height: "100%" }} />
        </Box>
        <Box px={24} pt={16}  mb={"25%"}>
          <Group sx={{ width: "100%", position: "relative" }}>
            <Group position="apart" align="center" sx={{ width: "100%" }}>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Movie
                </Title>
                <Title order={6} color="#333">
                  See How They Run
                </Title>
              </Box>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Cinema
                </Title>
                <Title order={6} color="#333">
                  Plaza Cinema
                </Title>
              </Box>
            </Group>
            <Group position="apart" align="center" sx={{ width: "100%" }}>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Date
                </Title>
                <Title order={6} color="#333">
                  TUES, 20 SEP
                </Title>
              </Box>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Show time
                </Title>
                <Title order={6} color="#333">
                  07:00 pm
                </Title>
              </Box>
            </Group>
          </Group>
        </Box>
        <Group position="apart" align="center" px={24}>

          <Box>
            <Group>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Tickets
                </Title>
                <Title order={6} color="#333">
                  2{" "}
                </Title>
              </Box>
              <Box>
                <Title order={6} color="#BBBBBB">
                  Hall
                </Title>
                <Title order={6} color="#333">
                  4
                </Title>
              </Box>
            </Group>
            <Box>
                <Title order={6} color="#BBBBBB">
                Seat
                </Title>
                <Title order={6} color="#333">
                B4, B5 ,B4, B5 ,B4, B5
                </Title>
              </Box>

          </Box>
          <Box
            sx={{
              height: "auto",
              maxWidth: 150,
              width: "100%",
            }}
          >
            <QRCode
              size={250}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"value"}
              viewBox={`0 0 256 256`}
            />
          </Box>
        </Group>
      </Box>
    </BackgroundImage>
  );
};

export default Ticket;
