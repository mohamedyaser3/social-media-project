// import { useState } from "react";
// import { Button } from "@heroui/react";
// import { addPost, updatePostApi } from "../../service/PostsService";

// export default function CreatePost({
//   getAllPosts,
//   post,
//   isUpdate,
//   setIsUpdate,
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [body, setBody] = useState(post?.body ?? "");
//   const [isLoding, setIsLoding] = useState(false);
//   console.log(post);

//   // لما يختار صورة
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//     }
//   };

//   // إرسال البوست
//   async function handleSubmit() {

//     setIsLoding(true);
//     const formData = new FormData();

//     if (selectedImage) {
//       formData.append("image", selectedImage);
//     }
//     if (body) {
//       formData.append("body", body);
//     }
//     let response;
//     if (isUpdate) {
//       response = await updatePostApi(formData, post.id);
//     } else {
//       response = await addPost(formData);
//     }
//     console.log(response);
//     // بعد الإرسال نظف البيانات
//     setBody("");
//     setSelectedImage(null);
//     setIsOpen(false);
//     getAllPosts();
//     setIsLoding(false);
//   }

//   const handleClose = () => {
//     setBody("");
//     setSelectedImage(null);
//     setIsOpen(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-6 space-y-6">
//       {isOpen ? (
//         <div className="bg-white rounded-lg shadow p-4 relative">
//           <button
//             onClick={handleClose}
//             className="absolute top-0 right-1 left-163 text-gray-500 hover:text-red-500"
//           >
//             ✖
//           </button>

//           <textarea
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="What's on your mind?"
//             className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
//           />

//           {/* عرض المعاينة لو فيه صورة */}
//           {selectedImage && (
//             <div className="mt-3 relative">
//               <img
//                 src={URL.createObjectURL(selectedImage)}
//                 alt="Preview"
//                 className="w-fit rounded-lg object-cover"
//               />
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm hover:bg-gray-200"
//               >
//                 ✖
//               </button>
//             </div>
//           )}

//           <div className="flex items-center justify-between mt-3">
//             <label className="cursor-pointer bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
//               📷 Photo
//               <input
//                 type="file"
//                 accept="image/"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </label>
//             {isUpdate && (
//               <Button onPress={() => setIsUpdate(false)}>Cancel</Button>
//             )}
//             <Button
//               isLoading={isLoding}
//               isDisabled={!body.trim() && !selectedImage}
//               onPress={handleSubmit}
//               className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 "
//             >
//               Post
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-white rounded-lg shadow p-4 w-full text-left"
//         >
//           What's on your mind?
//         </button>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@heroui/react";
import {
  addPost,
  getAllPostsApi,
  updatePostApi,
} from "../../service/PostsService";

export default function CreatePost({
  post,
  isUpdate,
  setIsUpdate,
  getAllPosts,
}) {
  const [selectedImage, setSelectedImage] = useState(null); // ✅ null بدل string
  const [body, setBody] = useState(post?.body ?? "");
  const [isLoding, setIsLoding] = useState(false);

  // لما يختار صورة جديدة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // إرسال البوست (إضافة / تعديل)
  async function handleSubmit() {
    setIsLoding(true);
    try {
      const formData = new FormData();

      if (selectedImage) {
        formData.append("image", selectedImage); // صورة جديدة
      }
      if (body) {
        formData.append("body", body);
      }
      let response;
      if (isUpdate) {
        response = await updatePostApi(formData, post.id);
        setIsUpdate(false);
      } else {
        response = await addPost(formData);
      }

      console.log("Response:", response);
      // بعد الإرسال
      getAllPostsApi();
      getAllPosts();
      handleClose();
      if (isUpdate) 
      handleClose();
    } catch (err) {
      console.error("Submit Error:", err);
    } finally {
      setIsLoding(false);
      getAllPosts()
    }
  }

  // تنظيف
  const handleClose = () => {
    setBody("");
    setSelectedImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      <div className="bg-white rounded-lg shadow p-4 relative">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />

        {/* عرض المعاينة (صورة جديدة أو صورة قديمة) */}
        {(selectedImage || post?.img) && (
          <div className="mt-3 relative">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage) // جديدة
                  : post.img // قديمة
              }
              alt="Preview"
              className="w-fit rounded-lg object-cover"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm hover:bg-gray-200"
            >
              ✖
            </button>
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <label className="cursor-pointer bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
            📷 Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          {isUpdate && (
            <Button onPress={() => setIsUpdate(false)}>Cancel</Button>
          )}

          <Button
            isLoading={isLoding}
            isDisabled={!body.trim() && !selectedImage && !post?.img}
            onPress={handleSubmit}
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            {isUpdate ? "Update" : "Post"}
          </Button>
        </div>
      </div>
    </div>
  );
}
