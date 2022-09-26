import { createStyles, Paper, Text, Title, Button, Box } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    width: "100%",
    position: "relative",
    backgroundSize: "contend",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

interface Props {
  image: string;
  title: string;
}

export default function Cinema({ image, title }: Props) {
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        width: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      component={Link}
      to="/cinemaDetails"
    >
      <Paper
        p="md"
        radius="md"
        sx={{
          backgroundImage: `url(${image})`,
          height: "320px",
          width: "100%",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </Paper>
      <Text size="xl" align="center" my={16}>
        {title}
      </Text>
    </Box>
  );
}
