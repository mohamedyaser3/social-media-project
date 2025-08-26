// import { Button, Input, Select, SelectItem } from "@heroui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { schema } from "../Schema/regixSchema";
// import { registrApi } from "../service/authService";
// import { Link, useNavigate } from "react-router-dom";

// export default function RegisterPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errmsg, setErrmsg] = useState();
//   const [successMsg, setSuccessMsg] = useState();

//   const navigate = useNavigate()

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       dateOfBirth: "",
//       gender: "",
//     },
//     resolver: zodResolver(schema),
//     mode: "onBlur",
//   });
//   console.log(errors);

//   async function handlrigestr(formData) {
//     setIsLoading(true);
//     const data = await registrApi(formData);
//     setIsLoading(false);
//     if (data.error) {
//       setErrmsg(data.error);
//       setSuccessMsg("");
//     } else {
//       setErrmsg("");
//       setSuccessMsg(data.message);
//       navigate("/login")
//     }
//     console.log(data);
//   }

//   return (
//     <>
//       <div className=" max-w-xl mx-auto  py-10 my-4 p-2 shadow-2xl rounded-3xl">
//         <form onSubmit={handleSubmit(handlrigestr)}>
//           <div className="flex flex-col gap-4">
//             <Input
//               isInvalid={Boolean(errors.name?.message)}
//               errorMessage={errors.name?.message}
//               variant="bordered"
//               label="Name"
//               type="name"
//               {...register("name")}
//             />
//             <Input
//               isInvalid={Boolean(errors.email?.message)}
//               errorMessage={errors.email?.message}
//               variant="bordered"
//               label="Email"
//               type="email"
//               {...register("email")}
//             />
//             <Input
//               isInvalid={Boolean(errors.password?.message)}
//               errorMessage={errors.password?.message}
//               variant="bordered"
//               label="Password"
//               type="password"
//               {...register("password")}
//             />
//             <Input
//               isInvalid={Boolean(errors.rePassword?.message)}
//               errorMessage={errors.rePassword?.message}
//               variant="bordered"
//               label="Confirm Password"
//               type="password"
//               {...register("rePassword")}
//             />
//             <Input
//               isInvalid={Boolean(errors.dateOfBirth?.message)}
//               errorMessage={errors.dateOfBirth?.message}
//               variant="bordered"
//               label="Date Of Birth"
//               type="date"
//               {...register("dateOfBirth")}
//             />
//             <Select
//               isInvalid={Boolean(errors.gender?.message)}
//               errorMessage={errors.gender?.message}
//               variant="bordered"
//               label="Gender"
//               placeholder="Select an animal"
//               {...register("gender")}
//             >
//               <SelectItem key={"male"}>male</SelectItem>
//               <SelectItem key={"female"}>female</SelectItem>
//             </Select>
//             <Button
//               isLoading={isLoading}
//               type="supmit"
//               variant="bordered"
//               color="primary"
//             >
//               register
//             </Button>
//             <p className="text-danger text-center">{errmsg}</p>
//             <p className="text-success text-center">{successMsg}</p>
//             <p className="text-center">
//               u dont have an account?{" "}
//               <Link to="/login" className="text-primary">
//                 login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// import { Button, Input, Select, SelectItem } from "@heroui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { schema } from "../Schema/regixSchema";
// import { registrApi } from "../service/authService";
// import { Link, useNavigate } from "react-router-dom";

// export default function RegisterPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errmsg, setErrmsg] = useState();
//   const [successMsg, setSuccessMsg] = useState();

//   const navigate = useNavigate();

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       dateOfBirth: "",
//       gender: "",
//     },
//     resolver: zodResolver(schema),
//     mode: "onBlur",
//   });

//   async function handlrigestr(formData) {
//     setIsLoading(true);
//     const data = await registrApi(formData);
//     setIsLoading(false);
//     if (data.error) {
//       setErrmsg(data.error);
//       setSuccessMsg("");
//     } else {
//       setErrmsg("");
//       setSuccessMsg(data.message);
//       navigate("/login");
//     }
//   }

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-4">
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Create Account
//         </h1>
//         <form onSubmit={handleSubmit(handlrigestr)} className="space-y-5">
//           <Input
//             isInvalid={Boolean(errors.name?.message)}
//             errorMessage={errors.name?.message}
//             variant="bordered"
//             label="Full Name"
//             type="text"
//             {...register("name")}
//           />
//           <Input
//             isInvalid={Boolean(errors.email?.message)}
//             errorMessage={errors.email?.message}
//             variant="bordered"
//             label="Email Address"
//             type="email"
//             {...register("email")}
//           />
//           <Input
//             isInvalid={Boolean(errors.password?.message)}
//             errorMessage={errors.password?.message}
//             variant="bordered"
//             label="Password"
//             type="password"
//             {...register("password")}
//           />
//           <Input
//             isInvalid={Boolean(errors.rePassword?.message)}
//             errorMessage={errors.rePassword?.message}
//             variant="bordered"
//             label="Confirm Password"
//             type="password"
//             {...register("rePassword")}
//           />
//           <Input
//             isInvalid={Boolean(errors.dateOfBirth?.message)}
//             errorMessage={errors.dateOfBirth?.message}
//             variant="bordered"
//             label="Date of Birth"
//             type="date"
//             {...register("dateOfBirth")}
//           />
//           <Select
//             isInvalid={Boolean(errors.gender?.message)}
//             errorMessage={errors.gender?.message}
//             variant="bordered"
//             label="Gender"
//             placeholder="Select your gender"
//             {...register("gender")}
//           >
//             <SelectItem key={"male"}>Male</SelectItem>
//             <SelectItem key={"female"}>Female</SelectItem>
//           </Select>
//           <Button
//             isLoading={isLoading}
//             type="submit"
//             color="primary"
//             className="w-full"
//           >
//             Register
//           </Button>
//           {errmsg && <p className="text-red-500 text-center">{errmsg}</p>}
//           {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
//           <p className="text-center text-gray-700">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600 font-medium hover:underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </main>
//   );
// }

import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../Schema/regixSchema";
import { registrApi } from "../service/authService";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  async function handlrigestr(formData) {
    setIsLoading(true);
    const data = await registrApi(formData);
    setIsLoading(false);
    if (data.error) {
      setErrmsg(data);
      setSuccessMsg("");
    } else {
      setErrmsg("");
      setSuccessMsg(data.message);
      navigate("/login");
    }
  }

  // return (
  //   <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black flex items-center justify-center p-4">
  //     <div className=" bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full">
        
      

  //       {/* Right side: Form */}
  //       <div className="w-full p-6">
  //         <h1 className="text-3xl font-bold text-center text-amber-400 mb-6">Create Account</h1>
  //         <form onSubmit={handleSubmit(handlrigestr)} className="space-y-4 text-lime-50">
  //           <Input
  //             isInvalid={Boolean(errors.name?.message)}
  //             errorMessage={errors.name?.message}
  //             variant="bordered"
  //             label="Full Name"
  //             type="text"
  //             {...register("name")}
  //           />
  //           <Input
  //             isInvalid={Boolean(errors.email?.message)}
  //             errorMessage={errors.email?.message}
  //             variant="bordered"
  //             label="Email Address"
  //             type="email"
  //             {...register("email")}
  //           />
  //           <Input
  //             isInvalid={Boolean(errors.password?.message)}
  //             errorMessage={errors.password?.message}
  //             variant="bordered"
  //             label="Password"
  //             type="password"
  //             {...register("password")}
  //           />
  //           <Input
  //             isInvalid={Boolean(errors.rePassword?.message)}
  //             errorMessage={errors.rePassword?.message}
  //             variant="bordered"
  //             label="Confirm Password"
  //             type="password"
  //             {...register("rePassword")}
  //           />
  //           <Input
  //             isInvalid={Boolean(errors.dateOfBirth?.message)}
  //             errorMessage={errors.dateOfBirth?.message}
  //             variant="bordered"
  //             label="Date of Birth"
  //             type="date"
  //             {...register("dateOfBirth")}
  //           />
  //           <Select
  //             isInvalid={Boolean(errors.gender?.message)}
  //             errorMessage={errors.gender?.message}
  //             variant="bordered"
  //             label="Gender"
  //             placeholder="Select your gender"
  //             {...register("gender")}
  //           >
  //             <SelectItem key={"male"}>Male</SelectItem>
  //             <SelectItem key={"female"}>Female</SelectItem>
  //           </Select>
  //           <Button
  //             isLoading={isLoading}
  //             type="submit"
  //             color="primary"
  //             className="w-full"
  //           >
  //             Register
  //           </Button>
  //           {errmsg && <p className="text-red-500 text-center">{errmsg}</p>}
  //           {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
  //           <p className="text-center text-white">
  //             Already have an account?{" "}
  //             <Link to="/login" className="text-amber-400 hover:underline">
  //               Login
  //             </Link>
  //           </p>
  //         </form>
  //       </div>
  //     </div>
  //   </main>
  // );
  return (
  <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full p-8">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-8">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(handlrigestr)} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lime-50">
        
        {/* البيانات الشخصية */}
        <div className="space-y-4">
          <Input
            isInvalid={Boolean(errors.name?.message)}
            errorMessage={errors.name?.message}
            variant="bordered"
            label="Full Name"
            type="text"
            {...register("name")}
          />
          <Input
            isInvalid={Boolean(errors.dateOfBirth?.message)}
            errorMessage={errors.dateOfBirth?.message}
            variant="bordered"
            label="Date of Birth"
            type="date"
            {...register("dateOfBirth")}
          />
          <Select
            isInvalid={Boolean(errors.gender?.message)}
            errorMessage={errors.gender?.message}
            variant="bordered"
            label="Gender"
            placeholder="Select your gender"
            {...register("gender")}
          >
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>
        </div>

        {/* بيانات الحساب */}
        <div className="space-y-4">
          <Input
            isInvalid={Boolean(errors.email?.message)}
            errorMessage={errors.email?.message}
            variant="bordered"
            label="Email Address"
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
          <Input
            isInvalid={Boolean(errors.rePassword?.message)}
            errorMessage={errors.rePassword?.message}
            variant="bordered"
            label="Confirm Password"
            type="password"
            {...register("rePassword")}
          />
        </div>

        {/* زر التسجيل والرسائل */}
        <div className="md:col-span-2 space-y-4">
          <Button
            isLoading={isLoading}
            type="submit"
            color="primary"
            className="w-full"
          >
            Register
          </Button>
          {errmsg && <p className="text-red-500 text-center">{errmsg}</p>}
          {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
          <p className="text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  </main>
);

}
