import { Router } from "express";
import { saveAppointment, updateAppointment, getApointment, cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppoinmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/:uid", getApointment);

router.put("/updateAppintment/:uid", updateAppoinmentValidator, updateAppointment); 

router.patch("/cancelAppointment/:id", updateAppoinmentValidator, cancelAppointment);

export default router;