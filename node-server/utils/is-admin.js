//  is admin 

export const isAdmin = async (req, res, next) => {
    if (req.user.role !== "admin") {
        return next(new ErrorHandler("Only admins are allowed", 403));
    }
    next();
}