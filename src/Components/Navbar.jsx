// import React, { useContext } from "react";
// import {
//   Navbar as HeroUiNavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@heroui/react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { authContext } from "../Contexts/AuthContext";

// export default function Navbar() {
//   const navigat = useNavigate();

//   const { isLoggdin, setIsLoggdin, userData } = useContext(authContext);

//   function logOut() {
//     localStorage.removeItem("token");
//     setIsLoggdin(false);
//     navigat("/login");
//   }
//   function login() {
//     navigat("/login");
//   }
//   function signup() {
//     navigat("/register");
//   }
//   return (
//     <HeroUiNavbar isBordered>
//       <NavLink to="/">
//         <p className="font-bold text-inherit">Circle</p>
//       </NavLink>
//       {isLoggdin && userData?._id && (
//         <NavLink className="ms-100" to={`/profile/${userData._id}`}>
//           <p className="font-bold text-inherit hover:text-danger mt-4">
//             Profile
//           </p>
//         </NavLink>
//       )}
//       <NavbarContent justify="end">
//         {isLoggdin ? (
//           <NavbarItem>
//             <Button onPress={logOut} color="danger" variant="flat">
//               Sign out
//             </Button>
//           </NavbarItem>
//         ) : (
//           <>
//             <NavbarItem className="flex">
//               <Button onPress={login} color="default" variant="flat">
//                 Login
//               </Button>
//             </NavbarItem>
//             <NavbarItem>
//               <Button onPress={signup} color="primary" variant="flat">
//                 Sign Up
//               </Button>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>
//     </HeroUiNavbar>
//   );
// }

// import React, { useContext, useState } from "react";
// import {
//   Navbar as HeroUiNavbar,
//   NavbarContent,
//   NavbarItem,
//   Button,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Input,
// } from "@heroui/react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { authContext } from "../Contexts/AuthContext";
// import { changePasswordApi } from "../service/authService";

// export default function Navbar() {
//   const navigat = useNavigate();
//   const { isLoggdin, setIsLoggdin, userData } = useContext(authContext);

//   // modal state
//   const [isOpen, setIsOpen] = useState(false);
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   function logOut() {
//     localStorage.removeItem("token");
//     setIsLoggdin(false);
//     navigat("/login");
//   }

//   function login() {
//     navigat("/login");
//   }

//   function signup() {
//     navigat("/register");
//   }

//   // handle password change
//   async function handleChangePassword() {
//     setLoading(true);
//     try {
//       // هنا بتعمل API call لتغيير الباسورد
//       const response = await changePasswordApi({
//         password: oldPassword,
//         newPassword,
//       });

//       // مثال: await changePasswordApi({ oldPassword, newPassword });

//       if (response?.message === "success") {
//         alert("Password changed successfully!");
//         setIsOpen(false);
//         setOldPassword("");
//         setNewPassword("");
//       } else {
//         alert(response?.error || "Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   }

//   return (
//     <>
//       <HeroUiNavbar isBordered>
//         <NavLink to="/">
//           <p className="font-bold text-inherit">Circle</p>
//         </NavLink>

//         {isLoggdin && userData?._id && (
//           <NavLink className="ms-100" to={`/profile/${userData._id}`}>
//             <p className="font-bold text-inherit hover:text-danger mt-4">
//               Profile
//             </p>
//           </NavLink>
//         )}

//         <NavbarContent justify="end">
//           {isLoggdin ? (
//             <>
//               <NavbarItem>
//                 <Button
//                   onPress={() => setIsOpen(true)}
//                   color="primary"
//                   variant="flat"
//                 >
//                   Change Password
//                 </Button>
//               </NavbarItem>
//               <NavbarItem>
//                 <Button onPress={logOut} color="danger" variant="flat">
//                   Sign out
//                 </Button>
//               </NavbarItem>
//             </>
//           ) : (
//             <>
//               <NavbarItem className="flex">
//                 <Button onPress={login} color="default" variant="flat">
//                   Login
//                 </Button>
//               </NavbarItem>
//               <NavbarItem>
//                 <Button onPress={signup} color="primary" variant="flat">
//                   Sign Up
//                 </Button>
//               </NavbarItem>
//             </>
//           )}
//         </NavbarContent>
//       </HeroUiNavbar>

//       {/* Change Password Modal */}
//       <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
//         <ModalContent>
//           <ModalHeader>Change Password</ModalHeader>
//           <ModalBody>
//             <Input
//               type="password"
//               label="Old Password"
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//             />
//             <Input
//               type="password"
//               label="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="flat" onPress={() => setIsOpen(false)}>
//               Cancel
//             </Button>
//             <Button
//               color="primary"
//               isLoading={loading}
//               onPress={handleChangePassword}
//             >
//               Save
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
import React, { useContext, useState } from "react";
import {
  Navbar as HeroUiNavbar,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@heroui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";
import { changePasswordApi } from "../service/authService";

export default function Navbar() {
  const navigat = useNavigate();
  const { isLoggdin, setIsLoggdin, userData } = useContext(authContext);

  const [isOpen, setIsOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function logOut() {
    localStorage.removeItem("token");
    setIsLoggdin(false);
    navigat("/login");
  }

  function login() {
    navigat("/login");
  }

  function signup() {
    navigat("/register");
  }

  async function handleChangePassword() {
    setLoading(true);
    try {
      const response = await changePasswordApi({
        password: oldPassword,
        newPassword,
      });

      if (response?.message === "success") {
        alert("✅ Password changed successfully!");
        setIsOpen(false);
        setOldPassword("");
        setNewPassword("");
      } else {
        alert(`❌ ${response?.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Change Password Error:", error);
      alert("⚠️ Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Navbar */}
      <HeroUiNavbar isBordered className="flex flex-wrap">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-inherit">
          Circle
        </NavLink>

        {/* Profile link يظهر جنب اللوجو */}
        {isLoggdin && userData?._id && (
          <NavLink
            className="ml-4 text-sm md:text-base font-bold text-inherit hover:text-danger"
            to={`/profile/${userData._id}`}
          >
            Profile
          </NavLink>
        )}

        {/* زرار تسجيل الدخول/الخروج */}
        <NavbarContent
          justify="end"
          className="flex flex-wrap gap-2 md:gap-4 ml-auto"
        >
          {isLoggdin ? (
            <>
              <NavbarItem>
                <Button
                  onPress={() => setIsOpen(true)}
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Change Password
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  onPress={logOut}
                  color="danger"
                  variant="flat"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Sign out
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <Button
                  onPress={login}
                  color="default"
                  variant="flat"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  onPress={signup}
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </HeroUiNavbar>

      {/* Change Password Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} placement="center">
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            Change Password
          </ModalHeader>
          <ModalBody>
            <Input
              type="password"
              label="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full"
            />
            <Input
              type="password"
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="flat"
              onPress={() => setIsOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              isLoading={loading}
              onPress={handleChangePassword}
              className="w-full sm:w-auto"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
