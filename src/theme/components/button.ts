import { ButtonStylesParams } from "@mantine/core";

export const Button = {
  styles: (theme: any, params: ButtonStylesParams) => ({
    root: {
      fontweight: 500,
      backgroundColor: params.variant === "filled" && theme?.colors?.orange[0],
      borderColor: params.variant === "outline" && theme?.colors?.orange[0],
      border: params.variant === "outline" && "1px solid",
      " :hover": {
        transition: "0.2s ease-in-out ",
        backgroundColor:
          params.variant === "outline"
            ? theme?.colors?.orange[0]
            : params.variant === "subtle" && "unset",
        opacity: params.variant === "filled" && 0.9,
      },
    },
  }),
};
