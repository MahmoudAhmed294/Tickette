import React from "react";
import {
  Grid,
  Stack,
  Group,
  Box,
  Title,
  Divider,
  Text,
} from "@mantine/core";
import Rating from "../../components/Rating";
import Movie from "../../components/Movie";
import img from "../../assets/images/poster1.jpg";
import PosterImage from "../../components/PosterImage";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";
import FilterButtons from "../../components/FilterButtons";

type Props = {};

const index = (props: Props) => {
  return (
    <Stack spacing={80}>
      <Grid gutter={34}>
        <Grid.Col xs={2.5}>
          <PosterImage image={img} />
        </Grid.Col>
        <Grid.Col xs={4.5}>
          <Group align="center" position="apart">
            <Stack spacing={8} align="center">
              <Title order={4}>City Star Cinema</Title>
              <Title order={4}>سينما سيتي ستار</Title>
            </Stack>
            <Rating rating={5.6} />
          </Group>
          <Divider my={32} />
          <Stack>
            <Group align="center" position="left">
              <FaMapMarkerAlt size={25} />
              <Text>Omar Ibn El-Khattab St., City Stars Mall, 5th Floor</Text>
            </Group>
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
        <Grid.Col xs={4.5} ml={"auto"}>
          <Stack
            sx={{
              border: "1px solid #fff",
              padding: 24,
              borderRadius: 4,
              height: "100%",
            }}
            spacing={24}
          >
            <Text size="md">
              * Online tickets purchasing is currently not an available service
              for this theater.
            </Text>
            <Text size="md">
              * For 3D films, the ticket price does not include the price of the
              3D glasses.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col xs={12}>
          <Box mt={100}>
            <Group position="apart" align="baseline">
              <Title order={4}>Movies in egypt</Title>
              <FilterButtons
                data={[
                  { label: "Tuesday September 20.2022", value: "Tuesday" },
                  { label: "Monday September 19.2022", value: "Monday" },
                  { label: "Sunday  September 18.2022", value: "Sunday " },
                  { label: "Saturday September 17.2022", value: "Saturday" },
                ]}
              />
            </Group>
            <Box
              sx={{
                border: "1px solid",
                borderRadius: "16px 0 16px 16px",
                padding: 32,
                overflow: "hidden",
              }}
            >
              <Grid justify="space-between" sx={{flexWrap:"wrap"}} >
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <Movie />
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default index;
