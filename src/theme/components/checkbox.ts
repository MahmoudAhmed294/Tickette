import {  CheckboxProps } from '@mantine/core';

export const Checkbox = {
  styles: (theme: any, params: CheckboxProps) => ({
    root: {
        "& input":{

            borderColor:  theme?.colors?.light[2] +"!important",
            border: "1px solid ",
        }
    },
  }),
};
