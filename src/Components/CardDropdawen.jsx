import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";

export default function CardDropdawen({ onOpen, setIsUpdateMood, setIsUpdate }) {
  function handleEdit() {
  setIsUpdateMood(true);
  setIsUpdate(true);
}
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
            onPress={handleEdit}
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
