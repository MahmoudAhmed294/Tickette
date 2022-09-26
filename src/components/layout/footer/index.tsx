import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Image,
  Title,
  Divider,
  Text,
  Container,
  Box,
} from "@mantine/core";
import Logo from "../../../assets/images/logo.png";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `8px 0`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/contactUs",
    label: "Contact Us",
  },
  {
    link: "/myTickets",
    label: "My Tickets",
  },
  {
    link: "/aboutUs",
    label: "About Us",
  },
];
export default function Index({ auth }: { auth?: boolean }) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"div">
      color="dimmed"
      key={link.label}
      // href={link.link}
      sx={{ lineHeight: 1, margin: "0 16px" }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Box
      sx={{
        marginTop: auth ? 19 : 48,
        marginBottom: auth ? "unset" : 16,
        backgroundColor: "transparent",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <Container size="xl">
        <div className={classes.inner}>
          <Group sx={{ maxWidth: "100%" }}>
            <Image src={Logo} withPlaceholder width={50} fit="contain" />
            <Title order={6}>TICKETTE</Title>
          </Group>

          <Group spacing="xs" position="right" noWrap>
            <Group className={classes.links}>{items}</Group>
            <ActionIcon size="lg" variant="filled" radius="xl" color="gray.6">
              <FaFacebookF size={25} />
            </ActionIcon>
            <ActionIcon size="lg" variant="filled" radius="xl" color="gray.6">
              <AiOutlineInstagram size={25} />
            </ActionIcon>
            <ActionIcon size="lg" variant="filled" radius="xl" color="gray.6">
              <AiOutlineTwitter size={25} />
            </ActionIcon>
          </Group>
        </div>
        <Divider my="sm" />
        <Group
          sx={{ maxWidth: "100%", padding: "8px 0" }}
          align="center"
          position="apart"
        >
          <Text size="xs">TICKETTEE. 2022 - All Rights Reserved</Text>
          <Text size="xs">Created by ITD</Text>
        </Group>
      </Container>
    </Box>
  );
}
