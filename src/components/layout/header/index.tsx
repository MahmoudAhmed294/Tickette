import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
  Box,
  Modal,
  Button,
  ActionIcon,
  useMantineTheme,
  NativeSelect,
  TextInput,
  Text,
  Grid,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,

    border: "unset",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    margin: "0 24px",
    borderRadius: 0,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    borderBottom: "1px solid transparent",

    "&:hover": {
      borderBottom: "1px solid",
      borderColor: theme.colors.orange[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors.orange[0],
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/myTickets",
    label: "My tickets",
  },
  {
    link: "/contactUs",
    label: "Contact Us",
  },
  {
    link: "/aboutUs",
    label: "About Us",
  },
];
export default function Index({ user = false }: { user?: boolean }) {
  let navigate = useNavigate();

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [IsModelOpened, setModelOpen] = useState(false);
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <Header height={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header} size="xl">
          <Box
            component={Link}
            to="/"
            sx={{ maxWidth: 60, maxHeight: HEADER_HEIGHT }}
          >
            <Image src={Logo} withPlaceholder fit="cover" />
          </Box>
          <Group spacing={5} className={classes.links}>
            {items}
            <Group>
              <ActionIcon
                variant="transparent"
                onClick={() => setModelOpen(true)}
                sx={{ margin: "0 16px" }}
              >
                <FiSearch size={24} />
              </ActionIcon>
              <Menu shadow="md" width={200}>
                {!user ? (
                  <ActionIcon
                    variant="transparent"
                    onClick={() => navigate("/login")}
                  >
                    <BiUser size={24} />
                  </ActionIcon>
                ) : (
                  <>
                    <Menu.Target>
                      <ActionIcon variant="transparent">
                        <BiUser size={24} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        component={"a"}
                        sx={{
                          "&[data-hovered]": {
                            backgroundColor: "unset !important",
                            opacity: 0.9,
                          },
                        }}
                      >
                        <Text size="md" color="brand.5">
                          Profile
                        </Text>
                      </Menu.Item>

                      <Menu.Item
                        color="dark"
                        component={"a"}
                        sx={{
                          "&[data-hovered]": {
                            backgroundColor: "unset !important",
                            opacity: 0.9,
                          },
                        }}
                      >
                        <Text size="md" color="brand.5">
                          My favorite
                        </Text>
                      </Menu.Item>
                      <Menu.Divider
                        sx={{
                          borderTop: "1px solid",
                          borderColor: "#BBBBBB",
                        }}
                      />
                      <Menu.Item
                        color="red"
                        icon={<BiLogOut size={25} />}
                        component={"a"}
                      >
                        <Text size="md" color="red">
                          logout
                        </Text>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </>
                )}
              </Menu>
            </Group>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
      <Modal
        opened={IsModelOpened}
        withCloseButton={false}
        onClose={() => setModelOpen(false)}
        centered
        overlayColor={"#110E53  "}
        overlayOpacity={0.7}
        overlayBlur={1}
        size="100vw"
        overflow="outside"
        sx={{ "& .mantine-Paper-root": { boxShadow: "unset" } }}
      >
        <Container size="md">
          <Grid grow>
            <Grid.Col span={8} p={0}>
              <TextInput
                variant="filled"
                placeholder="Search"
                size="lg"
                sx={{
                  input: {
                    borderRadius: "8px 0 0 8px",
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={2} p={0}>
              <NativeSelect
                data={["All", "Cinemas", "Events", "Movies"]}
                placeholder="Pick one"
                withAsterisk
                rightSection={<BiChevronDown size={25} />}
                rightSectionWidth={30}
                sx={{
                  ".mantine-NativeSelect-rightSection": {
                    color: "#333",
                  },

                  select: {
                    borderRadius: "0px",
                    border: "0",
                    color: "#333",
                  },
                }}
                size="lg"
              />
            </Grid.Col>
            <Grid.Col span={2} p={0}>
              <Button
                sx={{
                  borderRadius: "0 8px 8px 0",
                }}
                size="lg"
              >
                <Text size="md">Search</Text>
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Modal>
    </>
  );
}
