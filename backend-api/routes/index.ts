import { Router } from "express";
import { todoRoute } from "./todo.route";

const allRouter: Router = Router();

allRouter.use("/", todoRoute);

export const router = allRouter;
