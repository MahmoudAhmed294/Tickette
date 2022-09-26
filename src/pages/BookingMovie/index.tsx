import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import SelectSeats from "./component/SelectSeats";
import UserInfo from "./component/UserInfo";
import Terms from "./component/Terms";
import Payment from "./component/Payment";
import Success from "./component/Success";

type Props = {};

const Index = (props: Props) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        color="orange"
        sx={{
          position: "relative",
          " .mantine-Stepper-steps .mantine-UnstyledButton-root": {
            flexDirection: "column",
            position: "relative",
          },
          ".mantine-Stepper-stepIcon": {
            border: "1px solid #DA7A2F",
            color: "#DA7A2F",
          },
          ".mantine-Stepper-separator": {
            border: "1px solid #fff",
            margin: "0",
          },
          ".mantine-Stepper-stepBody": {
            position: "absolute",
            bottom: -24,
            width: "max-content",
            ".mantine-Text-root": {
              fontSize: 20,
              fontWeight: 600,
            },
          },
          ".mantine-Stepper-stepIcon[data-completed]": {
            backgroundColor: "#DA7A2F",
          },
        }}
      >
        <Stepper.Step label="Select seats"  allowStepSelect={active > 0} >
          <SelectSeats nextStep={nextStep} prevStep={prevStep}  />
        </Stepper.Step>
        <Stepper.Step label="User Information"  allowStepSelect={active > 1}>
          <UserInfo nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step label="Terms & conditions" allowStepSelect={active > 2}>
          <Terms nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step label="Payment method" allowStepSelect={active > 3}>
          <Payment nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step label="Success" allowStepSelect={active > 4}>
          <Success  />
        </Stepper.Step>
      </Stepper>

  );
};

export default Index;
