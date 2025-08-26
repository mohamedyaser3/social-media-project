import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
export default function PostBody({ postBody }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* محتوى البوست */}
      <p className="mb-3 text-gray-800">{postBody.text || postBody.body}</p>
      {postBody.image && (
        <img
          src={postBody.image}
          alt="post"
          className="rounded-lg mb-3 max-h-96 object-cover w-full cursor-pointer hover:opacity-90 transition"
          onClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <img
                  src={postBody.image}
                  alt="post"
                  className="rounded-lg max-h-[80vh] object-contain"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
