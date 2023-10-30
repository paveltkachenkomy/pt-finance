export * as Utils from "./utils";

// Подключаем обработку переменных окружения
import {config} from "dotenv";
import path from "path";
export const cfg = () => { return config({path: path.resolve(__dirname, `../../../configs/${process.env.NODE_ENV || "development"}.env`)})};
