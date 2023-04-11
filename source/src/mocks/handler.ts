import { setupWorker } from "msw";
import { handlers } from "./handlers/productHandler";

export const worker = setupWorker(...handlers);
