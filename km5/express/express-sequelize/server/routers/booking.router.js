const bookingController = require("../controllers/booking.controller");
const bookingRouter = require("express").Router();

bookingRouter.get("/", bookingController.findAll); // GET: /api/booking
bookingRouter.get("/:id", bookingController.findOne); // GET: /api/booking/:id
bookingRouter.post("/", bookingController.create); // POST: /api/booking
bookingRouter.put("/:id", bookingController.update); // PUT: /api/booking/:id
bookingRouter.delete("/:id", bookingController.delete); // DELETE: /api/booking/:id

module.exports = bookingRouter;
