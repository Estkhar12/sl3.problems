import { Router } from "express";
import {
  deepClone,
  flatArray,
  rotateMatrix90,
  throttleFun,
} from "./controller.js";

const route = Router();


route.post("/deepClone", deepClone);
route.post("/flatArray", flatArray);
route.post("/throttle", throttleFun);
route.post("/rotateMatrix", rotateMatrix90);

export default route;
