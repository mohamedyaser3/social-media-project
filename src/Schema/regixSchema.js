import * as zod from "zod";

export const schema = zod
  .object({
    name: zod
      .string()
      .nonempty(" Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(20, "Name must be at least 20 characters long"),
    email: zod
      .string()
      .nonempty(" Email is required")
      .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email"),
    password: zod
      .string()
      .nonempty(" Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    rePassword: zod.string(),
    dateOfBirth: zod.coerce.date().refine((date) => {
      const birthDay = date.getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthDay;
      return age >= 18;
    }, "You must be at least 18 years old"),
    gender: zod
      .string()
      .nonempty("Gender is required")
      .regex(/^(male|female)$/, "Invalid gender"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
