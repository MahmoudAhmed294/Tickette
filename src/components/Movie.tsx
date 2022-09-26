import React, { useState } from "react";
import {
  createStyles,
  Paper,
  Text,
  Box,
  ActionIcon,
  Transition,
  Center,
  Overlay,
  Button,
  Stack,
} from "@mantine/core";
import poster2 from "../assets/images/poster2.jpg";
import { BsBookmark } from "@react-icons/all-files/bs/BsBookmark";
import { BsBookmarkFill } from "@react-icons/all-files/bs/BsBookmarkFill";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { FiPlus } from "@react-icons/all-files/fi/FiPlus";
import { useHover } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";


type Props = {
  show?: boolean;
};
const Movie = ({ show }: Props) => {
  const navigator = useNavigate()
  const { hovered, ref } = useHover();
  const [isInWishlist, addInWishlist] = useState(false);
  const addToWishlist = () => {
    addInWishlist(!isInWishlist);
  };


  return (
    <Box
      sx={{
        height: 400,
        maxWidth: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Paper
        p="md"
        radius="md"
        sx={{
          backgroundImage: `url(${poster2})`,
          height: "100%",
          width: "100%",
          position: "relative",
          backgroundSize: "contend",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        ref={ref}
      >
        {!show ? (
          <ActionIcon
            size="xl"
            sx={{
              position: "absolute",
              zIndex: 1000,
              right: 16,
              "& svg": {
                fill: isInWishlist ? "#DA7A2F" : "#fff",
              },
            }}
            onClick={addToWishlist}
          >
            {isInWishlist ? (
              <BsBookmarkFill size={38} />
            ) : (
              <BsBookmark size={38} />
            )}
          </ActionIcon>
        ) : (
          <Box
            sx={{
              backgroundColor: "#DA7A2F",
              padding: "12px 16px",
              borderRadius: "0 50px 50px 0",
              position: "absolute",
              zIndex: 1000,
              width: "fit-content",
              left: -8,
              "& ::after": {
                content: '""',
                display: "block",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "7px solid #B65F1B",
                position: "absolute",
                left: 0,
                bottom: -6,
                transform: "rotateZ(45deg)",
              },
            }}
          >
            <Text size="xs">Best watching</Text>
          </Box>
        )}

        <Center sx={{ width: "100%", height: "100%" }}>
          <Transition
            mounted={hovered}
            transition="fade"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles}>
                {hovered && (
                  <div>
                    <Stack sx={{ zIndex: 100, position: "relative" }}>
                      <Button
                        variant="filled"
                        size="md"
                        leftIcon={<FiPlus size={25} />}
                        onClick={() => navigator('/moviesDetails')}
                      >
                        More
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        leftIcon={<BsFillPlayFill size={25} />}
                      >
                        Tailer
                      </Button>
                    </Stack>
                    <Overlay opacity={0.7} color="#110E53" zIndex={5} />
                  </div>
                )}
              </div>
            )}
          </Transition>
        </Center>
      </Paper>
      {!show && (
        <Text size="xl" align="center" my={16}>
          The Invitation
        </Text>
      )}
    </Box>
  );
};

export default Movie;
