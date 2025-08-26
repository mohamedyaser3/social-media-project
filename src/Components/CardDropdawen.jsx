import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";

export default function CardDropdawen({ onOpen, setIsUpdateMood }) {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div>
            <i class="fa-solid fa-ellipsis fa-1xl cursor-pointer"></i>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onPress={() => {
              setIsUpdateMood(true);
            }}
            key="new"
          >
            Edite
          </DropdownItem>
          <DropdownItem
            onPress={onOpen}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
