import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

type Props = {}

const Index = (props: Props) => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" sx={{
        ".mantine-UnstyledButton-root":{
          flexDirection: "column",
        }
      }} >
        <Stepper.Step label="Select seats" >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="User Information" >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Terms & conditions" >
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Final step" >
          Step 4 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Final step" >
          Step 4 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  )
}

export default Index


