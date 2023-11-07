const userController = require("../controllers/user.controller");
const userRouter = require("express").Router();

userRouter.post("/register", userController.reqister);
userRouter.post("/login", userController.login);
userRouter.get("/:id/bookings", userController.userBookings); // GET: /api/user/:id/bookings

module.exports = userRouter;
