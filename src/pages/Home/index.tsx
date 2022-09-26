import { Box, Group, Grid, Stack, Title, Text, Button } from "@mantine/core";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import Cinema from "../../components/Cinema";
import Carousel from "./component/Carousel";
import Image from "../../assets/images/poster1.jpg"
import bannerImg from "../../assets/images/banner.jpg"
import Banner from "./component/Banner";
type Props = {};

const Index = (props: Props) => {
  return (
    <Stack spacing={100} my={48} >
      <Grid justify="space-between" gutter={100}>
        <Grid.Col md={6}>
          <Stack spacing={80} align="start" justify="flex-start">
            <Box>
              <Title order={2}>
                Welcome to{" "}
                <Title sx={{ display: "inline" }} order={1}>
                  {" "}
                  TICKETTEE{" "}
                </Title>
                Online Booking System
              </Title>
              <Text size="md" sx={{ marginTop: 30 }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et.
              </Text>
            </Box>
            <Box>
              <Button
                variant="filled"
                size="lg"
                rightIcon={<BsArrowRightShort size={25}/>}
              >
                Start browsing
              </Button>
            </Box>
          </Stack>
        </Grid.Col>
        <Grid.Col md={6}>
          <Carousel />
        </Grid.Col>
      </Grid>
      <Stack  spacing={24}>
        <Group align={"center"} position="apart" >
          <Title order={4}>
            Cinemas in Egypt
          </Title>
          <Button 
          variant="subtle"
          rightIcon={<BsArrowRightShort size={25} />}
          >
            See more
          </Button>
        </Group>
        <Group align={"flex-start"} position="apart" >
          <Cinema image={Image} title={"City Star Cinema"} />
          <Cinema image={Image} title={"Galaxy ElMaadi VIP Cinema"} />
          <Cinema image={Image} title={"Zamalek Cinema"} />
          <Cinema image={Image} title={"Plaza Cinema"} />
        </Group>
      </Stack>
      <Banner  image={bannerImg}  />
    </Stack>
  );
};

export default Index;
