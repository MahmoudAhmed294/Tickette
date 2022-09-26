import { Group, Stack, Title } from "@mantine/core";
import Chair from "./Chairs";

type Props = {};

const ChairsList = (props: Props) => {
  return (
    <Stack>
      {Array.apply(null, Array(4)).map((val, idx) => (
        <Group align="center" position="apart">
          <Group spacing={16} align="center" position="center">
            <Title order={6} mr={32}>
              {idx === 0
                ? "D"
                : idx === 1
                ? "C"
                : idx === 2
                ? "B"
                : idx === 3 && "A"}
            </Title>
            {Array.apply(null, Array(idx !== 3 ? 5 : 3)).map((val, idx) => (
              <Chair />
            ))}
          </Group>
          <Group spacing={16} align="center" position="center">
            {Array.apply(null, Array(idx !== 3 ? 5 : 3)).map((val, idx) =>
              idx === 2 ? <Chair /> : <Chair reserved />
            )}
          </Group>
        </Group>
      ))}
    </Stack>
  );
};

export default ChairsList;
