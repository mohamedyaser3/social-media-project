import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  useDisclosure,
} from "@heroui/react";
import imageuser from "../../assets/user-photo.webp";
import { useContext, useState } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { deletSingleCommentApi, updateCommentApi } from "../../service/commentService";
import CardDropdawen from "../CardDropdawen";
import ModalComponent from "../ModalComponent";

export default function Comment({ comment, getAllPosts }) {
  const { userData } = useContext(authContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [iscommentDeleteing, setiscommentDeleteing] = useState(false);
  const [isUpdateMood, setIsUpdateMood] = useState(false);
  const [newCommentContent, setNewCommentContent] = useState(comment.content)
  const [isUpdate, setIsUpdate] = useState(false)

  async function handleDeletcommentApi(onClose) {
    setiscommentDeleteing(true);
    const response = await deletSingleCommentApi(comment._id);
    if (response.message == "success") {
      await getAllPosts();
      onClose();
    }
    setiscommentDeleteing(false);
  }

  async function handlUpdateComment(){
    setIsUpdate(true)
    const response = await updateCommentApi(comment._id, newCommentContent)
    console.log(response);
    if(response.message == "success"){
     await getAllPosts()
      setIsUpdateMood(false)
    }
    setIsUpdate(false)
  }

  return (
    <>
      <div className=" bg-gray-200 my-4 p-1 shadow-2xl">
        <div className="flex justify-end">
          {comment.commentCreator._id === userData?._id && (
            <CardDropdawen setIsUpdateMood={setIsUpdateMood} onOpen={onOpen} />
          )}
        </div>
        <div className="flex items-center mb-3">
          <img
            onError={(e) => (e.target.src = imageuser)}
            src={comment.commentCreator}
            alt="profile"
            className="w-10 h-10 rounded-full mr-2 p-1"
          />
          <div>
            <h2 className="font-semibold">
              {comment.commentCreator.name || "User"}
            </h2>
            <p className="text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        {isUpdateMood ? (
          <div className="ps-12 pt-3">
            <Input isDisabled={isUpdate} value={newCommentContent} onChange={(e)=> setNewCommentContent(e.target.value)} variant="bordered" />
            <div className="mt-2 flex justify-end gap-2">
              <Button onPress={()=> setIsUpdateMood(false)} color="default" variant="bordered">
                Cancel
              </Button>
              <Button isDisabled={newCommentContent.trim().length < 2} isLoading={isUpdate} onPress={handlUpdateComment} color="primary">Update</Button>
            </div>
          </div>
        ) : (
          <p className="px-10">{comment.content}</p>
        )}
      </div>
      <ModalComponent
        isLoading={iscommentDeleteing}
        deleteFunction={handleDeletcommentApi}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={"Delete Comment"}
      />
    </>
  );
}
