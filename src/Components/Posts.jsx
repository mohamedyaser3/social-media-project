import { useContext, useState } from "react";
import CardHeader from "./Post/CardHeader";
import Comment from "./Post/Comment";
import PostActions from "./Post/PostActions";
import PostBody from "./Post/PostBody";
import { Button, Input, useDisclosure } from "@heroui/react";
import { addComment } from "../service/commentService";
import { authContext } from "../Contexts/AuthContext";
import { deletSinglePostApi } from "../service/PostsService";
import CardDropdawen from "./CardDropdawen";
import ModalComponent from "./ModalComponent";
import CreatePost from "./Post/CreatPost";

export default function Posts({
  post,
  count,
  handleIncrement,
  commentLimit,
  callbace,
  getAllPosts,
}) {
  const [visaplecomment, setVisapleComment] = useState(2);
  const [commentContent, setCommentContent] = useState("");
  const { userData } = useContext(authContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isPostDeleteing, setIsPostDeleteing] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false)

  async function handleComment() {
    setIsLoding(true);
    await addComment(commentContent, post._id);
    setCommentContent("");
    callbace();
    setIsLoding(false);
  }

  async function handleDeletPostApi(onClose) {
    setIsPostDeleteing(true);
    const response = await deletSinglePostApi(post._id);
    if (response.message == "success") {
      await getAllPosts();
      setIsPostDeleteing(false);
      onClose();
    }
  }

  return <>
      {isUpdate ?<div> <CreatePost isUpdate={isUpdate} setIsUpdate={setIsUpdate} post={post} callbace={callbace}/></div> :
      <div className=" rounded-lg shadow p-2 border border-gray-500 mt-4">
        <div className="flex justify-end">
          {post.user._id == userData?._id && <CardDropdawen onClose={onclose} setIsUpdate={setIsUpdate}  onOpen={onOpen} />}
        </div>
        <CardHeader cardHeader={post} />
        <PostBody postBody={post} />
        <PostActions
          postId={post.id}
          post={post}
          handleIncrement={handleIncrement}
          count={count}
        />
        <div className="flex my-3">
          <Input
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            variant="bordered"
            placeholder="Add a comment..."
          />
          <Button
            isLoading={isLoding}
            onPress={handleComment}
            variant="primary"
            className=" bg-default ms-2"
          >
            Comment
          </Button>
        </div>
        {post.comments
          .slice(0, commentLimit ?? visaplecomment)
          .map((comment) => (
            <Comment
              getAllPosts={getAllPosts}
              key={comment.id}
              comment={comment}
            />
          ))}
        {post.comments.length > visaplecomment && !commentLimit && (
          <Button
            className="mx-auto block"
            variant="ghost"
            onPress={() => {
              setVisapleComment(visaplecomment + 2);
            }}
          >
            Load more
          </Button>
        )}
        <ModalComponent
        deleteFunction={handleDeletPostApi}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={"Delete Post"}
        isLoading={isPostDeleteing}
      />
      </div>
      
      }
    </>
}
