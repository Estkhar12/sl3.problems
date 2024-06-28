import { Router } from "express";
import { deepClone } from "./controller.js";

const route = Router();

route.post("/deepClone", deepClone);

export default route;
