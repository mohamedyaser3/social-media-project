// import { Button, Input } from "@heroui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { loginApi } from "../service/authService";
// import { loginschema } from "../Schema/loginSchema";
// import { Link, useNavigate } from "react-router-dom";
// import NotFoundPage from "./NotFoundPage";
// import { authContext } from "../Contexts/AuthContext";
// import imgs from "../assets/premium_photo-1664373232759-6e7cd0cfb6fa.avif";

// export default function LoginPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errmsg, setErrmsg] = useState();
//   const navigate = useNavigate();
//   const { setIsLoggdin } = useContext(authContext);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: zodResolver(loginschema),
//   });
//   console.log(errors);

//   async function handlLogin(formData) {
//     setIsLoading(true);
//     const data = await loginApi(formData);
//     setIsLoading(false);

//     if (data.message == "success") {
//       localStorage.setItem("token", data.token);
//       setIsLoggdin(true);
//       navigate("/");
//     } else {
//       setErrmsg(data);
//     }
//   }

//   return (
//     <>
//     <main className="bg-[url(./assets/dark-blue-product-background.jpg)] bg-contain bg-center h-lvh overflow-hidden">
//       <div className="flex flex-row my-6 justify-center">
//         <div className="  py-10 my-6 p-2 shadow-2xl ">
//           <h1 className="text-3xl text-amber-500 text-center font-bold py-5">
//             Login Page
//           </h1>
//           <form className="text-lime-50" onSubmit={handleSubmit(handlLogin)}>
//             <div className="flex flex-col gap-4">
//               <Input
//                 isInvalid={Boolean(errors.email?.message)}
//                 errorMessage={errors.email?.message}
//                 variant="bordered"
//                 label="Email"
//                 type="email"
//                 {...register("email")}
//               />
//               <Input
//                 isInvalid={Boolean(errors.password?.message)}
//                 errorMessage={errors.password?.message}
//                 variant="bordered"
//                 label="Password"
//                 type="password"
//                 {...register("password")}
//               />
//               <Button
//                 isLoading={isLoading}
//                 type="submit"
//                 variant="bordered"
//                 color="primary"
//               >
//                 Login
//               </Button>
//               <p className="text-danger text-center">{errmsg}</p>
//               <p className="text-center">
//                 u dont have an account?{" "}
//                 <Link to="/register" className="text-primary">
//                   creat acount now
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="my-6 ">
//           <img src={imgs} className="w-70" alt="img" />
//         </div>
//       </div>
//       </main>
//     </>
//   );
// }

import { Button, Input, Card, CardBody, CardHeader } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../service/authService";
import { loginschema } from "../Schema/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";
import imgs from "../assets/premium_photo-1664373232759-6e7cd0cfb6fa.avif";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const navigate = useNavigate();
  const { setIsLoggdin } = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginschema),
  });

  async function handlLogin(formData) {
    setIsLoading(true);
    const data = await loginApi(formData);
    setIsLoading(false);

    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      setIsLoggdin(true);
      navigate("/");
    } else {
      setErrmsg(data);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full">
        
        {/* Left side: Image */}
        <div className="hidden md:block w-1/2">
          <img src={imgs} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center text-amber-400 mb-6">Login</h1>
          <form onSubmit={handleSubmit(handlLogin)} className="space-y-4 text-lime-50">
            <Input
              isInvalid={Boolean(errors.email?.message)}
              errorMessage={errors.email?.message}
              variant="bordered"
              label="Email"
              type="email"
              {...register("email")}
            />
            <Input
              isInvalid={Boolean(errors.password?.message)}
              errorMessage={errors.password?.message}
              variant="bordered"
              label="Password"
              type="password"
              {...register("password")}
            />
            <Button
              isLoading={isLoading}
              type="submit"
              color="primary"
              className="w-full"
            >
              Login
            </Button>
            {errmsg && <p className="text-red-500 text-center">{errmsg}</p>}
            <p className="text-center text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-amber-400 hover:underline">
                Create one now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
