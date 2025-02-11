import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { appointmentExists } from "../helpers/db-validators.js"
import { query } from "express";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const updateAppoinmentValidator = [
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom( appointmentExists),
    validarCampos,
    handleErrors
]


