import { Router } from "express";
import isAuthUser from "../utils/isAuthUser.js";
import { registerController, loginController, getAllUsers, getSingleUser, updateProfileImage, deleteProfileImage, makeAdmin } from "./controllers/user-controller.js";
import { isAdmin } from "../utils/is-admin.js";
const userRouter = Router();

userRouter.route("/register").post(registerController);
userRouter.route("/login").post(loginController);
userRouter.route("/").get(isAuthUser, isAdmin, getAllUsers);
userRouter.route("/:id").get(isAuthUser, getSingleUser);
userRouter.route("/update-profile-image").put(isAuthUser, updateProfileImage);
userRouter.route("/delete-profile-image").delete(isAuthUser, deleteProfileImage);
userRouter.route("/make-admin/:id").put(isAuthUser, isAdmin, makeAdmin);

export default userRouter