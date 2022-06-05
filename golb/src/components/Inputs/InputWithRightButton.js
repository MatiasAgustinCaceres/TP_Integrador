import React from "react";
import { Input, Icon } from "atomize";

export default function InputWithRightButton({type, icon}) {
  return (
    <Input
      placeholder="User Name"
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name={icon}
          color="brand300"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
  );
}
