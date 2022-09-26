import { Button, Grid, Group } from "@mantine/core";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import Ticket from "../../../components/Ticket";

type Props = {};

const Success = ({}: Props) => {
  const navigate = useNavigate();
  const componentRef = useRef(null);

  return (
    <Grid justify="center" align="center">
      <Grid.Col xs={12} md={4} ref={componentRef}>
        <Ticket />
      </Grid.Col>

      <Grid.Col span={12}>
        <Group position="apart" mt="xl">
          <Button variant="outline" onClick={() => navigate("/")} size="xl">
            Return home
          </Button>
          <Group>
            <Button onClick={() => navigate("/myTickets")} size="xl">
              See my tickets
            </Button>

            <ReactToPrint
              trigger={() => <Button size="xl">Print</Button>}
              content={() => componentRef.current}
            />
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Success;
