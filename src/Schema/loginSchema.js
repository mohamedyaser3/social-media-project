import * as zod from "zod";

export const loginschema = zod.object({
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
});
