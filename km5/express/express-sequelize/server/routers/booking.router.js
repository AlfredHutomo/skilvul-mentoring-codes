const bookingController = require("../controllers/booking.controller");
const bookingRouter = require("express").Router();

bookingRouter.get("/", bookingController.findAll);
bookingRouter.get("/:id", bookingController.findOne);
bookingRouter.post("/", bookingController.create);
bookingRouter.put("/:id", bookingController.update);
bookingRouter.delete("/:id", bookingController.delete);

module.exports = bookingRouter;
