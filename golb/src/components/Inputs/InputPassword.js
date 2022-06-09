// Show Hide Password
import { Input, Button, Icon } from "atomize";
import React, { useState } from "react";

export default function InputPassword({placeholder,func, inputName}) {  
    const [showPassword, setShowPassword]=useState(false);
  
    return (
    <Input
        m={{t: "0.8rem"}}
        placeholder={placeholder}
        id={inputName}
        name={inputName}
        onChange={func}
        type={showPassword ? "text" : "password"}
        suffix={
        <Button
            pos="absolute"
            onClick={() => setShowPassword(!showPassword)}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
        >
            <Icon
            name={showPassword ? "EyeSolid" : "Eye"}
            color={showPassword ? "danger800" : "success800"}
            size="16px"
            />
        </Button>
        }
    />
);
}
