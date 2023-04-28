import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChangeEventStub } from "./index";

interface CustomSelectProps {
  takeAction: (event: ChangeEventStub) => void;
  name: string;
  options: string[];
  selectedValue?: string;
}

export const CustomSelectFilter = ({
  takeAction,
  name,
  options,
  selectedValue,
}: CustomSelectProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        w={"50%"}
        rightIcon={<ChevronDownIcon fontWeight="extrabold" fontSize={20} />}
        backgroundColor="brand.background"
        border="1px solid transparent"
        textAlign="left"
        _hover={{
          borderColor: "brand.primary",
          boxShadow: "none",
        }}
        _active={{
          borderColor: "brand.primary",
          boxShadow: "none",
        }}
        color={selectedValue ? "brand.text" : "chakra-placeholder-color"}
        fontWeight="medium"
      >
        {selectedValue || name}
      </MenuButton>
      <MenuList
        background="brand.background"
        borderColor="brand.primary"
        w="max"
      >
        {options.map((value) => (
          <MenuItem
            key={`${value}-option`}
            value="alive"
            onClick={() =>
              takeAction({
                target: { name, value },
              })
            }
            color="brand.text"
            backgroundColor="brand.background"
            fontWeight="medium"
            _hover={{
              backgroundColor: "brand.primary",
            }}
          >
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
