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

const Login = (props: Props) => {
  return (
    <Grid
      justify="center"
      align="center"
      sx={{ position: "relative", zIndex: 9999 }}
    >
      <Grid.Col xs={12} md={7} >
        <Stack align={"center"} justify="center">
          <Title order={3}>Login</Title>
          <Text size="lg">
            Hey, Enter your details to get sign in to your account
          </Text>
          <Box component="form" sx={{ width: "100%" }}>
            <Stack spacing={24} sx={{ width: "100%" }}>
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
              <Box>
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
                <Group position="apart" align="center" sx={{ marginTop: 8 }}>
                  <Box >
                    <Checkbox label="Remember me" radius={5} />
                  </Box>
                  <Link to="/Forgot Password?" color="inherit">
                    Forgot Password?
                  </Link>
                </Group>
              </Box>
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
                  Don't have an account?
                  <Link to="/signUp" style={{ color: "#DA7A2F" }}>
                    {" "}
                    Sign In
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

export default Login;
