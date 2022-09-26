import { Group, Stack, Box, Text, Title, Button, Grid } from "@mantine/core";
import React from "react";
import PosterImage from "../../../components/PosterImage";
import img from "../../../assets/images/poster1.jpg";
import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";
import { useNavigate } from "react-router-dom";

type Props = {
  availableBookings?: boolean
};

const CinemaDetailsItem = ({availableBookings}: Props) => {
  const navigate = useNavigate();
  return (
    <Grid align="top" justify="space-between" gutter={8}>
      <Grid.Col md={3}>
        <PosterImage image={img} />
      </Grid.Col>
      <Grid.Col md={2.5}>
        <Stack spacing={12}>
          <Title order={4}>Plaza Cinema</Title>
          <Group align="center" position="left">
            <ImPhone size={25} />
            <Text>055 2349211</Text>
          </Group>
          <Box component="a" href="#" sx={{ display: "flex" }}>
            <Group align="center" position="left">
              <FaMapMarkedAlt size={25} color="#DA7A2F" />
              <Text color={"#DA7A2F"}>Map</Text>
            </Group>
          </Box>
        </Stack>
      </Grid.Col>
      <Grid.Col md={6}>
        <Stack spacing={24}>
          <Group
            sx={{ width: "100%", border: "1px solid #fff", borderRadius: 8 }}
            spacing={0}
          >
            {[
              "10:30 am",
              "11:30 pm",
              "12:30 pm",
              "1:30 am",
              "2:30 pm",
              "5:30 pm",
              "12:30 pm",
              "1:30 am",
              "5:30 pm",
            ].map((value, index, arr) => (
              <Box
                sx={{
                  padding: 16,
                  width: "20%",
                  borderRight:
                    index !== 4 && index !== 9 ? "#fff solid 1px" : "0",
                  borderBottom: index < 5 ? "#fff solid 1px" : "0",
                }}
                key={value}
              >
                {value}
              </Box>
            ))}
          </Group>
          <Button
            variant="filled"
            fullWidth
            size="md"
            disabled={!availableBookings}
            onClick={() => navigate("/booking")}
            sx={{ backgroundColor:availableBookings ? "#DA7A2F " :"#AEAEAE" }}
          >
            Book
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default CinemaDetailsItem;
