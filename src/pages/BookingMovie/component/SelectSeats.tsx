import React from "react";
import {
  Button,
  Group,
  Stack,
  Center,
  Title,
  Image,
  Grid,
  Box,
} from "@mantine/core";
import available from "../../../assets/images/available.svg";
import selected from "../../../assets/images/selected.svg";
import Reserved from "../../../assets/images/Reserved.svg";
import screenImg from "../../../assets/images/screen.svg";

import Chair from "./Chairs";
import ChairsList from "./ChairsList";

type Props = {
  prevStep: Function;
  nextStep: Function;
};

const SelectSeats = ({ nextStep, prevStep }: Props) => {
  return (
    <Stack mt={40}>
      <Grid justify="center" align="center">
        <Grid.Col xs={12} md={6}>
          <Stack spacing={40}>
            <Center>
              <Group spacing={56} position="center" align="center">
                <Group>
                  <Image src={available} width={27} height={32} />
                  <Title order={6}>Available</Title>
                </Group>
                <Group>
                  <Image src={selected} width={27} height={32} />
                  <Title order={6}>Selected</Title>
                </Group>
                <Group>
                  <Image src={Reserved} width={27} height={32} />
                  <Title order={6}>Reserved</Title>
                </Group>
              </Group>
            </Center>
            <ChairsList />
          </Stack>
          <Box sx={{ position: "relative" }} mt={16}>
            <Title
              order={5}
              align="center"
              sx={{ position: "absolute", top: "16px", left: "45%" }}
            >
              Screen
            </Title>
            <Image src={screenImg} />
          </Box>
        </Grid.Col>
      </Grid>
      <Grid mt="xl" align="center" justify="space-between">
        <Grid.Col xs={12} sm={2}>
          <Button
            variant="outline"
            onClick={() => prevStep()}
            size="xl"
            fullWidth
          >
            Back
          </Button>
        </Grid.Col>

        <Grid.Col xs={12} md={6} p={0}>
          <Group
            sx={{ border: "1px solid #fff", borderRadius: 8 }}
            position="apart"
            align="center"
          >
            <Group
              align="baseline"
              spacing={8}
              sx={{
                borderRight: "1px solid #fff",
                padding: "13px 16px",
                width: "47%",
              }}
            >
              <Title order={5}>You have selected </Title>
              <Title order={5} color="#DA7A2F">
                2
              </Title>
            </Group>
            <Group
              align="baseline"
              position="apart"
              sx={{ padding: "8px 16px", width: "50%" }}
            >
              <Title order={5}>Total </Title>
              <Title order={5} color="#DA7A2F">
                300 EGP
              </Title>
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col xs={12} sm={2}>
          <Button onClick={() => nextStep()} size="xl" fullWidth>
            Next
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default SelectSeats;
