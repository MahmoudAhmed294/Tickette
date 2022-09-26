import React from 'react'
import {
    SegmentedControl,
  } from "@mantine/core";
  
type Props = {
    data:{label:string , value:string}[]
}

const FilterButtons = ({data}: Props) => {
  return (
    <SegmentedControl
    sx={{
      border: "1px solid #fff",
      borderBottom: "unset",
      borderRadius: "8px 8px 0 0",
      padding: "0",
      ".mantine-SegmentedControl-label":{
        whiteSpace:"pre-wrap",
        color:"#fff",
      padding: "9px 5px",

      },
      "& .mantine-SegmentedControl-controlActive": {
        backgroundColor: "#DA7A2F !important",
        border: "#DA7A2F 1px solid",
        borderRadius: "0",
      },
      ".mantine-SegmentedControl-control":{
          width: "190px"
      }
    }}
    color="#DA7A2F"
    size="lg"
    data={data}
  />
)
}

export default FilterButtons