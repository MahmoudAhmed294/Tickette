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

type Props = {};

const Register = (props: Props) => {
  return (
    <Grid
      justify="center"
      align="center"
      sx={{ position: "relative", zIndex: 9999  }}
      py={48}
    >
      <Grid.Col xs={12} md={7}>
        <Stack align={"center"} justify="center">
          <Title order={3}>Register</Title>
          <Text size="lg">
            Hey, Enter your details to get sign up to your account
          </Text>
          <Box component="form" sx={{ width: "100%" }}>
            <Stack spacing={24} sx={{ width: "100%" }}>
              <TextInput
                placeholder="Enter your full name"
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
              <PasswordInput
                placeholder="confirm your password"
                label="Confirm Password"
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
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="filled"
                  size="lg"
                  sx={{ marginTop: 32 }}
                  radius={5}
                  fullWidth
                >
                  Sign In
                </Button>
                <Text align="center" mt={8}>
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#DA7A2F" }}>
                    {" "}
                    Login
                  </Link>
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Register;
