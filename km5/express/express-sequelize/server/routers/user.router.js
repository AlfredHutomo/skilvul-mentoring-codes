const userController = require("../controllers/user.controller");
const userRouter = require("express").Router();

userRouter.post("/register", userController.reqister);
userRouter.post("/login", userController.login);

module.exports = userRouter;
