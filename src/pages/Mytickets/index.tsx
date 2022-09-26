import { Box, Button, Grid, Group } from '@mantine/core'
import React from 'react'
import Ticket from '../../components/Ticket'
type Props = {}

const Index = (props: Props) => {
  return (
    <Box >
      <Group>
        <Button variant='filled' size="lg">Past</Button>
        <Button variant='outline' size="lg">Upcoming</Button>
      </Group>
    <Grid justify={"center"} align="center">
      <Grid.Col xs={12} md={4}  >
        <Ticket />
        <Ticket />
      </Grid.Col>
    </Grid>
    </Box>
  )
}

export default Index