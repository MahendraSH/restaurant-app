import ErrorHandler from "../../utils/error-handler.js";
import cookieMaker from "../../utils/cookie-maker.js";
import userModels from "../../db/models/user-models.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";
import bcrypt from "bcryptjs";
import cloudinary from "cloudinary";
//  register user
export const registerController = asyncErrorHandler(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return next(new ErrorHandler("Please enter all fields", 400));
    }
    const userFind = await userModels.findOne({ email });
    if (userFind) {
        return next(new ErrorHandler("User already exists", 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModels.create({
        name,
        email,
        password: hashedPassword,
    });
    cookieMaker(res, 200, user);
})

// login user
export const loginController = asyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please enter all fields", 400));
    }
    const user = await userModels.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }
    cookieMaker(res, 200, user);
})

//  get all users
export const getAllUsers = asyncErrorHandler(async (req, res, next) => {
    const users = await userModels.find();
    res.status(200).json({
        success: true,
        users
    })
})

//  get single user
export const getSingleUser = asyncErrorHandler(async (req, res, next) => {
    const user = await userModels.findById(req.params.id);
    res.status(200).json({
        success: true,
        user
    })
})

//  add profile Image  using cloudinary
export const updateProfileImage = asyncErrorHandler(async (req, res, next) => {
    const user = await userModels.findById(req.user.id);
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale"
    });
    user.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
    }
    await user.save();
    res.status(200).json({
        success: true,
        user
    })
})

//  delete profile Image
export const deleteProfileImage = asyncErrorHandler(async (req, res, next) => {
    const user = await userModels.findById(req.user.id);
    const myCloud = await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    user.avatar = {
        public_id: "",
        url: ""
    }
    await user.save();
    res.status(200).json({
        success: true,
        user
    })
})

//  make admin role 
export const makeAdmin = asyncErrorHandler(async (req, res, next) => {
    const user = await userModels.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler("User not found", 400));
    }
    user.role = "admin";
    await user.save();
    res.status(200).json({
        success: true,
        user
    })
})

