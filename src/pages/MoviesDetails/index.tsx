import React from "react";
import {
  Grid,
  Stack,
  Group,
  Box,
  Title,
  Divider,
  Text,
  Button,
} from "@mantine/core";
import Movie from "../../components/Movie";
import img from "../../assets/images/poster2.jpg";
import PosterImage from "../../components/PosterImage";
import FilterButtons from "../../components/FilterButtons";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import CinemaDetailsItem from "./component/CinemaDetailsItem";

type Props = {};

const Index = (props: Props) => {
  return (
    <Stack spacing={80} mt={24}>
      <Grid gutter={34}>
        <Grid.Col xs={3}>
          <PosterImage image={img} rating={7.8} />
        </Grid.Col>
        <Grid.Col xs={9}>
          <Stack spacing={16} align="start" justify="space-between">
            <Group position="left" align="center" spacing={48}>
              <Title order={4}>See how they run (2022)</Title>
              <Group>
                {["Action", "Fantasy", "Adventure"].map((value, index) => (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: "8px 24px",
                      borderRadius: 50,
                    }}
                  >
                    <Text color="blue.0" size="sm" sx={{ fontWeight: 600 }}>
                      {value}
                    </Text>
                  </Box>
                ))}
              </Group>
            </Group>
            <Text>
              In the West End of 1950s London, plans for a movie version of a
              smash-hit play come to an abrupt halt after a pivotal member of
              the crew is murdered. When world-weary Inspector Stoppard and
              eager rookie Constable Stalker take on the case, the two find
              themselves thrown into a puzzling whodunit within the glamorously
              sordid theater underground, investigating the mysterious homicide
              at their own peril
            </Text>
            <Box my={16}>
              <Group align="center" position="left" spacing={5}>
                <Text color="orange.0" size="lg">
                  Release Date:
                </Text>
                <Text size="lg">7 September 2022 (Egypt)</Text>
              </Group>
              <Group align="center" position="left" spacing={5}>
                <Text color="orange.0" size="lg">
                  Director:
                </Text>
                <Text size="lg">Tom George</Text>
              </Group>
              <Group align="center" position="left" spacing={5}>
                <Text color="orange.0" size="lg">
                  Writer:
                </Text>
                <Text size="lg">Mark Chappell</Text>
              </Group>
              <Group align="center" position="left" spacing={5}>
                <Text color="orange.0" size="lg">
                  Cast:
                </Text>
                <Text size="lg">
                  Sam Rockwell Adrien Brody Harris Dickinson Saoirse Ronan Ruth
                  Wilson Shirley Henderson
                </Text>
              </Group>
            </Box>
            <Button
              variant="filled"
              size="md"
              leftIcon={<BsFillPlayFill size={25} />}
            >
              Watch trailer
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col xs={12}>
          <Box >
            <Group position="apart" align="baseline">
              <Stack spacing={4}>
                <Title order={6}>Our Timetable</Title>
                <Title order={4}>Schedule Plan</Title>
              </Stack>
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
              <Grid justify="space-between" sx={{ flexWrap: "wrap" }}>
                <Grid.Col lg={12}>
                  <CinemaDetailsItem availableBookings />
                  <Divider my={32} />
                </Grid.Col>
                <Grid.Col lg={12}>
                  <CinemaDetailsItem />
                  <Divider my={32} />
                </Grid.Col>
                <Grid.Col lg={12}>
                  <CinemaDetailsItem />
                  <Divider my={32} />
                </Grid.Col>
                <Grid.Col lg={12}>
                  <CinemaDetailsItem />
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Index;
