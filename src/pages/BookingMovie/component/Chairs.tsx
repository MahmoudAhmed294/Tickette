import React, { useState } from "react";
import availableImg from "../../../assets/images/available.svg";
import selectedImg from "../../../assets/images/selected.svg";
import reservedImg from "../../../assets/images/Reserved.svg";
import { ActionIcon, Image } from "@mantine/core";

type Props = {
  reserved?: boolean;
};

const Chairs = ({ reserved }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <ActionIcon
        onClick={() => setIsSelected(!isSelected)}
        disabled={reserved}
        sx={{
          "&[data-disabled]": {
            backgroundColor: "transparent !important",
            border: "unset",
          },
        }}
      >
        <Image
          src={isSelected ? selectedImg : reserved ? reservedImg : availableImg}
          sx={{
            transition: "0.2s ease-in ",
            transform: isSelected ? "scale(1)" : "scale(0.9)",
          }}
          width={27}
          height={32}
        />
      </ActionIcon>
    </div>
  );
};

export default Chairs;
