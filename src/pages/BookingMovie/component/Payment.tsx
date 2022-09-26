import {
  Box,
  Grid,
  Group,
  Stack,
  Title,
  Image,
  Center,
  Checkbox,
  Divider,
  TextInput,
  Button,
} from "@mantine/core";
import visaImg from "../../../assets/images/visa.svg";
import masterCardImg from "../../../assets/images/masterCard.svg";
import paypalImg from "../../../assets/images/paypal.svg";

type Props = {
  prevStep: Function;
  nextStep: Function;
};

const Payment = ({ nextStep, prevStep }: Props) => {
  return (
    <Box>
      <Grid mt={48} sx={{ border: "1px solid #fff", borderRadius: 8 }} p={24}>
        <Grid.Col md={6} pr={50}>
          <Stack spacing={32}>
            <Title order={5}>Choose payment method</Title>
            <Group position="apart">
              <Center
                sx={{
                  padding: 8,
                  backgroundColor: "#fff",
                  border: "1px solid #DA7A2F",
                  borderRadius: 8,
                  width: 146,
                  height: 88,
                }}
              >
                <Image src={visaImg} width={120} height={80} fit="fill" />
              </Center>
              <Center
                sx={{
                  padding: 8,
                  backgroundColor: "#fff",
                  border: "1px solid #fff",
                  borderRadius: 8,
                  width: 146,
                  height: 88,
                }}
              >
                <Image src={masterCardImg} width={100} height={80} fit="fill" />
              </Center>
              <Center
                sx={{
                  padding: 8,
                  backgroundColor: "#fff",
                  border: "1px solid #fff",
                  borderRadius: 8,
                  width: 146,
                  height: 88,
                }}
              >
                <Image src={paypalImg} width={120} height={80} fit="fill" />
              </Center>
            </Group>
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
                <Title order={5}>Tickets x2 </Title>
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
            <Checkbox
              label="Save my payment details for future booking "
              radius={5}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col md={6} sx={{ borderLeft: "1px solid #fff" }} pl={50}>
          <Box component="form" sx={{ width: "100%" }}>
            <Stack spacing={16} sx={{ width: "100%" }}>
              <TextInput
                placeholder="1234 **** **** ****"
                label="Credit Card"
                size="lg"
                radius="xs"
                sx={{
                  input: {
                    border: 1,
                  },
                }}
              />
              <TextInput
                placeholder="Enter your Name on the card"
                label="Name on card"
                size="lg"
                radius="xs"
                sx={{
                  input: {
                    border: 1,
                  },
                }}
              />
              <Group align="center" position="apart">
                <TextInput
                  placeholder="12/3"
                  label="Expiration date"
                  size="lg"
                  radius="xs"
                  sx={{
                    input: {
                      border: 1,
                    },
                  }}
                />
                <TextInput
                  placeholder="MM/YY"
                  label="CVV"
                  size="lg"
                  radius="xs"
                  sx={{
                    input: {
                      border: 1,
                    },
                  }}
                />
              </Group>
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <Group position="apart" mt="xl">
            <Button variant="outline" onClick={() => prevStep()} size="xl">
              Back
            </Button>
            <Button onClick={() => nextStep()} size="xl">
              Pay
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Payment;
