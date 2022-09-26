import { Button, Grid, Group, Stack, Title, Text, Divider, Checkbox } from "@mantine/core";
import React from "react";

type Props = {
  prevStep: Function;
  nextStep: Function;
};

const Terms = ({ nextStep, prevStep }: Props) => {
  return (
    <Grid mt={40}>
      <Grid.Col span={12}>
        <Stack
          sx={{ width: "100%", borderRadius: 8, border: "1px solid #fff" }}
          p={16}
        >
          <Stack spacing={8} sx={{ overflow: "auto", maxHeight: "200px"  }} pr={16}>
            <Title color="#DA7A2F" order={6}>
              To complete booking process agree some terms.
            </Title>
            <Text>
              - TICKETTE is committed to protecting all the personal information
              about the users.
            </Text>
            <Text>- TICKETTE role ends at booking tickets online.</Text>
            <Text>
              - By clicking on the I Agree button, you confirm the accuracy of
              your personal data and acknowledge your legal liability as a
              direct consequence for such data provision.
            </Text>
            <Text>
              - Before printing the tickets at the box office, Cinema's Staff
              have the rights to ask for ID verification
            </Text>
            <Text>
              - Cinema DBox city stars prohibits entrance of children under age
              four years
            </Text>
          </Stack>
          <Divider />
          <Checkbox label="I accept and agree to all the terms and conditions mentioned here." radius={5} />

        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Group position="apart" mt="xl">
          <Button variant="outline" onClick={() => prevStep()} size="xl">
            Back
          </Button>
          <Button onClick={() => nextStep()} size="xl">
            Next
          </Button>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Terms;
