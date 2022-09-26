import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
} from "@mantine/core";
import {FaPlay} from "@react-icons/all-files/fa/FaPlay";

const useStyles = createStyles((theme) => ({
  card: {
    height: 400,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: -55,
  },

  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}));

interface ImageActionBannerProps {
  URl?: string;
  image: string;
}

export default function Banner({
  URl,
  image,
  style,
  className,
  ...others
}: ImageActionBannerProps &
  Omit<CardProps, keyof ImageActionBannerProps | "children">) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
      {...others}
    >
      <Overlay color={"#110E53"} opacity={0.20} zIndex={0} />

      <Button variant="filled" size="lg"
      leftIcon={<FaPlay />}
      sx={{position:"absolute",
      bottom: 32,
      left:32

      }}
      >
        Watch trailer
      </Button>
    </Card>
  );
}
