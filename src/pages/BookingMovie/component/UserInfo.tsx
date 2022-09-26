import {
  Box,
  Grid,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  prevStep: Function;
  nextStep: Function;
};

const UserInfo = ({ nextStep, prevStep }: Props) => {
  return (
    <Grid
      justify="center"
      align="center"
      sx={{ position: "relative", zIndex: 9999  }}
      mt={40}
    >
      <Grid.Col xs={12} md={7}>
        <Stack align={"center"} justify="center" >
          
          <Box component="form" sx={{ width: "100%" }}>
            <Stack spacing={24} sx={{ width: "100%" }}>
              <TextInput
                placeholder="Enter your Full name"
                label="Full name"
                size="lg"
                radius="xs"
                sx={{
                  input: {
                    border: 1,
                  },
                }}
              />
              <TextInput
                placeholder="Enter your email"
                label="Email"
                size="lg"
                radius="xs"
                sx={{
                  input: {
                    border: 1,
                  },
                }}
              />
              <PasswordInput
                placeholder="Enter your password"
                label="Password"
                size="lg"
                radius="xs"
                sx={{
                  ".mantine-PasswordInput-input": {
                    backgroundColor: "white",
                    input: {
                      color: "#333 !important",
                    },
                  },
                  ".mantine-Input-rightSection": {
                    button: {
                      color: "#333 !important",
                    },
                  },
                }}
              />
              <TextInput
                placeholder="Enter your Phone Number"
                label="Phone"
                size="lg"
                radius="xs"
                sx={{
                  input: {
                    border: 1,
                  },
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>

      <Group position="apart" mt="xl">
        <Button variant="outline" onClick={() => prevStep()} size="xl" >
          Back
        </Button>
        <Button onClick={() => nextStep()} size="xl">Next</Button>
      </Group>
      </Grid.Col>
    </Grid>
  );
};

export default UserInfo;
